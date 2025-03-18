<template>
  <div class="ExperienceWrapper">
    <div id="summary" ref="summaryRef">
      <SectionSummary />
    </div>
    <div id="experience" ref="experienceRef">
      <SectionExperience />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "threejs",
});

import { useIsVisible } from "@/composables/useIsVisible";
import type { Section } from "~/consts/sections";

const summaryRef = useTemplateRef<HTMLElement | null>("summaryRef");
const experienceRef = useTemplateRef<HTMLElement | null>("experienceRef");

const { visibleSection } = storeToRefs(useUiStore());

const { visibleElement } = useIsVisible({
  refs: [experienceRef, summaryRef] as Ref<HTMLElement>[],
  options: {
    threshold: 0.2,
  },
});

watch(visibleElement, (newVisibleElement) => {
  if (newVisibleElement) {
    visibleSection.value = newVisibleElement as Section;
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
.ExperienceWrapper {
  @apply mx-auto mt-40 flex max-w-4xl flex-col;
}
</style>
