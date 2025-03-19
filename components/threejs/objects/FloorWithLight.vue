<template>
  <!-- Floating lights (now multiple) with changing shape -->
  <!-- <template v-for="(light, index) in lights" :key="index">
    <TresGroup
      :ref="
        (el) => {
          if (el) lightGroupRefs[index] = el;
        }
      "
    >
      <TresGroup
        :rotation="
          light.direction === 'horizontal' ? [0, 0, 0] : [0, 0, Math.PI / 2]
        "
      >
        <TresMesh
          :position="[0, 0, 1]"
          :scale="
            light.direction === 'horizontal' ? [2, 0.8, 0.8] : [0.8, 2, 0.8]
          "
        >
          <TresSphereGeometry :args="[0.1, 32, 32]" />
          <TresMeshStandardMaterial
            :color="light.color"
            :emissive="light.color"
            :emissiveIntensity="100"
          />
        </TresMesh>
      </TresGroup>

      <TresPointLight
        :position="[0, 0, 0]"
        :intensity="500"
        :color="light.color"
        :distance="10"
        :decay="2"
      />
    </TresGroup>
  </template> -->

  <!-- Light emissive plane -->
  <TresMesh ref="lightEmissivePlaneRef" :position="[0, 0, -50]">
    <TresPlaneGeometry :args="[width * 10, height * 10]" />
    <TresMeshPhysicalMaterial
      color="white"
      emissive="cyan"
      :emissive-intensity="10"
    />
    />
  </TresMesh>

  <TresInstancedMesh
    ref="instancesRef"
    cast-shadow
    receive-shadow
    :args="[null!, null!, numberOfCubes]"
  >
    <TresBoxGeometry :args="[cubeSize, cubeSize, 0.1]" />
    <!-- <TresMeshStandardMaterial
      :map="instancedMeshTexture.map"
      :roughness-map="instancedMeshTexture.roughnessMap"
      :normal-map="instancedMeshTexture.normalMap"
    /> -->
    <TresMeshStandardMaterial :roughness="0.5" :metalness="0.5" color="black" />
  </TresInstancedMesh>
</template>

<script lang="ts" setup>
import type { InstancedMesh } from "three";
import { Color, Matrix4, Vector3 } from "three";

// const instancedMeshTexture = await useTexture({
//   map: "/textures/metal/metal-44-dark_diffuse.jpg",
//   roughnessMap: "/textures/metal/metal-44_metal-metal-44_roughness.png",
//   normalMap: "/textures/metal/metal-44_normal.jpg",
// });

// Number of lights
const numberOfLights = 5;
// Plane state
const height = ref(200);
const width = ref(300);

// References
const instancesRef = shallowRef<InstancedMesh>();
const planeRef = shallowRef();
const lightGroupRefs = ref<any[]>([]);

// Configuration for cube distribution
const cubeSize = 6; // Cube size
const cubeSpacing = 6.001; // Cube spacing
const numberOfCubes = 700; // Total number of cubes

// Z movement configuration
const cubeZConfig = ref(
  Array(numberOfCubes)
    .fill(null)
    .map(() => ({
      maxHeight: 0.5 + Math.random() * 0.55, // Max random height between 2 and 3
      speed: 0.1 + Math.random() * 0.2, // Random speed between 0.1 and 1
      currentOffset: 0, // Current offset
      phase: Math.random() * Math.PI * 2, // Random phase for sinusoidal movement
    })),
);

// Data structure for light parameters
const lights = ref(
  Array.from({ length: numberOfLights }, (_, i) => ({
    position: new Vector3(0, 0, 1),
    direction: Math.random() > 0.5 ? "horizontal" : "vertical",
    speed: 5 + Math.random() * 10, // Random speed between 5-15
    color: "white",
    changeDirProbability: 0.02 + Math.random() * 0.08, // Between 0.02 and 0.1
    // Add property for transition tracking
    directionChangeTime: 0,
  })),
);

// Grid state
const gridSize = reactive({
  x: 0,
  y: 0,
  startX: 0,
  startY: 0,
});

