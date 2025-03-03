<template>
  <div class="Experience">
    <div class="Experience__div" id="experience" ref="experienceRef">
      <SectionExperience />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIsVisible } from "@/composables/useIsVisible";
import type { Section } from "~/consts/sections";

const experienceRef = useTemplateRef<HTMLElement | null>("experienceRef");

const { visibleSection } = storeToRefs(useUiStore());

const { visibleElement } = useIsVisible({
  refs: [experienceRef] as Ref<HTMLElement>[],
  options: {
    threshold: 0.1,
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
  @apply py-[10vh];
}
</style>
