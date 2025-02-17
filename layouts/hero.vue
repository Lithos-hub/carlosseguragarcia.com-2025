<template>
  <section class="Home">
    <!-- LEFT COLUMN -->
    <div class="Home__column-left">
      <!-- NUMBER -->
      <div class="Home__column-left--number">00</div>
      <small class="Home__column-left--section-name">Hero</small>
      <!-- TOP LINE -->
      <div class="Home__column-left--line-top" />
      <!-- TOP DIAGONAL LINE -->
      <div class="Home__column-left--line-diagonal-top" />
      <!-- TOP EXTRA LINES -->
      <div
        v-for="i in 50"
        :key="i"
        :class="[`Home__column-left--extra-line-diagonal-top-${i}`]"
        :style="{
          top: `${496 - i * 5}px`,
          opacity: `${1 - i * 0.05}`,
        }"
      />
      <!-- BOTTOM LINE -->
      <div class="Home__column-left--line-bottom" />
      <!-- BOTTOM EXTRA LINE -->
      <div class="Home__column-left--extra-line-bottom" />
      <!-- BOTTOM EXTRA LINES OVERLAY -->
      <div
        v-for="i in 20"
        :key="i"
        class="Home__column-left--extra-lines-overlay"
        :style="{ top: `calc(100vh - ${0 + i * 10}px)` }"
      />
    </div>
    <!-- HERO SECTION -->
    <div class="col-span-10">
      <slot />
    </div>
    <!-- RIGHT COLUMN -->
    <div class="Home__column-right">
      <!-- SOCIAL NETWORKS -->
      <div class="Home__column-right--socialNetworks">
        <a
          href="https://www.linkedin.com/in/carlos-segura-garcia"
          target="_blank"
          ><img src="/icons/linkedin.svg" alt="Linkedin" class="w-5 h-5"
        /></a>
        <a href="https://github.com/lithos-hub" target="_blank"
          ><img src="/icons/github.svg" alt="Github" class="w-5 h-5"
        /></a>
      </div>
      <!-- TOP LINE -->
      <div class="Home__column-right--line-top" />
      <!-- TOP EXTRA LINE -->
      <div class="Home__column-right--extra-line-top" />
      <!-- TOP DIAGONAL  LINE -->
      <div class="Home__column-right--line-diagonal-top" />
      <!-- TOP EXTRA LINES -->
      <div
        v-for="i in 10"
        :key="i"
        class="Home__column-right--extra-line-diagonal-top"
        :class="[`Home__column-right--extra-line-diagonal-top-${i}`]"
        :style="{
          top: `${295 + i * 10}px`,
          opacity: `${1 - i * 0.1}`,
        }"
      />
      <!-- MIDDLE LINE -->
      <div class="Home__column-right--line-middle" />
      <!-- BOTTOM DIAGONAL LINE -->
      <div class="Home__column-right--line-diagonal-bottom" />
      <!-- BOTTOM EXTRA LINES -->
      <div
        v-for="i in 10"
        :key="i"
        :class="[`Home__column-right--extra-line-diagonal-bottom-${i}`]"
        :style="{
          top: `${590 + -i * 10}px`,
          opacity: `${1 - i * 0.1}`,
        }"
      />
      <!-- BOTTOM LINE -->
      <div class="Home__column-right--line-bottom" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/styles/main.scss" as *;
.Home {
  @apply grid grid-cols-12 h-screen;

  @mixin border-line {
    @apply w-[1px] bg-stone-700/30 absolute;
  }

  // *** COLUMN LEFT ***
  &__column-left {
    @apply h-screen relative w-[100px];

    &--number {
      @apply font-lucania text-2xl flex flex-col items-center justify-center w-[100px] h-[100px] p-5 border-b border-stone-700/50;
    }

    &--section-name {
      @apply text-sm text-stone-700/30 text-right w-full flex justify-end pr-1;
    }

    &--line-top {
      @include border-line;
      @apply h-[500px] top-0 absolute right-0;
    }

    &--line-diagonal-top {
      @include border-line;
      @apply h-[28px] top-[496px] absolute right-[10px] rotate-45;
    }

    @for $i from 1 through 50 {
      &--extra-line-diagonal-top-#{$i} {
        @include border-line;
        @apply h-[20px] top-[496px] absolute right-[12.5px] rotate-45;

        animation: opacity-motion 0.5s linear infinite;
        animation-delay: #{$i * 0.1}s;
      }
    }

    &--line-bottom {
      @include border-line;
      @apply h-[calc(100vh-520px)] top-[520px] absolute right-[20px];
    }

    &--extra-line-bottom {
      @apply h-[200px] w-[10px] top-[calc(100vh-200px)] absolute right-[20px] bg-stone-700/80;
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0% 7.5%);
    }

    &--extra-lines-overlay {
      @apply h-[1px] w-[20px] absolute right-[17px] bg-[#F5F5F4] rotate-45;
    }
  }

  // *** COLUMN RIGHT ***
  &__column-right {
    @apply h-screen relative;

    &--socialNetworks {
      @apply flex flex-col items-center justify-center w-full p-5 gap-5 border-b border-stone-700/50;
    }

    &--line-top {
      @include border-line;
      @apply h-[299px] top-0 absolute left-0;
    }

    &--extra-line-top {
      @include border-line;
      @apply h-[150px] w-[10px] top-[100px] absolute left-0 bg-red-700/80;
      clip-path: polygon(100% 0, 100% 92.5%, 0 100%, 0 0);
    }

    &--line-diagonal-top {
      @include border-line;
      @apply h-[28px] top-[296px] absolute left-[10px] -rotate-45;
    }

    @for $i from 1 through 10 {
      &--extra-line-diagonal-top-#{$i} {
        @include border-line;
        @apply h-[25px] top-[296px] absolute left-[8px] -rotate-45;
        animation: opacity-motion 1s linear infinite;
        animation-delay: #{$i * 0.5}s;
      }
    }
    &--line-middle {
      @include border-line;
      @apply h-[272px] top-[321px] absolute left-[20px];
    }

    &--line-diagonal-bottom {
      @include border-line;
      @apply h-[28px] top-[590px] absolute left-[10px] rotate-45;
    }

    @for $i from 1 through 10 {
      &--extra-line-diagonal-bottom-#{$i} {
        @include border-line;
        @apply h-[25px] top-[590px] absolute left-[8px] rotate-45;
        animation: opacity-motion 2s linear infinite;
        animation-delay: #{$i * 0.2}s;
      }
    }

    &--line-bottom {
      @include border-line;
      @apply h-[295px] bottom-0 absolute left-0;
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
