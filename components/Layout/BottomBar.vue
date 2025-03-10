<template>
  <div class="BottomBar">
    <div class="flex gap-5">
      <div class="BottomBar__version">
        <span class="BottomBar__version-title">Version</span>
        {{ version }}
      </div>
      <div class="BottomBar__developedBy">
        <div class="flex items-center gap-1">
          <div class="square" />
          <span> Developed by </span>
        </div>
        <span class="font-exo">Carlos Segura García</span>
      </div>
      <div class="BottomBar__developedBy">
        <div class="flex items-center gap-1">
          <div class="square" />
          <span> Location </span>
        </div>
        <span class="font-exo">Málaga - Spain</span>
      </div>
    </div>
    <div class="BottomBar__social">
      <a
        href="https://www.linkedin.com/in/carlos-segura-garcia"
        target="_blank"
      >
        <div
          class="social-button-wrapper flex flex-col items-center justify-between"
        >
          <UIcon
            size="20"
            name="i-mdi-linkedin"
            class="dark:text-primary p-2 text-stone-500"
          />

          <span class="info-text">LinkedIn</span>
        </div>
      </a>
      <a href="https://github.com/lithos-hub" target="_blank">
        <div
          class="social-button-wrapper flex flex-col items-center justify-between"
        >
          <UIcon
            size="20"
            name="i-mdi-github"
            class="dark:text-primary p-2 text-stone-500"
          />
          <span class="info-text">GitHub</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { version } from "~/package.json";
</script>

<style lang="scss" scoped>
@use "@/styles/main.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/fonts.scss" as *;
.BottomBar {
  @apply fixed bottom-0 z-50 flex w-full justify-between p-5 brightness-200;

  &__version {
    @include corner-effect;
    @include font-lucania;
    @apply dark:text-primary flex w-[80px] flex-col items-center justify-center border-y border-y-stone-500/10 pb-1 text-xs text-stone-800 backdrop-blur;

    &-title {
      @apply font-exo text-primary text-[9px];
    }
  }

  &__developedBy {
    @include font-lucania;
    @apply mt-auto flex flex-col gap-0 text-[10px];

    span {
      @apply text-primary;
    }
  }

  &__social {
    @include corner-effect;
    @apply flex items-center justify-center gap-2 border-y border-y-stone-500/10 backdrop-blur;
  }
}

.social-button-wrapper {
  @apply hover:bg-primary/10 cursor-pointer p-2 hover:text-white dark:hover:bg-stone-500/10;

  &:hover :deep(span) {
    @apply text-white;
  }
}
</style>
