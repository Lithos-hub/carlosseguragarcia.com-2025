<template>
  <div class="Hero__container">
    <div class="Hero__content">
      <ComponentName componentName="Hero.vue" color="primary" />
      <Suspense>
        <div class="absolute inset-0 z-0">
          <ThreejsScene />
        </div>
      </Suspense>

      <h1 class="Hero__title">Carlos Segura Garcia</h1>
      <h2 class="Hero__subtitle">Software Engineer</h2>

      <BaseButton class="Hero__button-container" @click="scrollToPortfolio"
        >View my work</BaseButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollToPortfolio = () => {
  const portfolioSection = document.getElementById("portfolio");
  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/variables.scss" as *;

.Hero {
  &__container {
    @apply relative border-b border-secondary;
  }

  &__content {
    @apply relative h-[80vh] w-full border-x border-secondary bg-black p-5 lg:mx-auto lg:max-w-[80vw];
  }

  &__title {
    @apply absolute left-5 top-5 text-center font-rajdhaniLight text-3xl leading-tight text-primary lg:text-[45px];
  }

  &__subtitle {
    @apply absolute bottom-5 right-5 text-center font-rajdhaniLight text-lg font-bold leading-tight text-secondary lg:text-[25px];
  }

  &__button-container {
    @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
  }
}
</style>
