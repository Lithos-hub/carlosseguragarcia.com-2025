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
    <div class="TopBar__dark-mode">
      <div class="flex flex-col">
        <div class="flex items-center justify-between">
          <span class="info-text"
            >{{ colorMode.value === "dark" ? "Dark mode on" : "Light mode on" }}
          </span>
          <div class="triangle-shape-top-right bg-primary" />
        </div>
        <ClientOnly>
          <div class="flex items-center justify-between">
            <UToggle
              v-model="isDarkMode"
              color="primary"
              size="sm"
              on-icon="i-heroicons-moon"
              off-icon="i-heroicons-sun"
            />
            <div class="triangle-shape-top-right bg-primary" />
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { visualDataBySection } = storeToRefs(useUiStore());

const colorMode = useColorMode();
const isDarkMode = ref(colorMode.value === "dark");

watch(isDarkMode, (newVal) => {
  colorMode.preference = newVal ? "dark" : "light";
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
</script>

<style lang="scss" scoped>
@use "@/styles/main.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/fonts.scss" as *;

.TopBar {
  @apply fixed top-0 z-50 flex w-full justify-between p-1 brightness-200 md:p-5;

  &__code {
    @include corner-effect;
    @apply h-auto w-[150px] border-y border-y-stone-500/10 px-10 px-2 pb-1 font-lucania text-lg text-stone-800 backdrop-blur dark:text-primary;

    &-info {
      span {
        @apply ml-auto;
      }
    }
  }

  &__links {
    @apply hidden items-center justify-center gap-5 md:flex;
  }

  &__link {
    @include corner-effect;
    @apply relative py-2 font-jetbrainsMono text-[12px] md:px-5 lg:px-10;

    &:hover {
      @include corner-effect-secondary;
      @apply bg-black text-secondary transition-all duration-300;
      background-size: 100% 100%;
      text-shadow: 0 0 0px;
    }
  }

  &__dark-mode {
    @include corner-effect;
    @apply h-auto w-[150px] border-y border-y-stone-500/10 px-10 px-2 pb-1 font-lucania text-lg text-stone-900 backdrop-blur dark:text-primary;

    :deep(button) {
      @apply dark:bg-primary-500 bg-stone-500;
    }

    :deep(.iconify) {
      @apply text-stone-950 dark:text-white;
    }
  }

  &__link-zone {
    @apply absolute -bottom-7 left-1/2 -translate-x-1/2 font-lucania text-[8px] text-stone-800 dark:text-primary;
  }
}
</style>
