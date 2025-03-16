<template>
  <button
    class="Button"
    :class="[`Button--${props.variant}`, `Button--${props.size}`]"
    v-bind="$attrs"
  >
    <div class="Button__pseudo-border" />
    <div class="Button__content">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "md",
});
</script>

<style lang="scss" scoped>
.Button {
  $clip-shape: polygon(
    0 0,
    90% 0,
    100% 20%,
    100% 80%,
    100% 100%,
    10% 100%,
    0 80%,
    0% 20%
  );

  $gradient-cyan: rgba(0, 255, 255, 0.1);
  $gradient-black: rgba(0, 0, 0, 0.1);

  @apply relative overflow-hidden border brightness-200 transition-all;
  clip-path: $clip-shape;

  $self: &;

  &::after {
    content: "";
    @apply absolute inset-0 z-0 h-full w-full bg-black/90;
    clip-path: $clip-shape;
    background-size: 3px 3px;
    background-image: repeating-linear-gradient(
      0deg,
      $gradient-cyan,
      $gradient-cyan 1px,
      $gradient-black 1px,
      $gradient-black
    );
  }

  &__pseudo-border {
    @apply absolute inset-0 -left-1 h-[calc(100%+10px)] w-[calc(100%+10px)];
    clip-path: $clip-shape;
  }

  &__content {
    @apply absolute inset-0 z-10 flex items-center justify-center pb-1;
  }

  &--primary {
    @apply border-primary;

    #{$self}__content {
      @apply text-primary dark:text-primary;
    }

    &::after {
      @apply bg-black/90;
      background-image: repeating-linear-gradient(
        0deg,
        $gradient-cyan,
        $gradient-cyan 1px,
        $gradient-black 1px,
        $gradient-black
      );
    }

    #{$self}__pseudo-border {
      @apply bg-primary dark:bg-primary;
    }

    &:hover {
      @apply scale-105 border-secondary;

      #{$self}__content {
        @apply text-secondary dark:text-secondary;
      }

      #{$self}__pseudo-border {
        @apply bg-secondary dark:bg-secondary;
      }

      &::after {
        @apply transition-all duration-300 ease-in-out;
        background-size: 5px 5px;
        background-image: repeating-linear-gradient(
          45deg,
          $gradient-cyan,
          $gradient-cyan 1px,
          rgba(255, 255, 255, 0.1) 1px,
          $gradient-black 50%
        );
      }
    }
  }

  &--secondary {
    @apply border-secondary dark:border-secondary;

    #{$self}__content {
      @apply text-secondary dark:text-secondary;
    }
  }

  &--sm {
    @apply h-10 w-24;

    #{$self}__content {
      @apply text-[10px];
    }
  }

  &--md {
    @apply h-16 w-[180px];

    #{$self}__content {
      @apply text-[15px];
    }
  }

  &--lg {
    @apply h-20 w-[220px];

    #{$self}__content {
      @apply text-[18px];
    }
  }
}
</style>
