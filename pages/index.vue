<template>
  <div>
    <section class="Home__section" id="hero" ref="heroRef">
      <SectionHero />
    </section>
    <section class="Home__section" id="experience" ref="experienceRef">
      <SectionExperience />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useIsVisible } from "@/composables/useIsVisible";
import type { Section } from "~/consts/sections";

const heroRef = useTemplateRef<HTMLElement | null>("heroRef");
const experienceRef = useTemplateRef<HTMLElement | null>("experienceRef");

const { visibleSection } = storeToRefs(useUiStore());

const { visibleElement } = useIsVisible({
  refs: [heroRef, experienceRef] as Ref<HTMLElement>[],
});

watch(visibleElement, (newVisibleElement) => {
  if (newVisibleElement) {
    visibleSection.value = newVisibleElement as Section;
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
.Home {
  @apply flex flex-col;
  &__section {
    @include section-wrapper;
  }
}
</style>
