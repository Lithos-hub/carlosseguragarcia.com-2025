import { defineStore } from "pinia";
import { type Section, sections, sectionsOptions } from "~/consts/sections";

export const useUiStore = defineStore("ui", () => {
  const visibleSection = ref<Section>(sectionsOptions.at(0) as Section);
  const isRadialMenuVisible = ref(false);
  const isMobileMenuVisible = ref(false);

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

  const openMobileMenu = () => {
    isMobileMenuVisible.value = true;
  };

  const closeMobileMenu = () => {
    isMobileMenuVisible.value = false;
  };

  const toggleMobileMenu = () => {
    isMobileMenuVisible.value = !isMobileMenuVisible.value;
  };

  return {
    visualDataBySection,
    visibleSection,
    isRadialMenuVisible,
    isMobileMenuVisible,
    openRadialMenu,
    closeRadialMenu,
    toggleRadialMenu,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu,
  };
});
