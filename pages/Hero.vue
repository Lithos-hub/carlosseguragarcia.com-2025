<template>
  <div class="Hero__background--shape-1" />
  <HeroSection />
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "blur",
  },
});

useHead({
  title: "Carlos Segura García - <Hero />",
});

const router = useRouter();

// Scroll handler
const onScrollDown = (e: WheelEvent) => {
  // Prevent if control key is pressed
  if (e.ctrlKey) {
    return;
  }

  handleScrollDown({ event: e, callback: () => router.push("/experience") });
};

// Touch handler
const onTouchDown = (() => {
  let startY = 0;

  return {
    start: (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    },
    end: (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (deltaY > 50) {
        // If the user scrolls down 50px, push to experience page
        router.push("/experience");
      }
    },
  };
})();

onMounted(() => {
  // Mouse wheel event listener
  window.addEventListener("wheel", onScrollDown, { passive: true });

  // Touch event listeners
  window.addEventListener("touchstart", onTouchDown.start, { passive: true });
  window.addEventListener("touchend", onTouchDown.end, { passive: true });
});

onUnmounted(() => {
  // Remove event listeners
  window.removeEventListener("wheel", onScrollDown);
  window.removeEventListener("touchstart", onTouchDown.start);
  window.removeEventListener("touchend", onTouchDown.end);
});
</script>

<style lang="scss" scoped>
.Hero {
  &__background {
    &--shape-1 {
      @apply absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2;

      // Rotate 3D
      transform: skewX(-40deg);
    }
  }
}
</style>
