<template>
  <div class="BottomBar">
    <div class="BottomBar__version">
      <small class="BottomBar__version-content">{{ version }}</small>
    </div>
    <div class="BottomBar__actions">
      <a
        href="https://www.linkedin.com/in/carlos-segura-garcia"
        target="_blank"
      >
        <UIcon
          size="25"
          name="i-mdi-linkedin"
          class="text-stone-500 dark:text-white"
        />
      </a>
      <a href="https://github.com/lithos-hub" target="_blank">
        <UIcon
          size="25"
          name="i-mdi-github"
          class="text-stone-500 dark:text-white"
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
  @include colored-line;
  @apply flex justify-between border-t;

  &__actions {
    @include colored-line;
    @apply flex h-[50px] w-[100px] items-center justify-center gap-5 border-l;
  }

  &__version {
    @include colored-line;
    @apply font-lucania flex w-[80px] items-center justify-center gap-5 border-r;

    &-content {
      @include primary-gradient-text;
    }
  }
}
</style>
