<template>
  <primitive
    :object="scene"
    :scale="2"
    :rotation="[Math.PI / 2, Math.PI / 2, 0]"
  />
</template>

<script setup lang="ts">
const { scene } = await useGLTF("/gltf/triangle.gltf", { draco: true });
</script>
