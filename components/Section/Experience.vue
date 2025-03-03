<template>
  <div class="Experience">
    <ComponentName
      :name="visualDataBySection.componentName"
      :mounted-time="mountedTimes[visibleSection]"
    />
    <ul class="Experience__info">
      <code class="Experience__info-developer-info"> Summary: </code>
      <li>
        <span class="Experience__info-experience__icon">&boxur;</span>
        <code class="Experience__info-experience">
          Total experience:
          <span class="Experience__info-experience-value">{{
            totalExperience()
          }}</span>
        </code>
      </li>
      <li>
        <span class="Experience__info-experience__icon">&boxur;</span>
        <code class="Experience__info-experience">
          Most used technologies:
          <span class="Experience__info-experience-value">
            {{ getMostUsedTech() }}
          </span>
        </code>
      </li>
      <li>
        <span class="Experience__info-experience__icon">&boxur;</span>
        <code class="Experience__info-experience">
          Main client fields:
          <span class="Experience__info-experience-value">{{
            getMainClientFields()
          }}</span>
        </code>
      </li>
    </ul>
    <ExperienceGallery />
  </div>
</template>

<script setup lang="ts">
import { getMainClientFields, getMostUsedTech } from "~/consts/devExperience";
const startTime = ref(performance.now());

const { mountedTimes, visibleSection, visualDataBySection } =
  storeToRefs(useUiStore());

onMounted(() => {
  mountedTimes.value.experience = Math.round(
    performance.now() - startTime.value,
  );
});

// Calculate total experience in the following format: x years, y months
const totalExperience = () => {
  const firstExperience = new Date("2021-03-01");
  const currentDate = new Date();
  const totalMonths =
    (currentDate.getFullYear() - firstExperience.getFullYear()) * 12 +
    (currentDate.getMonth() - firstExperience.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return `${years} years, ${months} months`;
};
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
</style>

<style lang="scss">
@use "@/styles/general.scss" as *;
.Experience {
  @apply mx-auto flex h-full flex-col items-center justify-center gap-5 px-5;

  &__info {
    @apply flex flex-col gap-2 self-start border border-cyan-500 bg-stone-50 p-5 dark:bg-stone-800;
  }

  &__info-developer-info {
    @apply dark:text-primary text-xs font-extrabold uppercase text-stone-800;
  }

  &__info-experience {
    @apply text-xs font-bold text-stone-800 dark:text-white;

    &__icon {
      @apply text-primary dark:text-cyan-500;
    }
  }

  &__info-experience-value {
    @apply text-primary font-bold dark:text-cyan-500;
  }
}
</style>
