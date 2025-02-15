<template>
  <button v-bind="$attrs" :class="[`BaseButton BaseButton--${props.variant}`]">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface BaseButtonProps {
  variant: "primary" | "secondary";
}

const props = defineProps<BaseButtonProps>();
</script>

<style lang="scss" scoped>
.BaseButton {
  all: unset;

  @apply px-4 py-2;
  &--primary {
    @apply bg-primary/20 text-primary border-b border-r border-primary/10 rounded-lg;
  }

  &--secondary {
    @apply bg-secondary/20 text-secondary border-b border-r border-secondary/10 rounded-lg;
  }
}
</style>
