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
  @apply border-primary dark:border-primary relative h-[60px] w-[200px] overflow-hidden border brightness-200 transition-all duration-300 ease-in-out;

  $self: &;

  &:hover {
    @apply border-secondary scale-105;

    #{$self}__content {
      @apply text-secondary scale-105;
    }

    #{$self}__pseudo-border {
      @apply bg-secondary;
    }
  }

  clip-path: polygon(
    0 0,
    100% 0,
    100% 30%,
    100% 70%,
    100% 100%,
    10% 100%,
    0 70%
  );

  &:hover {
    &::after {
      @apply transition-all duration-300 ease-in-out;
      background-size: 5px 5px;
      background-image: repeating-linear-gradient(
        45deg,
        rgba(0, 255, 255, 0.1),
        rgba(0, 255, 255, 0.1) 1px,
        rgba(255, 255, 255, 0.1) 1px,
        rgba(0, 0, 0, 0.1) 50%
      );
    }
  }

  &::after {
    content: "";
    @apply absolute inset-0 z-0 h-full w-full bg-black/90;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 30%,
      100% 70%,
      100% 100%,
      10% 100%,
      0 70%
    );
    background-size: 3px 3px;
    background-image: repeating-linear-gradient(
      0deg,
      rgba(0, 255, 255, 0.1),
      rgba(0, 255, 255, 0.1) 1px,
      rgba(0, 0, 0, 0.1) 1px,
      rgba(0, 0, 0, 0.1)
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
    @apply text-primary dark:text-primary absolute inset-0 z-10 flex items-center justify-center pb-1 text-lg;
  }
}
</style>
