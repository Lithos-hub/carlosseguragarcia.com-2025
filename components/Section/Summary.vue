<template>
  <div class="Summary__container" id="summary">
    <div class="Summary">
      <div class="Summary__pseudo-border"></div>
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
      </ul>
    </div>
    <div class="Summary__decoration-shape-1" />
    <div class="Summary__decoration-shape-2" />
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
  &__container {
    @apply relative h-[260px] overflow-hidden;
  }

  $clip-shape: polygon(
    0 0,
    95% 0,
    100% 10%,
    100% 70%,
    100% 100%,
    10% 100%,
    0 85%,
    0% 30%
  );

  $gradient-cyan: rgba(0, 255, 255, 0.1);
  $gradient-black: rgba(0, 0, 0, 0.1);
  $self: &;

  @apply relative flex flex-col gap-5 border border-primary p-5 transition-all;
  background-color: #0e0e0e;
  clip-path: $clip-shape;

  &::after {
    content: "";
    @apply absolute inset-0 z-0 h-full w-full bg-black/90;
    clip-path: $clip-shape;
    background-size: 3px 3px;
    background-image: repeating-linear-gradient(
      0deg,
      $gradient-cyan,
      $gradient-cyan 1px,
      $gradient-black 1px,
      $gradient-black
    );
  }

  &__pseudo-border {
    @apply absolute inset-0 -left-1 h-[calc(100%+10px)] w-[calc(100%+10px)];
    background-color: rgb(0, 225, 255);
    clip-path: $clip-shape;
    z-index: -1;
  }

  &__title {
    @apply relative z-10 font-exo text-2xl font-bold text-primary;
  }

  &__info {
    @apply relative z-10 grid grid-cols-1 gap-5 pb-5 lg:grid-cols-3;

    &-item {
      &__title {
        @apply font-exo text-sm font-bold text-white;
      }

      &__value {
        @apply font-lucania text-sm text-cyan-400;
      }
    }
  }

  &__decoration-shape-1 {
    @apply absolute bottom-0 left-0 h-[45px] w-[110px] bg-primary;
    clip-path: polygon(0 0, 100% 80%, 100% 100%, 0 100%, 0 85%, 0% 30%);
  }

  &__decoration-shape-2 {
    @apply absolute bottom-0 left-[115px] h-[10px] w-full bg-primary;
  }
}
</style>
