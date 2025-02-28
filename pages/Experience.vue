<template>
  <section class="Experience__section" id="experience" ref="experienceRef">
    <SectionExperience />
  </section>
</template>

<script setup lang="ts">
import { useIsVisible } from "@/composables/useIsVisible";
import type { Section } from "~/consts/sections";

const experienceRef = useTemplateRef<HTMLElement | null>("experienceRef");

const { visibleSection } = storeToRefs(useUiStore());

const { visibleElement } = useIsVisible({
  refs: [experienceRef] as Ref<HTMLElement>[],
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
  &__section {
    @include section-wrapper;
  }
}
</style>
