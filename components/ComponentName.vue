<template>
  <div class="ComponentName__wrapper">
    <div class="relative">
      <div class="ComponentName__file-info">
        <img src="/tech-logos/vue.png" alt="Vue" class="h-4" />
        <code class="dark:text-primary text-xs">{{ name }}.vue</code>
      </div>

      <div class="floating-square" />

      <small class="mounted-time">Mounted in {{ mountedTime }}ms</small>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ComponentNameProps {
  name: string;
  mountedTime?: number;
}

defineProps<ComponentNameProps>();
</script>
<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;

.ComponentName {
  &__wrapper {
    @apply absolute right-0 top-5 flex flex-col items-center gap-2;
  }

  &__file-info {
    @apply flex items-center gap-2;
  }
}
.floating-square {
  @include colored-line;
  @apply absolute right-1/2 top-5 h-10 w-20 border-b border-r;
}

.mounted-time {
  @include primary-gradient-text;
  @apply absolute right-5 top-16 w-32 text-xs;
}
</style>
