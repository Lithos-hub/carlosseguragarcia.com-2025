<template>
  <div class="Site">
    <LayoutTopBar />
    <section ref="heroRef" id="hero">
      <SectionHero />
    </section>
    <section ref="aboutRef" id="about">
      <SectionAbout />
    </section>
    <section ref="experienceRef" id="experience">
      <SectionExperience />
    </section>
    <!-- <SummarySection /> -->
  </div>
</template>

<script setup lang="ts">
import type { Section } from "~/consts/sections";

const heroRef = useTemplateRef<HTMLElement | null>("heroRef");
const aboutRef = useTemplateRef<HTMLElement | null>("aboutRef");
const experienceRef = useTemplateRef<HTMLElement | null>("experienceRef");

const { visibleSection } = storeToRefs(useUiStore());

const { visibleElement } = useIsVisible({
  refs: [heroRef, aboutRef, experienceRef] as Ref<HTMLElement>[],
});

watch(visibleElement, (newVisibleElement) => {
  visibleSection.value = newVisibleElement as Section;
});
</script>

<style lang="scss" scoped>
.Site {
  @apply flex flex-col;
}
</style>
