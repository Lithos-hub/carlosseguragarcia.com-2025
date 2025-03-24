<template>
  <div class="App">
    <WhiteNoise />

    <RadialMenu />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { isRadialMenuVisible } = storeToRefs(useUiStore());

const listenControlKey = (event: KeyboardEvent) => {
  if (event.key === "Control") {
    isRadialMenuVisible.value = !isRadialMenuVisible.value;
  }
};

onMounted(() => {
  document.addEventListener("keydown", listenControlKey);
});

onUnmounted(() => {
  document.removeEventListener("keydown", listenControlKey);
});
</script>

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

// Page transition
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
