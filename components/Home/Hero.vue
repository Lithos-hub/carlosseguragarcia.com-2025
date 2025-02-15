<template>
  <div class="Hero">
    <div class="Hero__background" />
    <h1 class="Hero__name">Carlos Segura García</h1>
    <h2 class="Hero__title">Front-end Developer</h2>
    <p class="Hero__description">
      I'm a front-end developer with a passion for creating beautiful and
      functional web applications, <br />mainly focused on Vue ecosystem.
    </p>
    <img src="/tech-logos/vue.png" alt="Vue" class="Hero__logo" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/styles/fonts.scss";
.Hero {
  @apply relative flex flex-col gap-5 justify-center items-center;

  &__background {
    @apply absolute top-0 left-0 w-full h-full bg-transparent z-0;
    opacity: 0.2;
    background-size: 10px 10px;
    background-image: repeating-linear-gradient(
      45deg,
      #78716c 0,
      #78716c 1px,
      transparent 0,
      transparent 50%
    );
  }

  &__name {
    @apply font-exo text-5xl font-bold leading-none z-10;
    width: 500px;
  }

  &__title {
    @apply font-exo text-2xl font-medium leading-none z-10;
  }

  &__description {
    @apply font-exo text-center z-10;
  }

  &__logo {
    @apply w-20 z-10;
  }
}
</style>
