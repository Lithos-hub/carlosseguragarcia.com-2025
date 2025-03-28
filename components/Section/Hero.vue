<template>
  <div class="Hero__container">
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
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/variables.scss" as *;

.Hero {
  &__container {
    @apply border-b border-secondarySubtle;
  }

  &__content {
    @apply relative mx-auto flex max-w-[80vw] border-x border-secondarySubtle py-[200px];
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
