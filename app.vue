<template>
  <div class="scroll-smooth bg-white dark:bg-stone-800">
    <NuxtLayout>
      <SectionHero />
      <SectionExperience />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@use "@/styles/main.scss" as *;

* {
  @apply text-stone-700;
}

.blur-enter-active,
.blur-leave-active {
  transition: all 0.4s;
}

.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