// Function to distribute cubes uniformly
const distributeInstancesUniformly = () => {
  if (!instancesRef.value) return;

  const mesh = instancesRef.value;
  const matrix = new Matrix4();
  const color = new Color();

  const actualGridSizeX = Math.ceil(
    Math.sqrt(numberOfCubes * (width.value / height.value)),
  );
  const actualGridSizeY = Math.ceil(numberOfCubes / actualGridSizeX);

  // Save grid information for movement
  gridSize.x = actualGridSizeX;
  gridSize.y = actualGridSizeY;

  const totalWidthSpace = actualGridSizeX * cubeSpacing;
  const totalHeightSpace = actualGridSizeY * cubeSpacing;

  const startX = -totalWidthSpace / 2;
  const startY = -totalHeightSpace / 2;

  // Save initial positions
  gridSize.startX = startX;
  gridSize.startY = startY;

  // Initialize light positions in different points of the grid
  lights.value.forEach((light, index) => {
    // Distribute lights in different initial positions
    const rowOffset = Math.floor(
      (actualGridSizeY * (index + 1)) / (numberOfLights + 1),
    );
    const colOffset = Math.floor(
      (actualGridSizeX * (index + 1)) / (numberOfLights + 1),
    );

    light.position.x = startX + (colOffset + 0.5) * cubeSpacing;
    light.position.y = startY + (rowOffset + 0.5) * cubeSpacing;
    light.position.z = 0;

    // Random initial direction
    light.direction = Math.random() > 0.5 ? "horizontal" : "vertical";

    // Ensure the speed has the correct sign
    if (light.direction === "horizontal" && light.position.x > 0) {
      light.speed = -Math.abs(light.speed);
    } else if (light.direction === "vertical" && light.position.y > 0) {
      light.speed = -Math.abs(light.speed);
    } else {
      light.speed = Math.abs(light.speed);
    }
  });

  let index = 0;

  for (let y = 0; y < actualGridSizeY; y++) {
    for (let x = 0; x < actualGridSizeX; x++) {
      if (index >= numberOfCubes) break;

      const xPos = startX + x * cubeSpacing;
      const yPos = startY + y * cubeSpacing;

      // Inicializar configuración Z si es necesario
      if (!cubeZConfig.value[index]) {
        cubeZConfig.value[index] = {
          maxHeight: 0.5 + Math.random() * 2,
          speed: 0.2 + Math.random() * 0.8,
          currentOffset: 0,
          phase: Math.random() * Math.PI * 2,
        };
      }

      matrix.setPosition(xPos, yPos, cubeZConfig.value[index].currentOffset);
      mesh.setMatrixAt(index, matrix);

      // Optional: color cubes based on their position
      color.setHSL(Math.random(), 0.5, 0.5);
      mesh.setColorAt(index, color);

      index++;
    }
  }

  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;

  // Position the light groups in their initial positions
  updateLightPositions();
};

// Function to update the positions of the light groups
const updateLightPositions = () => {
  lightGroupRefs.value.forEach((group, index) => {
    if (group && index < lights.value.length) {
      const light = lights.value[index];
      group.position.set(light.position.x, light.position.y, light.position.z);
    }
  });
};

// Function to determine if a light is at an intersection
const isAtIntersection = (pos: Vector3) => {
  // Calculate the relative position within the grid
  const relX = pos.x - gridSize.startX;
  const relY = pos.y - gridSize.startY;

  // Get the cell indices
  const cellX = Math.floor(relX / cubeSpacing);
  const cellY = Math.floor(relY / cubeSpacing);

  // Calculate the coordinates of the nearest intersection center
  const intersectionX = gridSize.startX + (cellX + 0.5) * cubeSpacing;
  const intersectionY = gridSize.startY + (cellY + 0.5) * cubeSpacing;

  // Check if we are close to the intersection center
  const distance = Math.sqrt(
    Math.pow(pos.x - intersectionX, 2) + Math.pow(pos.y - intersectionY, 2),
  );

  return distance < 0.5; // Reduced tolerance
};

// Observe when the plane size changes to redistribute the cubes
watch([width, height], () => {
  distributeInstancesUniformly();
});

// Initialize the cubes when the component is ready
watch(instancesRef, (value) => {
  if (value) {
    distributeInstancesUniformly();
  }
});

const { onBeforeRender } = useLoop();

