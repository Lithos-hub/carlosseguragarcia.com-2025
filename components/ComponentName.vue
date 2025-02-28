<template>
  <div class="ComponentName">
    <div class="ComponentName__wrapper">
      <div class="relative">
        <div class="ComponentName__file-info">
          <img src="/tech-logos/vue.svg" alt="Vue" class="h-4" />
          <small class="ComponentName__file-info-text"
            >{{ name }} | Mounted in {{ mountedTime }}ms</small
          >
        </div>
      </div>
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
  @include middle-side-effect;
  @apply absolute right-0 top-[100px] flex flex-col items-end justify-center bg-stone-600/10 p-2 dark:bg-stone-900;
  clip-path: polygon(
    10% 0,
    100% 0,
    100% 20%,
    100% 80%,
    90% 100%,
    20% 100%,
    0 100%,
    0 30%
  );

  &::before {
    content: "";
    @apply absolute right-0 top-0 h-full w-full bg-stone-900/10 dark:bg-cyan-500/10;
    clip-path: polygon(99.5% 0, 100% 0, 100% 100%, 50% 100%);
  }

  &__wrapper {
    @apply flex flex-col items-end gap-2 p-2;
  }

  &__file-info {
    @apply flex items-center gap-2 text-[14px] text-stone-900 dark:text-white;
  }

  &__file-info-text {
    @apply dark:text-primary text-stone-900;
  }
}
</style>
