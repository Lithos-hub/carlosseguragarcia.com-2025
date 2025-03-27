<template>
  <div class="Experience" id="experience">
    <div
      v-for="experience in DEV_EXPERIENCE"
      :key="`Experience-${experience.role}-${experience.subtitle}`"
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
              'text-white': getEndDate(experience) !== 'Present',
              'font-bold text-secondary': getEndDate(experience) === 'Present',
            }"
          >
            {{ getEndDate(experience) }}
          </div>
        </div>
      </div>
      <div class="Experience__right-side">
        <div class="Experience__card">
          <div class="Experience__header">
            <img
              :src="experience.image"
              :alt="experience.company"
              class="Experience__company-image"
              :class="{
                'bg-transparent p-2.5': experience.subtitle === 'InnoIT',
              }"
            />
            <div class="Experience__role-container">
              <h3 class="Experience__role">{{ experience.role }}</h3>
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
                <div class="Experience__task-bullet" />
                <p class="Experience__task-text">{{ task }}</p>
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
  @apply relative flex flex-col;

  &__item {
    @include corner-effect;
    @apply relative flex w-full bg-black;
  }

  &__left-side {
    @apply relative hidden w-full flex-col items-end pr-5 md:flex md:w-[300px];
  }

  &__index {
    @apply font-exo text-[100px] font-extrabold text-secondary/80;
  }

  &__date {
    @apply flex w-full items-center justify-end gap-1 font-exo text-xl;

    &-separator {
      @apply text-white;
    }
  }

  &__start-date {
    @apply text-white;
  }

  &__right-side {
    @apply flex-1 border-secondary bg-stone-950 backdrop-blur-lg md:pl-6;
  }

  &__item:not(:last-child) .Experience__right-side {
    @apply border-b;
  }

  &__card {
    @apply relative flex h-full w-full flex-col gap-5 p-5;

    &::after {
      content: "";
      @apply absolute right-0 top-0 h-[20px] w-[200px] bg-secondary;
      clip-path: polygon(
        0 0,
        100% 0,
        100% 30%,
        100% 70%,
        100% 100%,
        5% 100%,
        0 60%,
        0% 30%
      );
    }
  }

  &__header {
    @apply flex items-center gap-4;
  }

  &__company-image {
    @apply h-[50px] w-[50px] object-contain;
  }

  &__role-container {
    @apply flex flex-col;
  }

  &__role {
    @apply font-whiteRabbit text-xl font-bold text-secondary;
  }

  &__company {
    @apply font-exo text-base text-white;
  }

  &__clients {
    @apply flex flex-col gap-1;
  }

  &__client-list {
    @apply font-exo text-sm text-white;
  }

  &__label {
    @apply font-exo text-sm font-bold text-secondary;
  }

  &__stack {
    @apply flex flex-col gap-2;
  }

  &__stack-items {
    @apply grid grid-cols-4 gap-1;
  }

  &__stack-item {
    @include corner-effect;
    @apply flex w-full items-center gap-1 bg-stone-900/50 p-2;
  }

  &__stack-image {
    @apply h-[18px] w-[18px] object-contain;
  }

  &__stack-name {
    @apply font-jetbrainsMono text-[10px] text-white;
  }

  &__tasks {
    @apply flex flex-col gap-2;
  }

  &__task-list {
    @apply list-none;
  }

  &__task-item {
    @apply flex items-center gap-2;
  }

  &__task-bullet {
    @include corner-effect;
    @apply h-2 w-2 bg-transparent p-1;
  }

  &__task-text {
    @apply font-exo text-sm text-white;
  }
}
</style>
