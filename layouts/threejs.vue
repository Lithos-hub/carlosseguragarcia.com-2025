<template>
  <div class="Experience">
    <div class="Experience__radial-gradient-background" />
    <Suspense>
      <ThreejsScene />

      <template #fallback>
        <div class="Experience__loading-experience">Loading...</div>
      </template>
    </Suspense>
    <slot />
  </div>
</template>

<style lang="scss">
@use "@/styles/main.scss" as *;

* {
  @apply text-stone-700;
}
.Experience {
  @apply bg-cyan-950/20;
  position: relative;
  overflow: hidden;

  &__radial-gradient-background {
    background: radial-gradient(
      circle,
      $bg-radial-start-color-dark 0%,
      $bg-radial-end-color-dark 100%
    );
    animation: pulseGradient 8s ease-in-out infinite;
  }
}
</style>
