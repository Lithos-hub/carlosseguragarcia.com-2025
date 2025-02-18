<template>
  <section class="Hero">
    <div class="Hero__content">
      <h1 class="Hero__name">Carlos Segura García</h1>
      <h2 class="Hero__title">Front-end Developer</h2>
      <p class="Hero__description">
        I'm a front-end developer with a passion for creating beautiful and
        functional web applications, <br />mainly focused on
        <strong class="vue-gradient-text text-2xl">Vue</strong> ecosystem.
      </p>
      <div class="Hero__logos">
        <div class="Hero__logo-container">
          <img src="/tech-logos/vue.png" alt="Vue" class="Hero__logo-image" />
          <small class="Hero__logo-name">Vue</small>
        </div>
        <div class="Hero__logo-container">
          <img src="/tech-logos/nuxt.svg" alt="Nuxt" class="Hero__logo-image" />
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
          <img src="/tech-logos/vite.svg" alt="Vite" class="Hero__logo-image" />
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
      <NuxtLink to="/experience">
        <div class="Hero__routing-container">
          <small class="Hero__routing-text">
            scroll down or click here to router.push("/experience")
          </small>
          <UIcon
            name="i-heroicons-chevron-double-down"
            class="Hero__routing-icon"
          />
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;

.Hero {
  @apply relative flex h-full flex-col items-center justify-center gap-5;

  &__content {
    @apply flex flex-col items-center justify-center gap-5 px-5;
  }

  &__name {
    @apply font-exo z-10 text-5xl font-bold leading-none text-stone-900 dark:text-white;
    width: 500px;
  }

  &__title {
    @apply font-exo z-10 text-2xl font-medium leading-none text-stone-900 dark:text-white;
  }

  &__description {
    @apply font-exo z-10 text-center text-stone-900 dark:text-white;
  }

  &__logos {
    @apply relative flex w-[351px] flex-wrap items-center justify-center gap-5 p-5;
  }

  &__logo {
    @apply border border-stone-700/10 p-2.5;

    &-image {
      @apply h-10 w-10 object-contain grayscale dark:grayscale-0;
    }

    &-container {
      @apply flex flex-col items-center justify-center gap-5;
    }

    &-name {
      @apply font-exo z-10 text-xs font-medium leading-none opacity-50 dark:text-white dark:opacity-100;
    }
  }

  &__routing-container {
    @apply flex h-[100px] flex-col items-center justify-center gap-2.5 dark:text-stone-200;
  }

  &__routing-icon {
    @apply h-5 w-5 animate-bounce object-contain opacity-50 dark:text-green-500;
  }

  &__routing-text {
    @apply font-jetbrainsMono text-xs text-stone-700/50 dark:text-green-500;
  }
}
</style>
