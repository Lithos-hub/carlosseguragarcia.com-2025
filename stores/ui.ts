import { defineStore } from "pinia";
import { type Section, sections, sectionsOptions } from "~/consts/sections";

export const useUiStore = defineStore("ui", () => {
  const visibleSection = ref<Section>(sectionsOptions.at(0) as Section);
  const isRadialMenuVisible = ref(true);

  const visualDataBySection = computed(() => {
    return sections[visibleSection.value as keyof typeof sections];
  });

  return {
    visualDataBySection,
    visibleSection,
    isRadialMenuVisible,
  };
});
