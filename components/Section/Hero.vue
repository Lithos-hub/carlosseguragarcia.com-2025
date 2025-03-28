<template>
  <section class="Hero__container" id="hero">
    <div class="Hero__content">
      <Suspense>
        <div class="absolute inset-0 z-0">
          <ThreejsScene />
        </div>
      </Suspense>
      <div class="Hero__text">
        <h1 class="Hero__name">
          Hello, I'm <strong class="text-primary">Carlos</strong>.
        </h1>
        <h2 class="Hero__title">I'm a front-end developer.</h2>

        <BaseButton>View my work</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "hero-layout",
});
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/variables.scss" as *;

#hero {
  @apply border-secondarySubtle border-b;
}
.Hero {
  &__container {
    @apply border-secondarySubtle border-b;
  }

  &__content {
    @apply border-secondarySubtle relative mx-auto flex max-w-[80vw] gap-10 overflow-hidden border-x border-b py-[140px];
  }

  &__text {
    @apply z-10 flex w-full flex-col items-center justify-center gap-10;
  }

  &__name,
  &__title {
    @apply font-exo font-light text-white;
  }

  &__name {
    @apply text-3xl lg:text-[30px];
  }

  &__title {
    @apply text-lg lg:text-[30px];
  }
}
</style>
