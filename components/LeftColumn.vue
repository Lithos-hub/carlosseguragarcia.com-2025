<template>
  <!-- LEFT COLUMN -->
  <div class="LeftColumn__column-left">
    <!-- NUMBER -->
    <div class="LeftColumn__column-left--number">
      <div class="LeftColumn__column-left--number-content">
        {{ visualDataBySection?.number }}
      </div>
    </div>
    <div class="LeftColumn__column-left--shapes">
      <div class="LeftColumn__column-left--top-container">
        <code class="LeftColumn__column-left--section-name">
          {{ visualDataBySection?.title }}
        </code>
      </div>
      <div class="LeftColumn__column-left--middle-container" />
      <!-- TOP DIAGONAL LINE -->
      <!-- <div class="LeftColumn__column-left--line-diagonal-top" /> -->
      <!-- TOP DIAGONAL LINE 2 -->
      <div class="LeftColumn__column-left--line-diagonal-top-2" />
      <!-- TOP EXTRA LINES -->
      <div
        v-for="i in 50"
        :key="i"
        :class="[`LeftColumn__column-left--extra-line-diagonal-top-${i}`]"
        :style="{
          top: `${350 - i * 5.2}px`,
          opacity: `${1 - i * 0.01}`,
        }"
      />
      <!-- BOTTOM EXTRA LINE -->
      <div class="LeftColumn__column-left--bottom-container" />
      <!-- BOTTOM EXTRA LINE -->
      <div class="LeftColumn__column-left--extra-line-bottom" />
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
  // *** COLUMN LEFT ***
  &__column-left {
    @apply w-[100px];

    &--number {
      @include colored-line;
      @apply font-lucania flex h-[100px] w-[100px] flex-col items-center justify-center border-b border-r p-5 text-2xl;
    }

    &--number-content {
      @include primary-gradient-text;
      @apply text-2xl;
    }

    &--top-container {
      @include colored-line;
      @apply flex h-[150px] w-full border-r p-2.5 text-2xl;
    }

    &--middle-container {
      @include colored-line;
      @apply max-h-[200px] w-full grow border-r;
    }

    &--bottom-container {
      @include colored-line;
      @apply flex w-[80px] flex-1 border-r;
    }

    &--shapes {
      @apply relative flex h-[calc(100vh-100px)] flex-col;
    }

    &--section-name {
      @include primary-gradient-text;
      @apply flex h-[200px] w-[100px] w-full p-2 text-right text-[11px] text-stone-500/20;
    }

    &--line-top {
      @include colored-background;
      @apply absolute right-0 top-0 h-[204px] border-r;
    }

    &--line-diagonal-top {
      @include colored-background;
      @apply absolute right-[10px] top-[200px] h-[27px] w-[1px] rotate-45;
    }

    &--line-diagonal-top-2 {
      @include colored-background;
      @apply mr-[10px] h-[27px] w-[1px] rotate-45 self-end;
    }

    @for $i from 1 through 50 {
      &--extra-line-diagonal-top-#{$i} {
        @include colored-background;
        @apply absolute right-[15px] h-[20px] w-[1px] rotate-45;

        animation: opacity-motion 0.5s linear infinite;
        animation-delay: #{$i * 0.1}s;
      }
    }

    &--line-middle {
      @include colored-background;
      @apply absolute right-[0px] top-[201px] h-[268px] w-[1px];
    }

    &--line-bottom {
      @include colored-background;
      @apply absolute right-[20px] top-[224px] h-[calc(100vh-400px)] border-r;
    }

    &--extra-line-bottom {
      @apply absolute bottom-0 right-[20px] h-[200px] w-[10px] bg-stone-700/50 dark:bg-white;
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0% 7.5%);
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
