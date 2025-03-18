<template>
  <Levioso>
    <TresMesh ref="objectRef" :scale="5" :position="[0, 0, -10]">
      <primitive
        ref="objectRef"
        :object="scene"
        :scale="10"
        :rotation-x="Math.PI / 2"
      />
    </TresMesh>
  </Levioso>
</template>

<script setup lang="ts">
import { Levioso } from "@tresjs/cientos";

const { scene } = await useGLTF("/gltf/triangle.gltf", { draco: true });

const objectRef = shallowRef();

// Rotation loop
const { onBeforeRender } = useLoop();

onBeforeRender(({ delta }) => {
  if (objectRef.value) {
    // objectRef.value.rotation.x += delta * 0.1;
    objectRef.value.rotation.z += delta * 0.05;
    objectRef.value.rotation.x = Math.cos(delta * 0.05);
    objectRef.value.rotation.y = Math.sin(delta * 0.05);
  }
});
</script>
