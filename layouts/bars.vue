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
.Bars {
  @apply relative bg-cyan-950/20;

  $bg-size: 40px;
  $dots-color: #00eaff7d;
  $background-color: #08272a68;

  $bg-radial-start-color: rgba(0, 234, 255, 0.175);
  $bg-radial-end-color: rgb(0, 0, 0);

  &__radial-gradient-background {
    @apply fixed inset-0;
    background: radial-gradient(
      circle,
      $bg-radial-start-color 0%,
      $bg-radial-end-color 100%
    );
    animation: pulseGradient 8s ease-in-out infinite;
  }

  background-image:
    radial-gradient($dots-color 1px, transparent 1px),
    radial-gradient($dots-color 1px, transparent 1px);
  background-size: $bg-size $bg-size;
  background-position:
    0 0,
    $bg-size * 0.5 $bg-size * 0.5;
  background-color: $background-color;
  // animation: floatingDots 1s ease-in-out infinite;
}
</style>
