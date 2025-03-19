<template>
  <section class="Hero">
    <div class="Hero__content">
      <div class="Hero__content-wrapper">
        <div class="flex flex-col">
          <h1 class="Hero__name">
            Hello, I'm <span class="text-primary">Carlos</span>.
          </h1>
          <h2 class="Hero__title">I'm a front-end developer.</h2>
        </div>

        <BaseButton>View my work</BaseButton>
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

  &__content {
    @apply flex h-screen flex-col items-center justify-between gap-5 px-2 text-center lg:px-5;

    &-wrapper {
      @apply flex h-full flex-col items-center justify-evenly;
    }
  }

  &__name {
    @apply font-exo text-3xl font-light leading-none text-stone-900 lg:text-[80px] dark:text-white;
  }

  &__title {
    @apply font-exo text-lg font-light leading-none text-stone-900 lg:text-[80px] dark:text-white;
  }
}
</style>
