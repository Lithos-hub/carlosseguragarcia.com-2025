<template>
  <div class="Portfolio__container" id="Portfolio">
    <div class="Portfolio__content">
      <ComponentName componentName="Portfolio.vue" color="primary" />
      <div class="Portfolio__inner-container">
        <img
          src="/svg/decoration/decoration-21.svg"
          alt="Decoration protocol image"
          class="absolute left-0 top-[-50px] h-[40px]"
        />
        <img
          src="/svg/decoration/decoration-19.svg"
          alt="Decoration protocol image"
          class="absolute right-5 top-5 h-[100px]"
        />
        <h1 class="Portfolio__title">Portfolio</h1>
        <ul class="Portfolio__info">
          Info
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
@use "@/styles/fonts.scss" as *;
@use "@/styles/variables.scss" as *;
@use "@/styles/mixins.scss" as *;
.Portfolio {
  &__container {
    @include section-container;
  }

  &__content {
    @include section-content-primary;
  }

  &__inner-container {
    @include inner-container-primary;
  }

  &__title {
    @include section-title-primary;
  }

  &__info {
    @apply relative z-10 flex flex-col gap-5 pb-5 lg:grid lg:grid-cols-3;

    &-item {
      &__title {
        @apply font-orbitron text-xl font-bold text-white;
      }

      &__value {
        @apply font-rajdhaniSemiBold text-xl text-cyan-400;
      }

      &--tech {
        grid-column: span 3;
      }
    }
  }

  &__tech {
    &-container {
      @apply flex flex-wrap items-center justify-center gap-5 pt-5;
    }

    &-item {
      @apply flex flex-col items-center gap-2;

      &__image {
        @apply h-10 w-10 object-contain;
      }

      &__name {
        @apply font-exo text-xs text-primary;
      }
    }
  }
}
</style>
