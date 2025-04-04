<template>
  <div class="Summary__container" id="summary">
    <div class="Summary__content">
      <img
        src="/svg/decoration/decoration-8.svg"
        alt="Decoration protocol image"
        class="absolute bottom-5 left-5 h-[20px]"
      />
      <ComponentName componentName="Summary.vue" color="primary" />
      <div class="Summary__inner-container">
        <img
          src="/svg/decoration/decoration-1.svg"
          alt="Decoration protocol image"
          class="absolute left-0 top-[-30px] h-[20px]"
        />
        <img
          src="/svg/decoration/decoration-2.svg"
          alt="Decoration protocol image"
          class="absolute right-0 top-[-30px] h-[20px]"
        />
        <img
          src="/svg/decoration/decoration-9.svg"
          alt="Decoration protocol image"
          class="absolute right-5 top-5 h-[20px]"
        />
        <h1 class="Summary__title">Summary</h1>
        <ul class="Summary__info">
          <li class="Summary__info-item">
            <h2 class="Summary__info-item__title">Main role:</h2>
            <code class="Summary__info-item__value">
              {{ "Front-end Developer" }}
            </code>
          </li>
          <li class="Summary__info-item">
            <h2 class="Summary__info-item__title">Total experience:</h2>
            <code class="Summary__info-item__value">
              {{ totalSummary() }}
            </code>
          </li>
          <li class="Summary__info-item">
            <h2 class="Summary__info-item__title">Most used technologies:</h2>
            <code class="Summary__info-item__value">
              {{ getMostUsedTech() }}
            </code>
          </li>
          <li class="Summary__info-item">
            <h2 class="Summary__info-item__title">Main client fields:</h2>
            <code class="Summary__info-item__value">
              {{ getMainClientFields() }}
            </code>
          </li>
          <li class="Summary__info-item Summary__info-item--tech">
            <h2 class="Summary__info-item__title">
              Technology stack I have worked with:
            </h2>
            <div class="Summary__tech-container">
              <img
                src="/svg/decoration/decoration-24.svg"
                alt="Decoration protocol image"
                class="absolute bottom-0 left-0 h-auto w-full object-cover"
              />
              <div
                v-for="tech in techSkills"
                :key="tech.name"
                class="Summary__tech-item"
              >
                <img
                  :src="tech.image"
                  :alt="tech.name"
                  class="Summary__tech-item__image"
                />
                <small class="Summary__tech-item__name">{{ tech.name }}</small>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getMainClientFields,
  getMostUsedTech,
  techSkills,
} from "~/consts/devExperience";

// Calculate total Summary in the following format: x years, y months
const totalSummary = () => {
  const firstSummary = new Date("2021-03-01");
  const currentDate = new Date();
  const totalMonths =
    (currentDate.getFullYear() - firstSummary.getFullYear()) * 12 +
    (currentDate.getMonth() - firstSummary.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return `${years} years, ${months} months`;
};
</script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
@use "@/styles/fonts.scss" as *;
@use "@/styles/variables.scss" as *;
@use "@/styles/mixins.scss" as *;
.Summary {
  &__container {
    @include section-container;
  }

  &__content {
    @include section-content-primary;
  }

  &__inner-container {
    @include inner-container-primary;
  }

  &__title {
    @include section-title-primary;
  }

  &__info {
    @apply relative z-10 flex flex-col gap-5 pb-5 lg:grid lg:grid-cols-3;

    &-item {
      @apply flex flex-col gap-2;
      &__title {
        @apply font-orbitron text-xl font-bold text-white;
      }

      &__value {
        @apply font-rajdhaniSemiBold text-xl text-cyan-400;
      }

      &--tech {
        grid-column: span 3;
      }
    }
  }

  &__tech {
    &-container {
      @apply relative flex flex-wrap items-center justify-center gap-5 bg-black p-14;

      clip-path: polygon(
        0 0,
        100% 0,
        100% 30%,
        100% 95%,
        99% 100%,
        0 100%,
        0% 70%,
        0% 30%
      );
    }

    &-item {
      @apply flex flex-col items-center gap-2;

      &__image {
        @apply h-5 w-5 object-contain lg:h-10 lg:w-10;
      }

      &__name {
        @apply font-exo text-xs text-primary;
      }
    }
  }
}
</style>
