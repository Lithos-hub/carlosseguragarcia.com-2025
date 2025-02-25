<template>
  <div class="LeftColumn">
    <div class="LeftColumn__containers">
      <div class="LeftColumn__top-container" />
      <div class="LeftColumn__line-diagonal-middle" />

      <div
        v-for="i in 80"
        :key="`extra-line-diagonal-middle-${i}`"
        :class="[
          `LeftColumn__extra-line-diagonal-middle-${i}`,
          {
            'vue-gradient-bg': visualDataBySection?.id === 'hero',
            'typescript-gradient-bg': visualDataBySection?.id === 'experience',
            'vite-gradient-bg': visualDataBySection?.id === 'projects',
          },
        ]"
        :style="{
          top: `${800 + -i * 5}px`,
          opacity: `${1 - i * 0.1}`,
        }"
      />
      <div
        v-for="i in 80"
        :key="`extra-line-diagonal-top-${i}`"
        class="LeftColumn__extra-line-diagonal-top"
        :class="[
          `LeftColumn__extra-line-diagonal-top-${i}`,
          {
            'vue-gradient-bg': visualDataBySection?.id === 'hero',
            'typescript-gradient-bg': visualDataBySection?.id === 'experience',
            'vite-gradient-bg': visualDataBySection?.id === 'projects',
          },
        ]"
        :style="{
          top: `${545 + i * 5}px`,
          opacity: `${1 - i * 0.1}`,
        }"
      />
      <div class="LeftColumn__bottom-container" />
      <div class="LeftColumn__line-diagonal-bottom" />
      <!-- <div
        class="LeftColumn__extra-line-bottom"
        :class="{
          'vue-gradient-bg': visualDataBySection?.id === 'hero',
          'typescript-gradient-bg': visualDataBySection?.id === 'experience',
          'vite-gradient-bg': visualDataBySection?.id === 'projects',
        }"
      /> -->
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
  @include colored-line;
  @apply h-full w-[80px] border-r;;

  &__containers {
    @apply relative flex h-full w-[80px] flex-col;
  }

  &__top-container {
    @include colored-line;
    @apply flex h-[500px] w-full;
  }

  &__bottom-container {
    @include colored-line;
    @apply flex h-[50px] w-[40px] flex-1 border-r;
  }

  &__line-diagonal-middle {
    @include colored-background;
    @apply mr-[20px] h-[50px] w-[1px] rotate-45 self-end;
  }

  @for $i from 1 through 55 {
    &__extra-line-diagonal-top-#{$i} {
      @include colored-background;
      @apply absolute right-[20px] h-[40px] w-[1px] -rotate-45;
      animation: opacity-motion 3s linear infinite;
      animation-delay: #{$i * 0.2}s;
    }
  }

  @for $i from 1 through 55 {
    &__extra-line-diagonal-middle-#{$i} {
      @include colored-background;
      @apply absolute right-[20px] h-[40px] w-[1px] rotate-45;
      animation: opacity-motion 3s linear infinite;
      animation-delay: #{$i * 0.2}s;
    }
  }

  &__line-diagonal-bottom {
    @include colored-background;
    @apply mr-[20px] h-[50px] w-[1px] -rotate-45 self-end;
  }

  // &__extra-line-bottom {
  //   @apply absolute bottom-0 right-[20px] h-[200px] w-[20px];
  //   clip-path: polygon(100% 0, 100% 100%, 0 100%, 0% 7.5%);
  // }
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
