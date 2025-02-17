import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", () => {
  const route = useRoute();

  const colorMode = useColorMode();
  const isDarkMode = computed({
    get() {
      return colorMode.value === "dark";
    },
    set() {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
  });
  const visualDataBySection = computed(() => {
    const path = route.path;

    const options = {
      "/hero": {
        id: "hero",
        number: "00",
        color: "red",
        title: "<Hero />",
      },
      "/experience": {
        id: "experience",
        number: "01",
        color: "green",
        title: "<Experience />",
      },
      "/projects": {
        id: "projects",
        number: "02",
        color: "blue",
        title: "<Projects />",
      },
    };

    return options[path as keyof typeof options];
  });

  return { visualDataBySection, isDarkMode };
});
