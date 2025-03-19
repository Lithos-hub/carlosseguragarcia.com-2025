<template>
  <TresMesh ref="objectRef" :scale="0.5" :position="[0, 0, 0]">
    <primitive
      ref="objectRef"
      :object="scene"
      :scale="1"
      :rotation="[Math.PI / 2, Math.PI, Math.PI / 2]"
    />
  </TresMesh>
</template>

<script setup lang="ts">
const { scene } = await useGLTF("/gltf/geonodes.gltf", { draco: true });

const objectRef = shallowRef();

// Rotation loop
const { onBeforeRender } = useLoop();

onBeforeRender(({ delta }) => {
  if (objectRef.value) {
    // objectRef.value.rotation.x += delta * 0.1;
    objectRef.value.rotation.y += delta;
    // objectRef.value.rotation.x = Math.cos(delta * 0.05);
    // objectRef.value.rotation.y = Math.sin(delta * 0.05);
  }
});
</script>
