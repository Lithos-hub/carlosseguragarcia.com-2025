<template>
  <div class="Summary">
    <ul class="Summary__info">
      <li class="Summary__info-item">
        <h2 class="Summary__info-Summary-title">Total experience:</h2>
        <code class="Summary__info-Summary-value">
          {{ totalSummary() }}
        </code>
      </li>
      <li class="Summary__info-item">
        <h2 class="Summary__info-Summary-title">Most used technologies:</h2>
        <code class="Summary__info-Summary-value">
          {{ getMostUsedTech() }}
        </code>
      </li>
      <li class="Summary__info-item">
        <h2 class="Summary__info-Summary-title">Main client fields:</h2>
        <code class="Summary__info-Summary-value">
          {{ getMainClientFields() }}
        </code>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getMainClientFields, getMostUsedTech } from "~/consts/devExperience";

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

.Summary {
  @apply relative mx-auto flex h-screen max-w-[90vw] flex-col items-center justify-center;

  &__info {
    @apply grid max-w-[90vw] grid-cols-1 gap-5 lg:grid-cols-3;
  }

  &__info-item {
    @apply flex h-[250px] flex-col items-center justify-center gap-5 p-4 text-center text-[24px] transition-all xl:h-[400px] xl:p-10 xl:text-[30px];
    aspect-ratio: 1/1;
    border-image: url("/svg/light-banner-square-1.svg") 0 0 fill;

    .dark & {
      border-image: url("/svg/dark-banner-square-1.svg") 0 0 fill;
    }
  }

  &__info-developer-info {
    @apply dark:text-primary font-extrabold uppercase text-stone-800;
  }

  &__info-Summary {
    @apply font-bold text-stone-800 dark:text-white;

    &__icon {
      @apply text-primary dark:text-primary;
    }

    &-title {
      @apply font-jetbrainsMono font-bold text-stone-800 dark:text-white;
    }
  }

  &__info-Summary-value {
    @apply font-exo text-primary dark:text-primary font-bold;
  }
}
</style>
