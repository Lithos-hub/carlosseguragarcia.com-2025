<template>
  <section class="About__container" id="about">
    <div class="About__content">
      <div class="About__text">
        <p class="About__description">
          I'm a front-end developer with a passion for creating beautiful and
          functional web applications, <br />mainly focused on
          <strong class="vue-gradient-text text-2xl font-bold">VUE</strong>
          ecosystem.
        </p>
        <div class="About__logos">
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
  </section>
</template>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/variables.scss" as *;

#about {
  @apply border-secondarySubtle border-b;
}

.About {
  &__container {
    @include section-wrapper;
    @apply border-secondarySubtle border-b;
  }

  &__content {
    @apply border-secondarySubtle relative mx-auto flex max-w-[80vw] gap-10 overflow-hidden border-x border-b py-[140px];
  }

  &__text {
    @apply z-10 flex w-full flex-col items-center justify-center gap-10;
  }

  &__description {
    @apply text-center font-exo text-lg font-light text-white lg:text-[30px];
  }

  &__logos {
    @apply flex w-full flex-wrap items-center justify-center gap-5;
  }

  &__logo {
    &-container {
      @apply flex flex-col items-center justify-center gap-2;
    }

    &-image {
      @apply h-12 w-12 object-contain;
    }

    &-name {
      @apply font-exo text-xs font-light text-primary;
    }
  }
}
</style>
