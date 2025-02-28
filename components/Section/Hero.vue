<template>
  <section class="Hero">
    <ComponentName
      :name="visualDataBySection.componentName"
      :mounted-time="mountedTimes[visibleSection]"
    />
    <div class="Hero__content">
      <div class="Hero__content-wrapper">
        <h1 class="Hero__name">Carlos Segura García</h1>
        <h2 class="Hero__title">Front-end Developer</h2>
        <p class="Hero__description">
          I'm a front-end developer with a passion for creating beautiful and
          functional web applications, <br />mainly focused on
          <strong class="vue-gradient-text text-2xl">Vue</strong> ecosystem.
        </p>
        <div class="Hero__logos">
          <div class="Hero__logo-container">
            <img src="/tech-logos/vue.svg" alt="Vue" class="Hero__logo-image" />
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
              src="/tech-logos/pinia.svg"
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
              src="/tech-logos/typescript.svg"
              alt="TypeScript"
              class="Hero__logo-image"
            />
            <small class="Hero__logo-name">TypeScript</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const startTime = ref(performance.now());

const { mountedTimes, visibleSection, visualDataBySection } =
  storeToRefs(useUiStore());

onMounted(() => {
  mountedTimes.value.hero = Math.round(performance.now() - startTime.value);
});
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;

.Hero {
  @include section-wrapper;
  @apply px-[10vw] dark:bg-black;

  &::before {
    content: "";
    @apply absolute bottom-0 left-0 z-0 h-[50px] w-full;
    background-image: url("/img/bg-1.svg");
    background-size: cover;
    background-position: 50% 60%;
    background-repeat: no-repeat;
  }

  &__content {
    @apply flex h-full flex-col items-center justify-between gap-5 px-2 text-center lg:px-5;

    &-wrapper {
      @apply flex h-full flex-col items-center justify-center gap-5;
    }
  }

  &__name {
    @apply font-exo text-3xl font-bold leading-none text-stone-900 lg:text-5xl dark:text-white;
    width: 500px;
  }

  &__title {
    @apply font-exo text-lg font-medium leading-none text-stone-900 lg:text-2xl dark:text-white;
  }

  &__description {
    @apply font-exo max-w-[80vw] text-wrap text-center text-sm text-stone-900 lg:text-base dark:text-white;
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
      @apply font-exo z-10 text-xs font-medium leading-none opacity-50 dark:text-white dark:opacity-100;
    }
  }
}
</style>
