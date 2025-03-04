<template>
  <div class="Experience">
    <div class="Summary__div" id="summary" ref="summaryRef">
      <SectionSummary />
    </div>
    <div class="Experience__div" id="experience" ref="experienceRef">
      <SectionExperience />
    </div>
  </div>
</template>

<script setup lang="ts">
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
.Experience {
  @apply flex flex-col;
}
</style>
