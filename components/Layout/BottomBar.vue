<template>
  <div class="BottomBar">
    <div class="BottomBar__version">
      {{ version }}
    </div>
    <div class="BottomBar__social">
      <a
        href="https://www.linkedin.com/in/carlos-segura-garcia"
        target="_blank"
      >
        <UIcon
          size="20"
          name="i-mdi-linkedin"
          class="dark:text-primary hover:text-primary text-stone-500 dark:hover:text-white"
        />
      </a>
      <a href="https://github.com/lithos-hub" target="_blank">
        <UIcon
          size="20"
          name="i-mdi-github"
          class="dark:text-primary hover:text-primary text-stone-500 dark:hover:text-white"
        />
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
.BottomBar {
  @apply fixed bottom-0 z-50 flex w-full justify-between p-5;

  &__version {
    @include corner-effect;
    @apply font-lucania text-primary flex w-[80px] flex-col items-center justify-center border-y border-y-stone-500/10 pb-1 text-xs backdrop-blur;
  }
  &__social {
    @include corner-effect;
    @apply flex w-[80px] items-center justify-center gap-2 border-y border-y-stone-500/10 p-2 backdrop-blur;
  }
}
</style>
