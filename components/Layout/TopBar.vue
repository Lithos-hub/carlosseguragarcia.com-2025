<template>
  <div class="TopBar">
    <div class="TopBar__code">
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
    <div class="TopBar__radial-menu">
      <div class="flex flex-col items-center justify-center gap-2">
        <button class="TopBar__radial-menu__button" @click="toggleRadialMenu">
          <img src="/icons/radial-menu.svg" alt="Radial menu" />
        </button>
        <small class="text-xs text-secondary"
          >Click here or press
          <span class="font-bold text-secondarySoft">control / command</span> to
          show the radial menu</small
        >
      </div>
    </div>
    <div class="block md:hidden">
      <button @click="toggleMobileMenu">
        <UIcon name="i-mdi-menu" size="30" class="text-secondarySoft" />
      </button>
    </div>
    <div class="TopBar__language-selector">
      <div class="flex flex-col">
        <div class="flex items-center justify-between">
          <span class="info-text">Language: {{ selectedLanguage.name }}</span>
          <div class="triangle-shape-top-right bg-primary" />
        </div>
        <div class="grid grid-cols-5 gap-2">
          <div v-for="lang in availableLanguages" :key="lang.code">
            <button
              class="TopBar__language-selector__button"
              :class="{
                'TopBar__language-selector__button--active':
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
  </div>
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
  @apply flex w-full items-center justify-between border-b border-secondarySoft;

  @media mobile {
    padding: $mobile-margin;
  }

  @media desktop {
    padding: $desktop-margin;
  }

  &__code {
    @include corner-effect;
    @apply h-auto w-[150px] border-y border-y-stone-500/10 bg-black/90 px-10 px-2 pb-1 font-lucania text-lg text-primary backdrop-blur-lg;

    &-info {
      span {
        @apply ml-auto;
      }
    }
  }

  &__radial-menu {
    @apply z-50 hidden items-center justify-center gap-5 md:flex;

    &__button {
      @apply relative h-[30px] w-[30px] text-secondary transition-all duration-300;

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

  &__language-selector {
    @include corner-effect;
    @apply h-auto w-[150px] border-y border-y-stone-500/10 bg-black/90 px-10 px-2 pb-1 font-lucania text-lg text-primary backdrop-blur-lg;

    &__button {
      @apply rounded-full outline outline-transparent;
    }

    &__button--active {
      @apply outline-primary;
    }
  }

  &__link-zone {
    @apply absolute -bottom-7 left-1/2 -translate-x-1/2 font-lucania text-[8px] text-stone-800 dark:text-primary;
  }
}
</style>
