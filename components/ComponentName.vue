<template>
  <div
    class="ComponentName"
    :class="{
      'text-primary': color === 'primary',
      'text-secondary': color === 'secondary',
    }"
  >
    {{ componentName }}
  </div>
</template>

<script setup lang="ts">
interface ComponentNameProps {
  componentName: string;
  color: "primary" | "secondary";
}

const props = withDefaults(defineProps<ComponentNameProps>(), {
  color: "primary",
});
</script>

<style lang="scss" scoped>
.ComponentName {
  @apply absolute right-5 top-5 z-20 font-lucania text-[9px];
}
</style>
