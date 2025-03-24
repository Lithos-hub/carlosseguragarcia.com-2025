<template>
  <div class="About">
    <div class="About__inner">
      <div class="About__content">
        <p class="About__description">
          I'm a front-end developer with a passion for creating beautiful and
          functional web applications, <br />mainly focused on
          <strong class="vue-gradient-text text-2xl">Vue</strong> ecosystem.
        </p>
        <div class="About__logos mx-auto">
          <div class="About__logo-container">
            <img
              src="/tech-logos/vue.svg"
              alt="Vue"
              class="About__logo-image"
            />
            <small class="About__logo-name">Vue</small>
          </div>
          <div class="About__logo-container">
            <img
              src="/tech-logos/nuxt.svg"
              alt="Nuxt"
              class="About__logo-image"
            />
            <small class="About__logo-name">Nuxt</small>
          </div>
          <div class="About__logo-container">
            <img
              src="/tech-logos/pinia.svg"
              alt="Pinia"
              class="About__logo-image"
            />
            <small class="About__logo-name">Pinia</small>
          </div>
          <div class="About__logo-container">
            <img
              src="/tech-logos/vite.svg"
              alt="Vite"
              class="About__logo-image"
            />
            <small class="About__logo-name">Vite</small>
          </div>
          <div class="About__logo-container">
            <img
              src="/tech-logos/typescript.svg"
              alt="TypeScript"
              class="About__logo-image"
            />
            <small class="About__logo-name">TypeScript</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
.About {
  @apply relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-transparent to-black;

  &__inner {
    @apply px-[10vw];
  }

  &__content {
    @include corner-effect;
    @apply p-10 text-center text-xl text-stone-900 dark:text-white;
  }

  &__description {
    @apply max-w-[80vw] text-wrap text-center font-exo text-sm text-stone-900 lg:text-base dark:text-white;
  }

  &__logos {
    @apply flex w-[351px] flex-wrap items-center justify-center gap-5 p-5;
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
      @apply font-exo text-xs font-medium leading-none opacity-50 dark:text-white dark:opacity-100;
    }
  }
}
</style>
