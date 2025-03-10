<template>
  <button class="Button" v-bind="$attrs">
    <div class="Button__pseudo-border" />
    <div class="Button__content">
      <slot />
    </div>
  </button>
</template>

<style lang="scss" scoped>
.Button {
  @apply border-primary relative h-[60px] w-[200px] overflow-hidden border brightness-200 dark:border-cyan-500;

  clip-path: polygon(
    0 0,
    100% 0,
    100% 30%,
    100% 70%,
    100% 100%,
    10% 100%,
    0 70%
  );

  &::after {
    content: "";
    @apply absolute inset-0 z-0 h-full w-full bg-black;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 30%,
      100% 70%,
      100% 100%,
      10% 100%,
      0 70%
    );
  }

  &__pseudo-border {
    @apply bg-primary dark:bg-primary absolute inset-0 -left-1 h-[calc(100%+1px)] w-[calc(100%+5px)];
    clip-path: polygon(
      0 0,
      100% 0,
      100% 30%,
      100% 70%,
      100% 100%,
      10% 100%,
      0 70%
    );
  }

  &__content {
    @apply text-primary absolute inset-0 z-10 flex items-center justify-center pb-1 text-lg dark:text-cyan-500;
  }

  &:hover {
  }
}
</style>
