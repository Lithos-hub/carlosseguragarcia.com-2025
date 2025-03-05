<template>
  <div class="App">
    <div class="App__radial-gradient-background" />
    <TresCanvas window-size>
      <!-- Camera -->
      <TresPerspectiveCamera :position="[0, 0, 5]" />

      <!-- Lights -->
      <TresAmbientLight :intensity="1" />

      <!-- Post-processing -->
      <EffectComposerPmndrs>
        <NoisePmndrs premultiply :blend-function="BlendFunction.SCREEN" />
      </EffectComposerPmndrs>

      <!-- Objects -->
      <TresMesh scale-x="10" scale-y="5">
        <TresBoxGeometry />
        <TresMeshBasicMaterial
          :color="isDarkMode ? '#08272a' : '#eff1f0'"
          :tone-mapped="true"
          :transparent="true"
          :opacity="0.5"
        />
      </TresMesh>
    </TresCanvas>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { EffectComposerPmndrs } from "@tresjs/post-processing";

import { BlendFunction } from "postprocessing";

const isDarkMode = computed(() => useColorMode().value === "dark");
</script>

<style lang="scss">
@use "@/styles/main.scss" as *;

* {
  @apply text-stone-700;
}

.blur-enter-active,
.blur-leave-active {
  transition: all 0.4s;
}

.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

$bg-size: 40px;

$dots-color-light: oklch(0.216 0.006 56.043 / 0.5);
$dots-color-dark: oklch(0.85 0.15 195 / 0.8);

$background-color-light: #eff1f0;
$background-color-dark: #08272a68;

$bg-radial-start-color-light: oklch(0.216 0.006 56.043 / 0.1);
$bg-radial-end-color-light: rgba(255, 255, 255, 0.85);

$bg-radial-start-color-dark: rgba(90, 189, 198, 0.1);
$bg-radial-end-color-dark: rgba(0, 0, 0, 0.9);

@keyframes floatingDots {
  0% {
    background-position:
      0 0,
      $bg-size * 0.5 $bg-size * 0.5;
  }
  25% {
    background-position:
      $bg-size * 0.2 $bg-size * 0.1,
      $bg-size * 0.7 $bg-size * 0.6;
  }
  50% {
    background-position:
      $bg-size * 0.5 $bg-size * 0.2,
      $bg-size * 1 $bg-size * 0.7;
  }
  75% {
    background-position:
      $bg-size * 0.3 $bg-size * 0.3,
      $bg-size * 0.8 $bg-size * 0.8;
  }
  100% {
    background-position:
      0 0,
      $bg-size * 0.5 $bg-size * 0.5;
  }
}

@keyframes pulseGradient {
  0% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.9;
  }
}

.App {
  @apply bg-white dark:bg-cyan-950/20;
  position: relative;
  overflow: hidden;

  background-image:
    radial-gradient($dots-color-light 1px, transparent 1px),
    radial-gradient($dots-color-light 1px, transparent 1px);
  background-size: $bg-size $bg-size;
  background-position:
    0 0,
    $bg-size * 0.5 $bg-size * 0.5;
  background-color: $background-color-light;
  animation: floatingDots 15s ease-in-out infinite;

  &__radial-gradient-background {
    @apply fixed inset-0;
    background: radial-gradient(
      circle,
      $bg-radial-start-color-light 0%,
      $bg-radial-end-color-light 100%
    );
    animation: pulseGradient 8s ease-in-out infinite;
  }

  .dark & {
    background-image:
      radial-gradient($dots-color-dark 0.1px, transparent 1px),
      radial-gradient($dots-color-dark 0.1px, transparent 1px);
    background-color: $background-color-dark;
    animation: floatingDots 15s ease-in-out infinite;

    &__radial-gradient-background {
      background: radial-gradient(
        circle,
        $bg-radial-start-color-dark 0%,
        $bg-radial-end-color-dark 100%
      );
      animation: pulseGradient 8s ease-in-out infinite;
    }
  }
}

// Debugging CSS
// * {
//   outline: 1px solid red;
// }
</style>
