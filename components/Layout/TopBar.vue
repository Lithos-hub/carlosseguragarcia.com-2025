<template>
  <header class="TopBar">
    <div class="TopBar__left">
      <div class="flex flex-col">
        <div class="flex items-center justify-between">
          <div class="triangle-shape-top-left bg-primary" />
          <span class="info-text"
            >{{ visualDataBySection?.componentName }}
          </span>
        </div>
        <div class="flex items-center justify-between">
          <div class="triangle-shape-top-left bg-primary" />
          <span class="info-text">Zone: {{ visualDataBySection?.code }} </span>
        </div>
      </div>
    </div>
    <div class="TopBar__center">
      <div class="TopBar__radial-menu">
        <div class="flex flex-col items-center justify-center gap-1">
          <button class="TopBar__radial-menu__button" @click="toggleRadialMenu">
            <img src="/icons/radial-menu.svg" alt="Radial menu" />
          </button>
          <small class="text-xs text-secondary"
            >Click here or press
            <span class="font-bold text-secondarySoft">control / command</span>
            to show the radial menu</small
          >
        </div>
      </div>
    </div>
    <div class="block md:hidden">
      <button @click="toggleMobileMenu">
        <UIcon name="i-mdi-menu" size="30" class="text-secondarySoft" />
      </button>
    </div>
    <div class="TopBar__right">
      <div class="flex flex-col">
        <div class="flex items-center justify-between">
          <span class="info-text">Language: {{ selectedLanguage.name }}</span>
          <div class="triangle-shape-top-right bg-primary" />
        </div>
        <div class="grid grid-cols-5 gap-2">
          <div v-for="lang in availableLanguages" :key="lang.code">
            <button
              class="TopBar__right__lang-button"
              :class="{
                'TopBar__right__lang-button--active':
                  lang.code === selectedLanguage.code,
              }"
              @click="changeLanguage(lang)"
            >
              <img :src="lang.flag" alt="Language flag" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { visualDataBySection, isMobileMenuVisible } = storeToRefs(useUiStore());
const { toggleRadialMenu, toggleMobileMenu } = useUiStore();

const selectedLanguage = reactive({
  name: "English",
  code: "en",
  flag: "/icons/gb.svg",
});

const links = [
  {
    name: "<Home />",
    path: "/home",
  },
  {
    name: "<Experience />",
    path: "/experience",
  },
  {
    name: "<Projects />",
    path: "/projects",
  },
  {
    name: "<CV />",
    path: "/cv",
  },
];

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
</script>

<style lang="scss" scoped>
@use "@/styles/main.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/fonts.scss" as *;
@use "@/styles/variables.scss" as *;
@use "@/styles/breakpoints.scss" as *;

.TopBar {
  @apply sticky top-0 z-10 flex h-[60px] w-full items-center justify-between border-b border-secondarySubtle;

  @media mobile {
    padding: $mobile-margin;
  }

  @media desktop {
    padding: $desktop-margin;
  }

  &__left {
    @apply h-full w-[10vw] bg-black px-2 font-lucania text-lg brightness-200;

    &-info {
      span {
        @apply ml-auto;
      }
    }
  }

  &__center {
    @apply mx-auto flex h-full w-full max-w-[80vw] items-center justify-center border-x border-secondarySubtle backdrop-blur-lg;
  }

  &__radial-menu {
    @apply z-50 hidden items-center justify-center gap-5 md:flex;

    &__button {
      @apply relative h-5 w-5 text-secondary transition-all duration-300;

      &:hover {
        @apply scale-110;
      }
    }
  }

  &__links {
    @apply z-50 flex h-screen md:hidden;

    &-overlay {
      @apply fixed inset-0 z-40 hidden h-screen w-full bg-black/50 md:block;
    }

    &-container {
      @apply absolute left-1/2 top-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-evenly gap-5 bg-gradient-to-br from-secondarySoft/50 via-black/50 to-black/50;
    }
  }

  &__link {
    @include corner-effect;
    @apply relative w-[250px] py-2 text-center font-jetbrainsMono text-[12px] backdrop-blur-lg;

    &:hover {
      @include corner-effect-secondary;
      @apply bg-black text-secondary transition-all duration-300;
      background-size: 100% 100%;
      text-shadow: 0 0 0px;
    }
  }

  &__right {
    @apply h-full w-[10vw] bg-black px-2 font-lucania text-lg brightness-200;

    &__lang-button {
      @apply h-6 w-6 cursor-pointer rounded-full border-2 border-transparent brightness-50;
    }

    &__lang-button--active {
      @apply border-primary;
    }
  }

  &__link-zone {
    @apply absolute -bottom-7 left-1/2 -translate-x-1/2 font-lucania text-[8px] text-stone-800 dark:text-primary;
  }
}
</style>
