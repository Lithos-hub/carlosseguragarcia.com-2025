<template>
  <div class="ComponentName">
    <div class="ComponentName__wrapper">
      <div class="relative">
        <div class="ComponentName__file-info">
          <div class="flex gap-2">
            <img src="/tech-logos/vue.svg" alt="Vue" class="h-4" />
            <small class="text-[10px]">{{ name }}</small>
          </div>
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
  @apply w-auto px-10 py-4;

  border-image: url("/svg/light-banner-1.svg") 0 0 fill;

  .dark & {
    border-image: url("/svg/dark-banner-1.svg") 0 0 fill;
  }

  &__file-info {
    @apply flex w-full flex-col items-center;

    img {
      @apply h-4;
    }

    small {
      @apply dark:text-primary text-stone-900;
    }
  }
}
</style>
