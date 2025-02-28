<template>
  <div class="Home">
    <section class="Home__section" id="hero" ref="heroRef">
      <SectionHero />
    </section>
    <section class="Home__section" id="about" ref="aboutRef">
      <SectionAbout />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useIsVisible } from "@/composables/useIsVisible";
import type { Section } from "~/consts/sections";

const heroRef = useTemplateRef<HTMLElement | null>("heroRef");
const aboutRef = useTemplateRef<HTMLElement | null>("aboutRef");

const { visibleSection } = storeToRefs(useUiStore());

const { visibleElement } = useIsVisible({
  refs: [heroRef, aboutRef] as Ref<HTMLElement>[],
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
