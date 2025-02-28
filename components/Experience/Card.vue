<template>
  <div class="Card">
    <div class="Card__left">
      <img
        :src="experience.image"
        :alt="experience.title"
        class="Card__image"
        :class="{
          'bg-stone-900 p-2.5 dark:bg-transparent':
            experience.subtitle === 'InnoIT',
        }"
      />
      <div class="Card__info">
        <div class="Card__header">
          <div class="Card__index">#{{ index + 1 }}</div>
          <h3 class="Card__title">{{ experience.title }}</h3>
        </div>
        <div class="Card__details">
          <small class="Card__company"> At: {{ experience.subtitle }} </small>
          <small class="Card__date">
            {{ getStartDate(experience) }} -
            <span
              :class="{
                'text-green-500': getEndDate(experience) === 'Present',
              }"
            >
              {{ getEndDate(experience) }}
            </span>
          </small>
        </div>
      </div>
    </div>

    <div class="Card__stack">
      <div
        class="Card__stack-item"
        v-for="stack in experience.stack"
        :key="stack.techName"
      >
        <img
          :src="stack.imageUrl"
          :alt="stack.techName"
          class="Card__stack-image"
        />
        <small class="Card__stack-name">{{ stack.techName }}</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MONTHS } from "@/consts/months";
import { type Experience } from "~/consts/devExperience";

const props = defineProps<{
  experience: Experience;
  index: number;
}>();

const getMonth = (month: number) => MONTHS[month - 1];

const getStartDate = ({ initialYear, initialMonth }: Experience) => {
  return `${getMonth(initialMonth)} ${initialYear}`;
};

const getEndDate = ({ endYear, endMonth }: Experience) => {
  return endMonth ? `${getMonth(endMonth)} ${endYear}` : "Present";
};
</script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
@use "@/styles/fonts.scss" as *;

.Card {
  @include colored-line;
  @apply flex w-full flex-col gap-5 border p-5 md:flex-row;

  &__left {
    @apply flex gap-5;
  }

  &__image {
    @apply h-[80px] w-[80px] object-contain;
  }

  &__info {
    @apply flex flex-col gap-2;
  }

  &__header {
    @apply flex items-center gap-3;
  }

  &__index {
    @apply text-primary text-lg dark:text-white;
  }

  &__title {
    @include primary-gradient-text;
    @apply font-whiteRabbit text-lg font-bold;
  }

  &__details {
    @apply flex flex-col gap-1;
  }

  &__company {
    @apply font-exo text-sm text-stone-900 dark:text-white;
  }

  &__date {
    @apply font-exo text-sm text-stone-900 dark:text-white;
  }

  &__stack {
    @apply flex grow flex-wrap items-center gap-2 rounded-lg bg-stone-100 p-5 dark:bg-stone-900;
  }

  &__stack-item {
    @apply flex items-center gap-2;
  }

  &__stack-image {
    @apply h-[20px] w-[20px] object-contain;
  }

  &__stack-name {
    @apply font-jetbrainsMono text-xs text-stone-900 dark:text-white;
  }
}
</style>
