<template>
  <div class="App">
    <WhiteNoise />
    <MobileMenu />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@use "@/styles/main.scss" as *;
@use "@/styles/variables.scss" as *;
@use "@/styles/animations.scss" as *;

.App {
  @apply bg-cyan-950/20;

  &__radial-gradient-background {
    background: radial-gradient(
      circle,
      $gradient-primary-radial-start-color 0%,
      $gradient-radial-end-color 100%
    );
    animation: pulseGradient 8s ease-in-out infinite;
  }
}
</style>
