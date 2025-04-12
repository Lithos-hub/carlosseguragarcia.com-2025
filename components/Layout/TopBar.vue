<template>
  <header class="TopBar">
    <div class="TopBar__left">
      <div class="flex w-full items-center justify-between">
        <div class="triangle-shape-top-left bg-primary" />
        <span class="info-text">{{ visualDataBySection?.componentName }} </span>
      </div>
      <div class="flex w-full items-center justify-between">
        <div class="triangle-shape-top-left bg-primary" />
        <span class="info-text">Zone: {{ visualDataBySection?.code }} </span>
      </div>
    </div>
    <nav class="TopBar__center">
      <ul class="TopBar__links">
        <li
          v-for="link in sections"
          :key="link.title"
          class="TopBar__link"
          @click="scrollToSection(link.path)"
        >
          {{ link.title }}
        </li>
      </ul>
      <div class="TopBar__mobile-menu-button">
        <button @click="toggleMobileMenu">
          <UIcon name="i-mdi-menu" size="30" class="text-secondarySoft" />
        </button>
      </div>
    </nav>
    <div class="TopBar__right">
      <button @click="toggleRadialMenu">
        <UIcon
          name="i-mdi-translate"
          size="20"
          class="text-white transition-all duration-300 hover:text-secondary"
        />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { sections } from "@/consts/sections";
const { visualDataBySection } = storeToRefs(useUiStore());
const { toggleRadialMenu, toggleMobileMenu } = useUiStore();

const selectedLanguage = reactive({
  name: "English",
  code: "en",
  flag: "/icons/gb.svg",
});

const availableLanguages = [
  {
    name: "English",
    code: "en",
    flag: "/icons/gb.svg",
  },
  {
    name: "Spanish",
    code: "es",
    flag: "/icons/es.svg",
  },
  {
    name: "French",
    code: "fr",
    flag: "/icons/fr.svg",
  },
  {
    name: "Italian",
    code: "it",
    flag: "/icons/it.svg",
  },
  {
    name: "Portuguese",
    code: "pt",
    flag: "/icons/pt.svg",
  },
];

const changeLanguage = (lang: any) => {
  selectedLanguage.name = lang.name;
  selectedLanguage.code = lang.code;
  selectedLanguage.flag = lang.flag;
};

const scrollToSection = (section: string) => {
  const element = document.querySelector(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<style lang="scss" scoped>
@use "@/styles/main.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/fonts.scss" as *;
@use "@/styles/variables.scss" as *;
@use "@/styles/breakpoints.scss" as *;

.TopBar {
  @apply sticky top-0 z-20 flex h-[60px] w-full items-center justify-between border-b border-secondary;

  @media mobile {
    padding: $mobile-margin;
  }

  @media desktop {
    padding: $desktop-margin;
  }

  &__left {
    @apply flex h-full w-[50vw] flex-col items-center justify-between bg-black p-2 font-lucania lg:w-[10vw];
  }

  &__center {
    @apply mx-auto flex h-full w-full max-w-[80vw] items-center justify-center border-x border-secondary backdrop-blur-lg;
  }

  &__mobile-menu-button {
    @apply block lg:hidden;
  }

  &__links {
    @apply z-50 hidden gap-5 lg:flex;

    &-overlay {
      @apply fixed inset-0 z-40 hidden h-screen w-full bg-black/50 lg:block;
    }

    &-container {
      @apply absolute left-1/2 top-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-evenly gap-5 bg-gradient-to-br from-secondarySoft/50 via-black/50 to-black/50;
    }
  }

  &__link {
    @include corner-effect;
    @apply relative cursor-pointer px-4 py-2 text-center font-rajdhaniMedium text-xs backdrop-blur-lg;

    &:hover {
      @include corner-effect-secondary;
      @apply bg-black text-secondary transition-all duration-300;
      background-size: 100% 100%;
      text-shadow: 0 0 0px;
    }
  }

  &__right {
    @apply flex h-full w-[50vw] flex-col items-center justify-center bg-black transition-all duration-300 lg:w-[10vw];
  }
}
</style>
