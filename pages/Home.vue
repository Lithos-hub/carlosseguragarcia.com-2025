<template>
  <div class="Home">
    <div class="Home__div" id="hero" ref="heroRef">
      <SectionHero />
    </div>
    <div class="Home__div" id="about" ref="aboutRef">
      <SectionAbout />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIsVisible } from "@/composables/useIsVisible";
import type { Section } from "~/consts/sections";

definePageMeta({
  layout: "threejs",
});

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
  &__div {
    @include section-wrapper;
  }
}
</style>
