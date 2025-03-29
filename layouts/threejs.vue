<template>
  <div class="Experience">
    <div class="Experience__radial-gradient-background" />
    <ClientOnly>
      <Suspense>
        <ThreejsScene />

        <template #fallback>
          <div class="Experience__loading-experience">Loading...</div>
        </template>
      </Suspense>
    </ClientOnly>

    <LayoutTopBar />
    <slot />
    <LayoutBottomBar />
  </div>
</template>

<style lang="scss">
@use "@/styles/main.scss" as *;

.Experience {
  @apply bg-cyan-950/20;
  position: relative;
  overflow: hidden;

  $gradient-primary-radial-start-color: rgba(90, 189, 198, 0.1);
  $gradient-radial-end-color: rgba(0, 0, 0, 0.9);

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
