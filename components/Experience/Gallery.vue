<template>
  <div class="Gallery">
    <div class="Gallery__items-wrapper">
      <ExperienceCard
        v-for="(experience, index) in DEV_EXPERIENCE"
        :key="`${experience.title}-${experience.subtitle}`"
        :experience="experience"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DEV_EXPERIENCE } from "~/consts/devExperience";
</script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
@use "@/styles/fonts.scss" as *;

.Gallery {
  @apply relative max-w-[90vw] overflow-x-auto;

  &__items-wrapper {
    @apply flex gap-5 p-5;
  }
}
</style>
