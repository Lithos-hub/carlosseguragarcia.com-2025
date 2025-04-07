<template>
  <div class="Hero__container">
    <div class="Hero__content">
      <ComponentName componentName="Hero.vue" color="primary" />
      <Suspense>
        <div class="absolute inset-0 z-0">
          <ThreejsScene />
        </div>
      </Suspense>

      <div class="Hero__text">
        <!-- This text is already displayed in the TresJS canvas, but we need to keep it for SEO -->
        <div class="opacity-0">
          <h1>Carlos Segura Garcia</h1>
          <h2>Software Engineer</h2>
        </div>

        <BaseButton @click="scrollToPortfolio">View my work</BaseButton>
      </div>
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

  &__text {
    @apply absolute inset-0 flex flex-col items-center justify-between gap-10 p-20 font-rajdhaniLight text-secondary;

    h1 {
      @apply text-3xl lg:text-[60px];
    }

    h2 {
      @apply text-lg lg:text-[40px];
    }
  }
}
</style>
