<template>
  <div class="relative">
    <div class="Card">
      <div class="Card__content">
        <header class="Card__header">
          <div class="Card__index">#{{ index + 1 }}</div>
          <img
            :src="experience.image"
            :alt="experience.title"
            class="Card__image"
            :class="{
              'bg-stone-900 p-2.5 dark:bg-transparent':
                experience.subtitle === 'InnoIT',
            }"
          />
          <div>
            <h3 class="Card__title">{{ experience.title }}</h3>
            <div class="Card__details">
              <small class="Card__company">
                At: {{ experience.subtitle }}
              </small>
              <small class="Card__date">
                {{ getStartDate(experience) }} -
                <span
                  class="text-stone-900 dark:text-white"
                  :class="{
                    'text-green-500': getEndDate(experience) === 'Present',
                  }"
                >
                  {{ getEndDate(experience) }}
                </span>
              </small>
            </div>
          </div>
        </header>

        <div class="Card__stack">
          <small class="Card__stack-label">Stack:</small>
          <div class="Card__stack-items">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MONTHS } from "@/consts/months";
import { type Experience } from "~/consts/devExperience";

defineProps<{
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
  @include svg-card-horizontal;
  @apply h-full w-[450px];

  &__header {
    @apply flex items-center gap-5 py-1 pl-2;
  }

  &__image {
    @apply h-[50px] w-[50px] object-contain;
  }

  &__index {
    @apply font-exo text-[40px] font-extrabold text-cyan-500/10;
  }

  &__title {
    @apply text-primary font-whiteRabbit text-lg font-extralight;
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
    @apply flex w-full flex-col flex-wrap gap-2 p-2 dark:bg-stone-900;
  }

  &__stack-label {
    @apply font-exo text-primary text-xs;
  }

  &__stack-items {
    @apply flex flex-wrap items-center gap-2;
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
