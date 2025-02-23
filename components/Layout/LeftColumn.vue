<template>
  <div class="LeftColumn">
    <div class="LeftColumn__containers">
      <div class="LeftColumn__top-container" />
      <div class="LeftColumn__line-diagonal-middle" />
      <div
        v-for="i in 50"
        :key="i"
        :class="[`LeftColumn__extra-line-diagonal-top-${i}`]"
        :style="{
          top: `${350 - i * 5.2}px`,
          opacity: `${1 - i * 0.01}`,
        }"
      />
      <div class="LeftColumn__bottom-container" />
      <div
        class="LeftColumn__extra-line-bottom"
        :class="{
          'vue-gradient-bg': visualDataBySection?.id === 'hero',
          'typescript-gradient-bg': visualDataBySection?.id === 'experience',
          'vite-gradient-bg': visualDataBySection?.id === 'projects',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { visualDataBySection } = storeToRefs(useUiStore());
</script>

<style lang="scss" scoped>
@use "@/styles/main.scss" as *;
@use "@/styles/general.scss" as *;
.LeftColumn {
  @apply h-full w-[80px];

  &__containers {
    @apply relative flex h-full w-[80px] flex-col;
  }

  &__top-container {
    @include colored-line;
    @apply flex h-[350px] w-full border-r;
  }

  &__bottom-container {
    @include colored-line;
    @apply flex h-full w-[60px] flex-1 border-r;
  }

  &__line-diagonal-middle {
    @include colored-background;
    @apply mr-[10px] h-[27px] w-[1px] rotate-45 self-end;
  }

  @for $i from 1 through 50 {
    &__extra-line-diagonal-top-#{$i} {
      @include colored-background;
      @apply absolute right-[15px] h-[20px] w-[1px] rotate-45;

      animation: opacity-motion 0.5s linear infinite;
      animation-delay: #{$i * 0.1}s;
    }
  }

  &__extra-line-bottom {
    @apply absolute bottom-0 right-[20px] h-[200px] w-[20px];
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0% 7.5%);
  }
}

@keyframes opacity-motion {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