onBeforeRender(({ delta }) => {
  if (planeRef.value) {
    const newHeight = window.innerHeight / 200;
    const newWidth = window.innerWidth / 200;

    if (newHeight !== height.value || newWidth !== width.value) {
      height.value = newHeight;
      width.value = newWidth;
    }
  }

  // Actualizar posiciones Z de los cubos
  if (instancesRef.value) {
    const mesh = instancesRef.value;
    const matrix = new Matrix4();
    let needsUpdate = false;

    // Para cada cubo, calculamos su nueva posición en Z
    for (let i = 0; i < numberOfCubes; i++) {
      // Obtener la matriz actual
      mesh.getMatrixAt(i, matrix);

      // Extraer la posición actual
      const position = new Vector3();
      position.setFromMatrixPosition(matrix);

      // Calcular nueva posición Z usando movimiento senoidal
      const config = cubeZConfig.value[i];
      config.currentOffset =
        config.maxHeight *
        Math.sin(config.phase + Date.now() * 0.001 * config.speed);

      // Actualizar posición manteniendo X e Y igual
      matrix.setPosition(position.x, position.y, config.currentOffset);
      mesh.setMatrixAt(i, matrix);
      needsUpdate = true;
    }

    if (needsUpdate) {
      mesh.instanceMatrix.needsUpdate = true;
    }
  }

  // Move each light independently
  lights.value.forEach((light, lightIndex) => {
    // Limit delta to avoid large jumps if there is lag
    const cappedDelta = Math.min(delta, 0.1);

    // Check if we are at an intersection and possibly change direction
    if (
      isAtIntersection(light.position) &&
      Math.random() < light.changeDirProbability
    ) {
      const oldDirection = light.direction;
      light.direction =
        light.direction === "horizontal" ? "vertical" : "horizontal";

      // If direction changed, register the time of the change
      if (oldDirection !== light.direction) {
        light.directionChangeTime = Date.now();
      }
    }

    // Save the previous position to detect sudden jumps
    const oldX = light.position.x;
    const oldY = light.position.y;

    // Move in the current direction
    if (light.direction === "horizontal") {
      light.position.x += light.speed * cappedDelta;

      // If we reach the right or left edge, invert direction
      const maxX = gridSize.startX + (gridSize.x - 0.5) * cubeSpacing;
      const minX = gridSize.startX + 0.5 * cubeSpacing;

      if (light.position.x > maxX) {
        light.position.x = maxX;
        light.speed = -Math.abs(light.speed);
      } else if (light.position.x < minX) {
        light.position.x = minX;
        light.speed = Math.abs(light.speed);
      }

      // Keep aligned with the center of the hallway
      const relY = light.position.y - gridSize.startY;
      const rowIndex = Math.round(relY / cubeSpacing - 0.5);
      light.position.y = gridSize.startY + (rowIndex + 0.5) * cubeSpacing;
    } else {
      // Vertical movement
      light.position.y += light.speed * cappedDelta;

      // If we reach the top or bottom edge, invert direction
      const maxY = gridSize.startY + (gridSize.y - 0.5) * cubeSpacing;
      const minY = gridSize.startY + 0.5 * cubeSpacing;

      if (light.position.y > maxY) {
        light.position.y = maxY;
        light.speed = -Math.abs(light.speed);
      } else if (light.position.y < minY) {
        light.position.y = minY;
        light.speed = Math.abs(light.speed);
      }

      // Keep aligned with the center of the hallway
      const relX = light.position.x - gridSize.startX;
      const colIndex = Math.round(relX / cubeSpacing - 0.5);
      light.position.x = gridSize.startX + (colIndex + 0.5) * cubeSpacing;
    }

    // Prevent "teleportations" by checking that the movement is not excessive
    const maxMovementPerFrame = 2;
    if (Math.abs(light.position.x - oldX) > maxMovementPerFrame) {
      light.position.x =
        oldX + Math.sign(light.position.x - oldX) * maxMovementPerFrame;
    }
    if (Math.abs(light.position.y - oldY) > maxMovementPerFrame) {
      light.position.y =
        oldY + Math.sign(light.position.y - oldY) * maxMovementPerFrame;
    }

    // Update the position of the corresponding light group
    if (lightGroupRefs.value[lightIndex]) {
      lightGroupRefs.value[lightIndex].position.set(
        light.position.x,
        light.position.y,
        light.position.z,
      );
    }
  });
});
</script>
