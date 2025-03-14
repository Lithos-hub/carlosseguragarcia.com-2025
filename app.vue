<template>
  <div class="App">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@use "@/styles/main.scss" as *;

* {
  @apply text-stone-700;
}

$bg-radial-start-color: rgba(90, 189, 198, 0.1);
$bg-radial-end-color: rgba(0, 0, 0, 0.9);

.App {
  @apply bg-white dark:bg-cyan-950/20;
  position: relative;
  overflow: hidden;

  &__radial-gradient-background {
    background: radial-gradient(
      circle,
      $bg-radial-start-color 0%,
      $bg-radial-end-color 100%
    );
    animation: pulseGradient 8s ease-in-out infinite;
  }
}

// Debugging CSS
// * {
//   outline: 1px solid red;
// }
</style>
