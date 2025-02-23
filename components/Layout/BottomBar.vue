<template>
  <div class="BottomBar">
    <div class="BottomBar__version">
      {{ version }}
    </div>
    <div class="BottomBar__actions">
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
  @include colored-line;
  @apply flex h-[42px] justify-between border-t;

  &__actions {
    @include colored-line;
    @apply flex h-[42px] w-[80px] items-center justify-center gap-2 border-l p-1;
  }

  &__version {
    @include colored-line;
    @include primary-gradient-text;
    @apply font-lucania flex w-[60px] items-center justify-center border-r pb-1 text-sm;
  }
}
</style>
