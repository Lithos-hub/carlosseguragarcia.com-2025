<template>
  <div class="Experience">
    <div
      v-for="experience in DEV_EXPERIENCE"
      :key="`Experience-${experience.title}-${experience.subtitle}`"
      class="Experience__item"
    >
      <div class="Experience__left-side">
        <div class="Experience__index">#{{ experience.id }}</div>
        <div class="Experience__date">
          <div class="Experience__start-date">
            {{ getStartDate(experience) }}
          </div>
          <div class="Experience__date-separator">-</div>
          <div
            class="Experience__end-date"
            :class="{
              'text-stone-900 dark:text-white':
                getEndDate(experience) !== 'Present',
              'text-primary font-bold': getEndDate(experience) === 'Present',
            }"
          >
            {{ getEndDate(experience) }}
          </div>
        </div>
        <div
          class="Experience__connector"
          :class="{
            'Experience__connector--last': experience.id === 1,
          }"
        ></div>
      </div>
      <div class="Experience__right-side">
        <div class="Experience__card">
          <div class="Experience__header">
            <img
              :src="experience.image"
              :alt="experience.company"
              class="Experience__company-image"
              :class="{
                'bg-stone-900 p-2.5 dark:bg-transparent':
                  experience.subtitle === 'InnoIT',
              }"
            />
            <div class="Experience__title-container">
              <h3 class="Experience__title">{{ experience.title }}</h3>
              <p class="Experience__company">{{ experience.company }}</p>
            </div>
          </div>

          <div class="Experience__clients" v-if="experience.clients.length">
            <span class="Experience__label">Clients:</span>
            <span class="Experience__client-list">{{
              experience.clients.join(", ")
            }}</span>
          </div>

          <div class="Experience__stack">
            <span class="Experience__label">Stack:</span>
            <div class="Experience__stack-items">
              <div
                v-for="tech in experience.stack"
                :key="tech.techName"
                class="Experience__stack-item"
              >
                <img
                  :src="tech.imageUrl"
                  :alt="tech.techName"
                  class="Experience__stack-image"
                />
                <span class="Experience__stack-name">{{ tech.techName }}</span>
              </div>
            </div>
          </div>

          <div class="Experience__tasks">
            <span class="Experience__label">Tasks:</span>
            <ul class="Experience__task-list">
              <li
                v-for="(task, taskIndex) in experience.tasks"
                :key="taskIndex"
                class="Experience__task-item"
              >
                {{ task }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DEV_EXPERIENCE, type Experience } from "~/consts/devExperience";
import { MONTHS } from "~/consts/months";

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

.Experience {
  @apply relative mx-auto flex min-h-screen w-full max-w-4xl flex-col;

  &__item {
    @include corner-effect;
    @apply relative flex w-full;
  }

  &__left-side {
    @apply relative hidden w-full flex-col items-end pr-5 md:flex md:w-[300px];
  }

  &__index {
    @apply font-exo text-[100px] font-extrabold text-cyan-500/80;
  }

  &__date {
    @apply font-exo flex w-full items-center justify-end gap-1 text-xl;

    &-separator {
      @apply text-stone-900 dark:text-white;
    }
  }

  &__start-date {
    @apply text-stone-900 dark:text-white;
  }

  &__connector {
    @apply absolute right-0 top-0 h-full w-[2px] bg-cyan-500/50;

    &::before {
      content: "";
      @apply absolute right-[-6px] top-[30px] h-[14px] w-[14px] rounded-full bg-cyan-500;
    }

    &--last {
      @apply h-[60px];
    }
  }

  &__right-side {
    @apply flex-1 border-stone-900 bg-stone-100 md:pl-6 dark:border-cyan-500 dark:bg-stone-800;
  }

  &__item:not(:last-child) .Experience__right-side {
    @apply border-b;
  }

  &__card {
    @apply flex h-full w-full flex-col gap-5 p-5;
  }

  &__header {
    @apply flex items-center gap-4;
  }

  &__company-image {
    @apply h-[50px] w-[50px] object-contain;
  }

  &__title-container {
    @apply flex flex-col;
  }

  &__title {
    @apply text-primary font-whiteRabbit text-xl font-bold;
  }

  &__company {
    @apply font-exo text-base text-stone-900 dark:text-white;
  }

  &__clients {
    @apply flex flex-col gap-1;
  }

  &__client-list {
    @apply font-exo text-sm text-stone-900 dark:text-white;
  }

  &__label {
    @apply font-exo text-primary text-sm font-bold;
  }

  &__stack {
    @apply flex flex-col gap-2;
  }

  &__stack-items {
    @apply flex flex-wrap gap-3;
  }

  &__stack-item {
    @apply flex items-center gap-1 bg-stone-100 p-2 dark:bg-stone-900;
  }

  &__stack-image {
    @apply h-[18px] w-[18px] object-contain;
  }

  &__stack-name {
    @apply font-jetbrainsMono text-xs text-stone-900 dark:text-white;
  }

  &__tasks {
    @apply flex flex-col gap-2;
  }

  &__task-list {
    @apply list-disc pl-5;
  }

  &__task-item {
    @apply font-exo mb-1 text-sm text-stone-900 dark:text-white;
  }
}
</style>
