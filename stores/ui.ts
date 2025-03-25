import { defineStore } from "pinia";
import { type Section, sections, sectionsOptions } from "~/consts/sections";

export const useUiStore = defineStore("ui", () => {
  const visibleSection = ref<Section>(sectionsOptions.at(0) as Section);
  const isRadialMenuVisible = ref(false);

  const visualDataBySection = computed(() => {
    return sections[visibleSection.value as keyof typeof sections];
  });

  const openRadialMenu = () => {
    isRadialMenuVisible.value = true;
  };

  const closeRadialMenu = () => {
    isRadialMenuVisible.value = false;
  };

  const toggleRadialMenu = () => {
    isRadialMenuVisible.value = !isRadialMenuVisible.value;
  };

  return {
    visualDataBySection,
    visibleSection,
    isRadialMenuVisible,
    openRadialMenu,
    closeRadialMenu,
    toggleRadialMenu,
  };
});
