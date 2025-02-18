<template>
  <div class="RoutingButton">
    <NuxtLink :to>
      <div class="RoutingButton__routing-container">
        <UIcon
          v-if="direction === 'up'"
          name="i-heroicons-chevron-double-up"
          class="RoutingButton__routing-icon"
        />
        <small class="RoutingButton__routing-text">
          {{ text }}
        </small>
        <UIcon
          v-if="direction === 'down'"
          name="i-heroicons-chevron-double-down"
          class="RoutingButton__routing-icon"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface RoutingButtonProps {
  to: string;
  icon: string;
  text: string;
  direction: "up" | "down";
}

defineProps<RoutingButtonProps>();
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;

.RoutingButton {
  @apply flex h-[100px] flex-col items-center justify-center gap-2.5 text-center;

  &__routing-container {
    @apply flex h-[100px] flex-col items-center justify-center gap-2.5 dark:text-stone-200;
  }

  &__routing-icon {
    @apply h-5 w-5 animate-bounce object-contain opacity-50 dark:text-green-500;
  }

  &__routing-text {
    @apply font-jetbrainsMono max-w-[80vw] text-wrap text-xs text-stone-700/50 dark:text-green-500;
  }
}
</style>
