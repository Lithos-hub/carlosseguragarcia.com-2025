<template>
  <div class="Summary">
    <ul class="Summary__info">
      <code class="Summary__info-developer-info"> Summary: </code>
      <li>
        <span class="Summary__info-Summary__icon">&boxur;</span>
        <code class="Summary__info-Summary">
          Total experience:
          <span class="Summary__info-Summary-value">{{ totalSummary() }}</span>
        </code>
      </li>
      <li>
        <span class="Summary__info-Summary__icon">&boxur;</span>
        <code class="Summary__info-Summary">
          Most used technologies:
          <span class="Summary__info-Summary-value">
            {{ getMostUsedTech() }}
          </span>
        </code>
      </li>
      <li>
        <span class="Summary__info-Summary__icon">&boxur;</span>
        <code class="Summary__info-Summary">
          Main client fields:
          <span class="Summary__info-Summary-value">{{
            getMainClientFields()
          }}</span>
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

.Summary {
  @include middle-side-effect-with-animation;
  @apply relative;

  &__info {
    @apply flex w-full max-w-[90vw] flex-col gap-2 border-cyan-500 bg-stone-50 p-5 dark:bg-stone-800;
  }

  &__info-developer-info {
    @apply dark:text-primary text-xs font-extrabold uppercase text-stone-800;
  }

  &__info-Summary {
    @apply text-xs font-bold text-stone-800 dark:text-white;

    &__icon {
      @apply text-primary dark:text-cyan-500;
    }
  }

  &__info-Summary-value {
    @apply text-primary font-bold dark:text-cyan-500;
  }
}
</style>
