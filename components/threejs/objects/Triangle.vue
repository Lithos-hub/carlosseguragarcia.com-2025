<template>
  <TresMesh ref="objectRef" :scale="20" :position="[0, 0, -100]">
    <primitive
      ref="objectRef"
      :object="scene"
      :scale="10"
      :rotation="[Math.PI / 2, Math.PI / 2, 0]"
    />
  </TresMesh>
</template>

<script setup lang="ts">
const { scene } = await useGLTF("/gltf/triangle.gltf", { draco: true });

const objectRef = shallowRef();

// Rotation loop
const { onBeforeRender } = useLoop();

onBeforeRender(({ delta }) => {
  if (objectRef.value) {
    // objectRef.value.rotation.x += delta * 0.1;
    objectRef.value.rotation.z += delta * 0.05;
    // objectRef.value.rotation.x = Math.cos(delta * 0.05);
    // objectRef.value.rotation.y = Math.sin(delta * 0.05);
  }
});
</script>
