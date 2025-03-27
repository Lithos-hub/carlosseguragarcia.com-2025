<template>
  <!-- Light emissive plane -->
  <TresMesh ref="lightEmissivePlaneRef" :position="[0, 0, -50]">
    <TresPlaneGeometry :args="[width, height]" />
    <TresMeshPhysicalMaterial
      color="white"
      :emissive="sectionColor"
      :emissive-intensity="5"
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
    <TresMeshPhysicalMaterial
      :roughness="0.1"
      :metalness="0.2"
      :transmission="0.9"
      :thickness="1"
      :ior="1.5"
      :clearcoat="1.0"
      :opacity="1"
      color="black"
    />
  </TresInstancedMesh>
</template>

<script lang="ts" setup>
import type { InstancedMesh } from "three";
import { Matrix4, Vector3 } from "three";

const route = useRoute();

const sectionColor = computed(() => {
  if (route.path.includes("home")) return "#55ead4";
  if (route.path.includes("experience")) return "#c5003c";
  return "white";
});

// Plane state
const height = ref(200);
const width = ref(300);

// References
const instancesRef = shallowRef<InstancedMesh>();
const planeRef = shallowRef();
const lightEmissivePlaneRef = shallowRef();

// Configuration for cube distribution
const cubeSize = 1; // Cube size
const cubeSpacing = 1.001; // Cube spacing
const numberOfCubes = 5000; // Total number of cubes

// Z movement configuration
const cubeZConfig = ref(
  Array(numberOfCubes)
    .fill(null)
    .map(() => ({
      maxHeight: 0.5 + Math.random() * 0.501, // Max random height between 2 and 3
      speed: 0.01 + Math.random() * 0.05, // Random speed between 0.1 and 1
      currentOffset: 0, // Current offset
      phase: Math.random() * Math.PI * 2, // Random phase for sinusoidal movement
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

  let index = 0;

  for (let y = 0; y < actualGridSizeY; y++) {
    for (let x = 0; x < actualGridSizeX; x++) {
      if (index >= numberOfCubes) break;

      const xPos = startX + x * cubeSpacing;
      const yPos = startY + y * cubeSpacing;

      // Initialize Z configuration if necessary
      if (!cubeZConfig.value[index]) {
        cubeZConfig.value[index] = {
          maxHeight: 0.5 + Math.random() * 0.501,
          speed: 0.01 + Math.random() * 0.05,
          currentOffset: 0,
          phase: Math.random() * Math.PI * 2,
        };
      }

      matrix.setPosition(xPos, yPos, cubeZConfig.value[index].currentOffset);
      mesh.setMatrixAt(index, matrix);

      index++;
    }
  }

  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
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

onBeforeRender(() => {
  if (planeRef.value) {
    const newHeight = window.innerHeight / 200;
    const newWidth = window.innerWidth / 200;

    if (newHeight !== height.value || newWidth !== width.value) {
      height.value = newHeight;
      width.value = newWidth;
    }
  }

  // Update Z positions of the cubes
  if (instancesRef.value) {
    const mesh = instancesRef.value;
    const matrix = new Matrix4();
    let needsUpdate = false;

    // Tiempo actual para la animación de olas
    const time = Date.now() * 0.001;

    // Velocidad de propagación de las olas
    const waveSpeed = 0.1;

    // Frecuencia de las olas
    const waveFrequency = 0.5;

    // For each cube, calculate its new Z position
    for (let i = 0; i < numberOfCubes; i++) {
      // Get the current matrix
      mesh.getMatrixAt(i, matrix);

      // Extract the current position
      const position = new Vector3();
      position.setFromMatrixPosition(matrix);

      // Calculate distance from center
      const distanceFromCenter = Math.sqrt(
        position.x * position.x + position.y * position.y,
      );

      // Efecto de ola desde el centro hacia afuera
      // La fase depende de la distancia al centro
      const wavePhase = distanceFromCenter * waveFrequency - time * waveSpeed;

      // Calculate new Z position using outward wave movement
      const config = cubeZConfig.value[i];
      config.currentOffset =
        config.maxHeight * Math.sin(wavePhase + config.phase);

      // Calculate scale factor based on distance from center (más suave)
      const maxDistance = Math.max(width.value, height.value) / 2;
      const scaleZ = 1 + (distanceFromCenter / maxDistance) * 50;

      // Set scale and position
      matrix.makeScale(1.05, 2, scaleZ);
      matrix.setPosition(position.x, position.y, config.currentOffset);

      // Update the instance matrix
      mesh.setMatrixAt(i, matrix);
      needsUpdate = true;
    }

    if (needsUpdate) {
      mesh.instanceMatrix.needsUpdate = true;
    }
  }
});
</script>
