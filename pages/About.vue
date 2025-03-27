<template>
  <div class="About">
    <div class="About__div" id="about" ref="aboutRef">
      <SectionAbout />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIsVisible } from "@/composables/useIsVisible";
import type { Section } from "~/consts/sections";

definePageMeta({
  layout: "bars",
});

const aboutRef = useTemplateRef<HTMLElement | null>("aboutRef");

const { visibleSection } = storeToRefs(useUiStore());

const { visibleElement } = useIsVisible({
  refs: [aboutRef] as Ref<HTMLElement>[],
});

watch(visibleElement, (newVisibleElement) => {
  if (newVisibleElement) {
    visibleSection.value = newVisibleElement as Section;
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
.About {
  @apply flex flex-col;
  &__div {
    @include section-wrapper;
  }
}
</style>
