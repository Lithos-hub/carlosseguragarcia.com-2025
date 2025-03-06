<template>
  <TresDirectionalLight
    v-light-helper
    ref="lightRef"
    :intensity="2"
    color="white"
  />
</template>

<script setup lang="ts">
import { type TresInstance, useLoop } from "@tresjs/core";
import type { ShallowRef } from "vue";

const lightRef: ShallowRef<TresInstance | null> = shallowRef(null);

const { onBeforeRender } = useLoop();

// Animación de la luz
onBeforeRender(({ delta, elapsed }) => {
  if (lightRef.value) {
    lightRef.value.position.x = Math.cos(elapsed) * 5;
    lightRef.value.position.z = Math.sin(elapsed) * 5;
    lightRef.value.position.y = Math.sin(elapsed) * 5;
  }
});
</script>
