<template>
  <div class="experience">
    <div class="experience__content">
      <img
        src="/svg/decoration/decoration-11.svg"
        alt="Decorative element for the experience section top left corner"
        class="experience__decoration experience__decoration--top-left"
      />
      <ComponentName componentName="Experience.vue" color="secondary" />
      <div class="experience__inner-container">
        <img
          src="/svg/decoration/decoration-13.svg"
          alt="Decorative element above experience section"
          class="absolute left-0 top-[-40px] h-[30px]"
        />
        <img
          src="/svg/decoration/decoration-10.svg"
          alt="Decorative element for the experience section top right corner"
          class="experience__decoration experience__decoration--top-right"
        />
        <h1 class="experience__title">Experience</h1>
        <div class="experience__list">
          <article
            v-for="experience in DEV_EXPERIENCE"
            :key="`Experience-${experience.role}-${experience.subtitle}`"
            class="experience-card"
          >
            <div class="experience-card__index-and-date">
              <img
                :src="'/svg/decoration/decoration-22.svg'"
                alt="Decorative border element at the bottom of experience card"
                class="absolute bottom-0 right-0 hidden h-[20px] w-auto object-cover lg:block lg:w-full"
              />
              <img
                :src="'/svg/decoration/decoration-23.svg'"
                alt="Decorative vertical border element for experience card"
                class="absolute bottom-[22px] right-0 hidden h-[calc(100%-22px)] w-auto object-contain lg:block"
              />
              <img
                :src="'/svg/decoration/decoration-25.svg'"
                alt="Decorative vertical border element for experience card"
                class="absolute bottom-0 right-0 w-full object-contain lg:hidden"
              />
              <div class="experience-card__index">#{{ experience.id }}</div>
              <div class="experience-card__date">
                <span class="experience-card__date-start">{{
                  getStartDate(experience)
                }}</span>
                <span class="experience-card__date-separator">-</span>
                <span
                  class="experience-card__date-end"
                  :class="{
                    'experience-card__date-end--current':
                      getEndDate(experience) === 'Present',
                  }"
                >
                  {{ getEndDate(experience) }}
                </span>
              </div>
            </div>
            <div class="experience-card__content">
              <img
                :src="'/svg/decoration/decoration-18.svg'"
                alt="Decorative element at the bottom of experience card content"
                class="absolute bottom-0 right-0 h-[30px]"
              />
              <div class="experience-card__header">
                <img
                  :src="experience.image"
                  :alt="experience.company"
                  class="experience-card__company-image"
                  :class="{
                    'bg-transparent p-2.5': experience.subtitle === 'InnoIT',
                  }"
                />
                <div class="experience-card__role-container">
                  <h3 class="experience-card__role">{{ experience.role }}</h3>
                  <p class="experience-card__company">
                    {{ experience.company }}
                  </p>
                </div>
              </div>

              <div
                class="experience-card__clients"
                v-if="experience.clients.length"
              >
                <span class="experience-card__label">Clients:</span>
                <span class="experience-card__client-list">{{
                  experience.clients.join(", ")
                }}</span>
              </div>

              <div class="experience-card__stack">
                <span class="experience-card__label">Stack:</span>
                <div class="experience-card__stack-items">
                  <div
                    v-for="tech in experience.stack"
                    :key="tech.techName"
                    class="experience-card__stack-item"
                  >
                    <img
                      :src="tech.imageUrl"
                      :alt="tech.techName"
                      class="experience-card__stack-image"
                    />
                    <span class="experience-card__stack-name">{{
                      tech.techName
                    }}</span>
                  </div>
                </div>
              </div>

              <div class="experience-card__tasks">
                <span class="experience-card__label">Tasks:</span>
                <ul class="experience-card__task-list">
                  <li
                    v-for="(task, taskIndex) in experience.tasks"
                    :key="taskIndex"
                    class="experience-card__task-item"
                  >
                    <div class="experience-card__task-bullet" />
                    <p class="experience-card__task-text">{{ task }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </article>
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
@use "@/styles/variables.scss" as *;
@use "@/styles/mixins.scss" as *;

.experience {
  @include section-container;

  &__content {
    @include section-content-secondary;
  }

  &__decoration {
    position: absolute;

    &--top-left {
      left: 1.25rem;
      top: 1.25rem;
      height: 20px;
    }

    &--top-right {
      right: 0;
      top: -60px;
      height: 50px;
    }
  }

  &__inner-container {
    @include inner-container-secondary;
  }

  &__title {
    @include section-title-secondary;
  }

  &__list {
    @apply flex flex-col gap-5;
  }
}

.experience-card {
  @apply relative flex w-full flex-col bg-black/50 lg:flex-row;

  &__index-and-date {
    @apply relative flex w-full flex-col p-5 font-orbitron font-extrabold text-secondary/80 lg:w-[300px] lg:gap-10;
  }

  &__index {
    @apply font-orbitron text-4xl font-extrabold text-secondary/80 lg:py-[20px] lg:text-[100px];
  }

  &__date {
    @apply flex w-full items-center gap-1 font-rajdhaniSemiBold;

    &-start,
    &-separator {
      @apply text-white;
    }

    &-end {
      @apply text-white;

      &--current {
        @apply font-bold text-secondary;
      }
    }
  }

  &__content {
    @apply flex flex-1 flex-col gap-5 border-secondary bg-stone-950 p-5 backdrop-blur-lg;

    &:not(:last-child) {
      @apply border-b;
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
    @apply font-rajdhaniSemiBold text-xl font-bold text-secondary;
  }

  &__company {
    @apply font-rajdhaniLight text-base text-white;
  }

  &__clients {
    @apply flex flex-col gap-1;
  }

  &__client-list {
    @apply font-rajdhaniMedium text-sm text-white;
  }

  &__label {
    @apply font-orbitron text-sm font-bold text-secondary;
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
    @apply font-exo text-[10px] text-white;
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
    @apply font-rajdhaniMedium text-sm text-white;
  }
}
</style>
