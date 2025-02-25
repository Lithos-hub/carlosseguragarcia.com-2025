<template>
  <div class="Gallery">
    <h1 class="Gallery__total-experience">
      Total experience:
      <span class="Gallery__total-experience-value">{{
        totalExperience()
      }}</span>
    </h1>
    <div class="Gallery__items-wrapper">
      <ExperienceCard
        v-for="(experience, index) in DEV_EXPERIENCE"
        :key="`${experience.title}-${experience.subtitle}`"
        :experience="experience"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DEV_EXPERIENCE } from "@/consts/experience";

// Calculate total experience in the following format: x years, y months
const totalExperience = () => {
  const firstExperience = new Date("2021-03-01");
  const currentDate = new Date();
  const totalMonths =
    (currentDate.getFullYear() - firstExperience.getFullYear()) * 12 +
    (currentDate.getMonth() - firstExperience.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return `${years} years, ${months} months`;
};
</script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
@use "@/styles/fonts.scss" as *;

.Gallery {
  @apply relative flex h-full w-full flex-col items-center justify-center gap-5 p-5;

  &__total-experience {
    @apply text-center text-xl text-stone-900 dark:text-white;
  }

  &__total-experience-value {
    @include primary-gradient-text;
    @apply font-bold;
  }

  &__items-wrapper {
    @apply flex w-full flex-col;
  }
}
</style>
