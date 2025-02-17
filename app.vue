<template>
  <div class="bg-stone-100 h-screen w-screen">
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

.from-bottom-enter-active,
.from-bottom-leave-active {
  transition: all 0.4s;
}

.from-bottom-enter-from,
.from-bottom-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
