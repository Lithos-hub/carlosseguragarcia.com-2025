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
    <div class="TopBar__links">
      <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="TopBar__link neon-text-blue neon-text-blue-glow"
        active-class="TopBar__link--active"
      >
        {{ link.name }}</NuxtLink
      >
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
const { visualDataBySection } = storeToRefs(useUiStore());

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

.TopBar {
  @apply fixed top-0 z-50 flex w-full justify-between p-1 brightness-200 md:p-5;

  &__code {
    @include corner-effect;
    @apply h-auto w-[150px] border-y border-y-stone-500/10 bg-black/90 px-10 px-2 pb-1 font-lucania text-lg text-primary backdrop-blur-lg;

    &-info {
      span {
        @apply ml-auto;
      }
    }
  }

  &__links {
    @apply z-50 hidden items-center justify-center gap-5 md:flex;
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
      @apply rounded-full outline outline-transparent brightness-50;
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
