<template>
  <div class="Bars">
    <div class="Bars__radial-gradient-background" />
    <LayoutTopBar />
    <slot />
    <LayoutBottomBar />
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/main.scss" as *;
@use "@/styles/animations.scss" as *;
@use "@/styles/variables.scss" as *;
.Bars {
  @apply relative bg-cyan-950/20;

  &__radial-gradient-background {
    @apply fixed inset-0;
    background: radial-gradient(
      circle,
      $gradient-radial-start-color 0%,
      $gradient-radial-end-color 100%
    );
    animation: pulseGradient 8s ease-in-out infinite;
  }

  background-image:
    radial-gradient($dots-color 1px, transparent 1px),
    radial-gradient($dots-color 1px, transparent 1px);
  background-size: $dots-bg-size $dots-bg-size;
  background-position:
    0 0,
    $dots-bg-size * 0.5 $dots-bg-size * 0.5;
  background-color: $dots-background-color;
  // animation: floatingDots 1s ease-in-out infinite;
}
</style>
