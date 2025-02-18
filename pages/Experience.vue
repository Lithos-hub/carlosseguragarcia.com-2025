<template>
  <SectionExperience />
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "blur",
  },
});

useHead({
  title: "Carlos Segura García - <Experience />",
});

const router = useRouter();

// Scroll handler
const onScrollDown = (e: WheelEvent) => {
  // Prevent if control key is pressed
  if (e.ctrlKey) {
    return;
  }

  if (e.deltaY > 0) {
    router.push("/projects");
  }
};

const onScrollUp = (e: WheelEvent) => {
  // Prevent if control key is pressed
  if (e.ctrlKey) {
    return;
  }

  if (e.deltaY < 0) {
    router.push("/hero");
  }
};

// Touch handler
const onTouchHandler = (() => {
  let startY = 0;

  return {
    start: (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    },
    end: (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (deltaY > 50) {
        // Si el usuario desliza hacia abajo (más de 50px)
        router.push("/experience");
      } else if (deltaY < -50) {
        // Si el usuario desliza hacia arriba (más de 50px)
        router.push("/hero");
      }
    },
  };
})();

onMounted(() => {
  // Mouse wheel event listeners
  window.addEventListener("wheel", onScrollDown, { passive: true });
  window.addEventListener("wheel", onScrollUp, { passive: true });

  // Touch event listeners
  window.addEventListener("touchstart", onTouchHandler.start, {
    passive: true,
  });
  window.addEventListener("touchend", onTouchHandler.end, { passive: true });
});

onUnmounted(() => {
  // Remove event listeners
  window.removeEventListener("wheel", onScrollDown);
  window.removeEventListener("wheel", onScrollUp);
  window.removeEventListener("touchstart", onTouchHandler.start);
  window.removeEventListener("touchend", onTouchHandler.end);
});
</script>
