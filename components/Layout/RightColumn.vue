<template>
  <!-- RIGHT COLUMN -->
  <div class="RightColumn">
    <div class="RightColumn__containers">
      <div class="RightColumn__top-container" />

      <div class="RightColumn__line-diagonal-top" />
      <div
        v-for="i in 50"
        :key="`extra-line-diagonal-top-${i}`"
        class="RightColumn__extra-line-diagonal-top"
        :class="[
          `RightColumn__extra-line-diagonal-top-${i}`,
          {
            'vue-gradient-bg': visualDataBySection?.id === 'hero',
            'typescript-gradient-bg': visualDataBySection?.id === 'experience',
            'vite-gradient-bg': visualDataBySection?.id === 'projects',
          },
        ]"
        :style="{
          top: `${245 + i * 5}px`,
          opacity: `${1 - i * 0.1}`,
        }"
      />
      <div class="RightColumn__container-middle" />
      <div
        v-for="i in 50"
        :key="`extra-line-diagonal-middle-${i}`"
        :class="[
          `RightColumn__extra-line-diagonal-middle-${i}`,
          {
            'vue-gradient-bg': visualDataBySection?.id === 'hero',
            'typescript-gradient-bg': visualDataBySection?.id === 'experience',
            'vite-gradient-bg': visualDataBySection?.id === 'projects',
          },
        ]"
        :style="{
          top: `${570 + -i * 5}px`,
          opacity: `${1 - i * 0.1}`,
        }"
      />
      <div class="RightColumn__line-diagonal-middle" />
      <div class="RightColumn__container-bottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { visualDataBySection } = storeToRefs(useUiStore());
</script>

<style lang="scss" scoped>
@use "@/styles/main.scss" as *;
@use "@/styles/general.scss" as *;
.RightColumn {
  @apply w-[100px];

  &__containers {
    @apply relative flex h-[calc(100vh-100px)] flex-col;
  }

  &__top-container {
    @include colored-line;
    @apply flex h-[240px] w-full flex-col items-center border-l pt-5;
  }

  &__container-middle {
    @include colored-line;
    @apply ml-auto h-[310px] w-[80px] border-l;
  }

  &__container-bottom {
    @include colored-line;
    @apply flex h-auto w-[100px] grow border-l;
  }

  &__line-diagonal-top {
    @include colored-background;
    @apply ml-[10px] h-[27px] w-[1px] -rotate-45 self-start;
  }

  @for $i from 1 through 40 {
    &__extra-line-diagonal-top-#{$i} {
      @include colored-background;
      @apply absolute left-[8px] h-[25px] w-[1px] -rotate-45;
      animation: opacity-motion 3s linear infinite;
      animation-delay: #{$i * 0.2}s;
    }
  }

  @for $i from 1 through 40 {
    &__extra-line-diagonal-middle-#{$i} {
      @include colored-background;
      @apply absolute left-[8px] top-[590px] h-[25px] w-[1px] rotate-45;
      animation: opacity-motion 3s linear infinite;
      animation-delay: #{$i * 0.2}s;
    }
  }

  &__line-diagonal-middle {
    @include colored-background;
    @apply ml-[10px] h-[27px] w-[1px] rotate-45 self-start;
  }

  &__container-bottom {
    @include colored-line;
    @apply h-[200px] border-l;
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
