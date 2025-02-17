<template>
  <div class="BackgroundLayers">
    <div class="BackgroundLayers__layer-1" />
  </div>
</template>

<style lang="scss" scoped>
.BackgroundLayers {
  @apply absolute left-0 top-0 z-0 h-full w-full;

  &__layer-1 {
    @apply bg-gradient-to-r from-stone-700 to-stone-500;
  }
}
</style>
