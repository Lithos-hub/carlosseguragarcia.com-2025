<template>
  <div class="Summary">
    <h1 class="Summary__title">Summary</h1>
    <ul class="Summary__info">
      <div class="Summary__info__decoration-shape" />
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
  @apply relative flex flex-col gap-5 border-b border-primary bg-black/50 p-5 backdrop-blur-lg;

  &__title {
    @apply font-exo text-2xl font-bold text-primary;
  }

  &__info {
    @apply grid grid-cols-1 gap-5 pb-5 lg:grid-cols-3;

    &__decoration-shape {
      @apply absolute bottom-0 right-0 h-[20px] w-[200px] bg-primary;
      clip-path: polygon(
        5% 0,
        100% 0,
        100% 30%,
        100% 70%,
        100% 100%,
        0 100%,
        0 60%,
        0 40%
      );
    }

    &-item {
      &__title {
        @apply font-exo text-sm font-bold text-primary;
      }

      &__value {
        @apply font-lucania text-sm text-secondary;
      }
    }
  }
}
</style>
