<template>
  <div class="Hero__container">
    <div class="Hero__content">
      <ComponentName componentName="Hero.vue" />
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
    @apply relative border-b border-secondary;
  }

  &__content {
    @apply relative w-full border-x border-secondary bg-black p-5 py-[200px] lg:mx-auto lg:max-w-[80vw];
  }

  &__text {
    @apply flex w-full flex-col items-center justify-center gap-10;
  }

  &__name,
  &__title {
    @apply z-10 font-rajdhaniMedium font-light text-white;
  }

  &__name {
    @apply text-3xl lg:text-[30px];
  }

  &__title {
    @apply text-lg lg:text-[30px];
  }
}
</style>
