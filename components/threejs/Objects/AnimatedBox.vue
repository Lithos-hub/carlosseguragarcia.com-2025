<template>
  <TresMesh ref="boxRef" :position="[0, 0, 0]">
    <TresBoxGeometry :args="[1, 1, 1]" />
    <TresMeshStandardMaterial
      color="red"
      transparent
      wireframe
      :metalness="0.1"
      :roughness="0.8"
    />
  </TresMesh>
</template>

<script setup lang="ts">
import { type TresInstance, useRenderLoop } from "@tresjs/core";
import type { ShallowRef } from "vue";

const boxRef: ShallowRef<TresInstance | null> = shallowRef(null);

const { onLoop } = useRenderLoop();

onLoop(({ delta, elapsed }) => {
  if (boxRef.value) {
    boxRef.value.rotation.y += delta * 0.05;
    boxRef.value.rotation.z = elapsed * 0.05;
  }
});
</script>
