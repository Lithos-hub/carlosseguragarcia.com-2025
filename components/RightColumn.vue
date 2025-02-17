<template>
  <!-- RIGHT COLUMN -->
  <div class="RightColumn__column-right">
    <!-- SOCIAL NETWORKS -->
    <div class="RightColumn__column-right--actions">
      <a
        href="https://www.linkedin.com/in/carlos-segura-garcia"
        target="_blank"
      >
        <UIcon
          name="i-mdi-linkedin"
          class="h-6 w-6 text-stone-500 dark:text-white"
        />
      </a>
      <a href="https://github.com/lithos-hub" target="_blank">
        <UIcon
          name="i-mdi-github"
          class="h-6 w-6 text-stone-500 dark:text-white"
        />
      </a>
    </div>
    <div class="RightColumn__column-right--shapes">
      <!-- TOP LINE -->
      <div class="RightColumn__column-right--line-top" />
      <!-- TOP EXTRA LINE -->
      <div
        class="RightColumn__column-right--extra-line-top"
        :class="{
          'vue-gradient-bg': visualDataBySection?.id === 'hero',
          'typescript-gradient-bg': visualDataBySection?.id === 'experience',
          'vite-gradient-bg': visualDataBySection?.id === 'projects',
        }"
      />
      <!-- TOP DIAGONAL  LINE -->
      <div class="RightColumn__column-right--line-diagonal-top" />
      <!-- TOP EXTRA LINES -->
      <div
        v-for="i in 50"
        :key="`extra-line-diagonal-top-${i}`"
        class="RightColumn__column-right--extra-line-diagonal-top"
        :class="[
          `RightColumn__column-right--extra-line-diagonal-top-${i}`,
          {
            'vue-gradient-bg': visualDataBySection?.id === 'hero',
            'typescript-gradient-bg': visualDataBySection?.id === 'experience',
            'vite-gradient-bg': visualDataBySection?.id === 'projects',
          },
        ]"
        :style="{
          top: `${246 + i * 5}px`,
          opacity: `${1 - i * 0.1}`,
        }"
      />
      <!-- MIDDLE LINE -->
      <div class="RightColumn__column-right--line-middle" />
      <!-- MIDDLE DIAGONAL LINE -->
      <div class="RightColumn__column-right--line-diagonal-middle" />
      <!-- MIDDLE EXTRA LINES -->
      <div
        v-for="i in 50"
        :key="`extra-line-diagonal-middle-${i}`"
        :class="[
          `RightColumn__column-right--extra-line-diagonal-middle-${i}`,
          {
            'vue-gradient-bg': visualDataBySection?.id === 'hero',
            'typescript-gradient-bg': visualDataBySection?.id === 'experience',
            'vite-gradient-bg': visualDataBySection?.id === 'projects',
          },
        ]"
        :style="{
          top: `${500 + -i * 5}px`,
          opacity: `${1 - i * 0.1}`,
        }"
      />
      <!-- BOTTOM-MIDDLE LINE -->
      <div class="RightColumn__column-right--line-bottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { visualDataBySection, isDarkMode } = storeToRefs(useUiStore());
</script>

<style lang="scss" scoped>
@use "@/styles/main.scss" as *;
@use "@/styles/general.scss" as *;
.RightColumn {
  @apply flex h-screen w-full;

  // *** COLUMN RIGHT ***
  &__column-right {
    @apply flex h-full w-[100px] flex-col;

    &--actions {
      @include colored-line;
      @apply flex h-[100px] flex-col items-center justify-center gap-5 border-b border-l py-5;
    }

    &--shapes {
      @apply relative flex h-[calc(100vh-163px)] flex-col items-center justify-center;
    }

    &--line-top {
      @include colored-background;
      @apply absolute left-0 top-0 h-[250px] w-[1px];
    }

    &--extra-line-top {
      @include colored-background;
      @apply absolute left-0 top-0 h-[150px] w-[15px] bg-red-500;
      clip-path: polygon(100% 0, 100% 92.5%, 0 100%, 0 0);
    }

    &--line-diagonal-top {
      @include colored-background;
      @apply absolute left-[10px] top-[246px] h-[28px] w-[1px] -rotate-45;
    }

    @for $i from 1 through 40 {
      &--extra-line-diagonal-top-#{$i} {
        @include colored-background;
        @apply absolute left-[8px] h-[25px] w-[1px] -rotate-45;
        animation: opacity-motion 3s linear infinite;
        animation-delay: #{$i * 0.2}s;
      }
    }
    &--line-middle {
      @include colored-background;
      @apply absolute left-[20px] top-[270px] h-[229px] w-[1px];
    }

    &--line-diagonal-middle {
      @include colored-background;
      @apply absolute left-[10px] top-[495px] h-[28px] w-[1px] rotate-45;
    }

    @for $i from 1 through 40 {
      &--extra-line-diagonal-middle-#{$i} {
        @include colored-background;
        @apply absolute left-[8px] top-[590px] h-[25px] w-[1px] rotate-45;
        animation: opacity-motion 3s linear infinite;
        animation-delay: #{$i * 0.2}s;
      }
    }

    &--line-bottom {
      @include colored-background;
      @apply absolute left-0 top-[518px] h-[calc(100vh-682px)] w-[1px];
    }
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
