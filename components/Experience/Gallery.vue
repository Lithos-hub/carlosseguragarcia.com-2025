<template>
  <div class="Gallery">
    <h1 class="Gallery__total-experience">
      Total experience: {{ totalExperience() }}
    </h1>
    <div class="Gallery__items-wrapper">
      <div
        v-for="(experience, index) in DEV_EXPERIENCE"
        class="Gallery__item"
        :key="`${experience.title}-${experience.subtitle}`"
      >
        <img
          :src="experience.image"
          alt="Experience image"
          class="Gallery__item-image"
          :class="{
            'bg-stone-900 p-2.5 dark:bg-transparent':
              experience.subtitle === 'InnoIT',
          }"
        />
        <div class="flex w-full flex-col gap-2">
          <div class="flex w-full justify-between">
            <div class="Gallery__item-index">#{{ index + 1 }}</div>
            <h3 class="Gallery__item-title">{{ experience.title }}</h3>
          </div>
          <div class="Gallery__item-content">
            <div class="flex w-full justify-between">
              <small class="Gallery__item__company-name">
                At: {{ experience.subtitle }}
              </small>
              <small class="Gallery__item-subtitle">
                {{ getStartDate(experience) }} -
                <span
                  :class="{
                    'text-green-500': getEndDate(experience) === 'Present',
                    'text-stone-900 dark:text-white':
                      getEndDate(experience) !== 'Present',
                  }"
                >
                  {{ getEndDate(experience) }}
                </span>
              </small>
            </div>
            <div class="Gallery__item__stack">
              <div
                class="Gallery__item__stack-item"
                v-for="stack in experience.stack"
                :key="stack.techName"
              >
                <img
                  :src="stack.imageUrl"
                  alt="Stack image"
                  class="Gallery__item__stack-item-image"
                />
                <small class="Gallery__item__stack-item-name">{{
                  stack.techName
                }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Experience, DEV_EXPERIENCE, YEARS } from "@/consts/experience";
import { MONTHS } from "@/consts/months";

const getMonth = (month: number) => {
  return MONTHS[month - 1];
};

const getStartDate = ({ initialYear, initialMonth }: Experience) => {
  return `${getMonth(initialMonth)} ${initialYear}`;
};

const getEndDate = ({ endYear, endMonth }: Experience) => {
  return endMonth ? `${getMonth(endMonth)} ${endYear}` : "Present";
};

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
  @apply relative flex h-full max-h-[500px] flex-col gap-5 overflow-y-auto bg-stone-200 p-5 dark:bg-stone-950;

  &__total-experience {
    @include primary-gradient-text;
    @apply text-center text-xl;
  }

  &__items-wrapper {
    @apply grid grid-cols-2 gap-5;
  }

  &__item-image {
    @apply h-[100px] w-[100px] object-contain;
  }

  &__item {
    @include colored-line;
    @apply flex w-full gap-5 border p-5;

    &__company-name {
      @apply font-exo text-sm text-stone-900 dark:text-white;
    }

    &__stack {
      @apply flex flex-wrap justify-between gap-5 rounded-lg bg-stone-100 p-5 dark:bg-stone-900;
    }

    &__stack-item {
      @apply flex items-center gap-2;
    }

    &__stack-item-image {
      @apply h-[20px] w-[20px] object-contain;
    }

    &__stack-item-name {
      @apply font-jetbrainsMono text-xs text-stone-900 dark:text-white;
    }
  }

  &__item-index {
    @apply text-primary text-xl dark:text-white;
  }

  &__item-content {
    @apply flex w-full flex-col gap-2;
  }

  &__item-title {
    @include primary-gradient-text;
    @apply font-whiteRabbit text-lg font-bold;
  }

  &__item-subtitle {
    @apply font-exo text-sm text-stone-900 dark:text-white;
  }
}
</style>
