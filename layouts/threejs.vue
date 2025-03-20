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

* {
  @apply text-stone-700;
}
.Experience {
  @apply bg-cyan-950/20;
  position: relative;
  overflow: hidden;

  $bg-radial-start-color: rgba(90, 189, 198, 0.1);
  $bg-radial-end-color: rgba(0, 0, 0, 0.9);

  &__radial-gradient-background {
    background: radial-gradient(
      circle,
      $bg-radial-start-color 0%,
      $bg-radial-end-color 100%
    );
    animation: pulseGradient 8s ease-in-out infinite;
  }
}
</style>
