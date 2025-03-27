<template>
  <section class="Hero__container" id="hero">
    <div class="Hero__content">
      <h1 class="Hero__name">
        Hello, I'm <strong class="text-primary">Carlos</strong>.
      </h1>
      <h2 class="Hero__title">I'm a front-end developer.</h2>

      <BaseButton>View my work</BaseButton>
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

#hero {
  @apply border-b border-secondarySoft;
}
.Hero {
  &__container {
    @include section-wrapper;
  }

  &__content {
    @apply mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-10 border-x border-secondarySoft py-[120px] text-center;
  }

  &__name {
    @apply font-exo text-3xl font-light text-stone-900 lg:text-[30px] dark:text-white;
  }

  &__title {
    @apply font-exo text-lg font-light text-stone-900 lg:text-[30px] dark:text-white;
  }
}
</style>
