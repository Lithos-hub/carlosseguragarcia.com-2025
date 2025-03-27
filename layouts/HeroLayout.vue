<template>
  <div class="HeroLayout">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;

.HeroLayout {
  @apply border border-secondarySoft;
}
</style>
