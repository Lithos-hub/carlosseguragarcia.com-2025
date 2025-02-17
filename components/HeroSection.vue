<template>
  <div class="relative">
    <section class="Hero">
      <div class="Hero__content">
        <h1 class="Hero__name">Carlos Segura García</h1>
        <h2 class="Hero__title">Front-end Developer</h2>
        <p class="Hero__description">
          I'm a front-end developer with a passion for creating beautiful and
          functional web applications, <br />mainly focused on
          <strong class="text-2xl vue-gradient-text">Vue</strong> ecosystem.
        </p>
        <div class="Hero__logos">
          <div class="Hero__logo-container">
            <img src="/tech-logos/vue.png" alt="Vue" class="Hero__logo-image" />
            <small class="Hero__logo-name">Vue</small>
          </div>
          <div class="Hero__logo-container">
            <img
              src="/tech-logos/nuxt.svg"
              alt="Nuxt"
              class="Hero__logo-image"
            />
            <small class="Hero__logo-name">Nuxt</small>
          </div>
          <div class="Hero__logo-container">
            <img
              src="/tech-logos/pinia.png"
              alt="Pinia"
              class="Hero__logo-image"
            />
            <small class="Hero__logo-name">Pinia</small>
          </div>
          <div class="Hero__logo-container">
            <img
              src="/tech-logos/vite.svg"
              alt="Vite"
              class="Hero__logo-image"
            />
            <small class="Hero__logo-name">Vite</small>
          </div>
          <div class="Hero__logo-container">
            <img
              src="/tech-logos/typescript.png"
              alt="TypeScript"
              class="Hero__logo-image"
            />
            <small class="Hero__logo-name">TypeScript</small>
          </div>
        </div>
      </div>

      <NuxtLink to="/experience">
        <div class="Hero__button-container">
          <small class="font-jetbrainsMono text-xs text-stone-700/50">
            scroll down or click to router.push("/experience")
          </small>
          <img
            src="/icons/chevron-down.svg"
            alt="Arrow down"
            class="Hero__button-image"
          />
        </div>
      </NuxtLink>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;

.Hero {
  @apply relative flex flex-col gap-5 justify-center items-center h-screen;

  &__content {
    @apply flex flex-col gap-5 px-5 justify-center items-center h-full;
  }

  &__name {
    @apply dark:text-white text-stone-900 font-exo text-5xl font-bold leading-none z-10;
    width: 500px;
  }

  &__title {
    @apply dark:text-white text-stone-900 font-exo text-2xl font-medium leading-none z-10;
  }

  &__description {
    @apply dark:text-white text-stone-900 font-exo text-center z-10;
  }

  &__logos {
    @apply flex justify-center items-center w-[351px] flex-wrap gap-5 p-5 relative;
  }

  &__logo {
    @apply border border-stone-700/10 p-2.5;

    &-image {
      @apply w-10 h-10 object-contain grayscale dark:grayscale-0;
    }

    &-container {
      @apply flex flex-col items-center justify-center gap-5;
    }

    &-name {
      @apply font-exo text-xs font-medium leading-none z-10 opacity-50 dark:opacity-100 dark:text-white;
    }
  }

  &__button-container {
    @apply flex flex-col items-center h-[100px] justify-center gap-2.5;
  }

  &__button-image {
    @apply w-5 h-5 object-contain animate-bounce opacity-50;
  }
}
</style>
