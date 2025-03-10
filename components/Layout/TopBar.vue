<template>
  <div class="TopBar">
    <div class="TopBar__code">
      <div class="flex flex-col">
        <div class="flex items-center justify-between">
          <div class="triangle-shape-top-left" />
          <span class="info-text"
            >{{ visualDataBySection?.componentName }}
          </span>
        </div>
        <div class="flex items-center justify-between">
          <div class="triangle-shape-top-left" />
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
          <div class="triangle-shape-top-right" />
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
            <div class="triangle-shape-top-right" />
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
    path: "/",
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
  @apply fixed top-0 z-50 flex w-full justify-between p-5;

  &__code {
    @include font-lucania;
    @include corner-effect;
    @apply dark:text-primary h-auto w-[150px] border-y border-y-stone-500/10 px-10 px-2 pb-1 text-lg text-stone-800 backdrop-blur;

    &-info {
      span {
        @apply ml-auto;
      }
    }
  }

  &__links {
    @apply hidden w-auto items-center justify-center gap-5 border-y border-y-stone-500/10 p-2 backdrop-blur md:flex;
  }

  &__link {
    @include corner-effect;
    @apply font-jetbrainsMono relative py-2 text-[12px] md:px-5 lg:px-10;

    &:hover {
      @apply text-primary bg-stone-900 brightness-200 transition-all duration-300 dark:bg-stone-500/10 dark:text-cyan-500 dark:shadow-[0_0_10px_#00eaff7d];
      background-size: 100% 100%;
    }
  }

  &__dark-mode {
    @include corner-effect;
    @include font-lucania;
    @apply dark:text-primary h-auto w-[150px] border-y border-y-stone-500/10 px-10 px-2 pb-1 text-lg text-stone-900 backdrop-blur;

    :deep(button) {
      @apply dark:bg-primary-500 bg-stone-500;
    }

    :deep(.iconify) {
      @apply text-stone-950 dark:text-white;
    }
  }

  &__link-zone {
    @include font-lucania;
    @apply dark:text-primary absolute -bottom-7 left-1/2 -translate-x-1/2 text-[8px] text-stone-800;
  }
}
</style>
