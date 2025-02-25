<template>
  <div class="TopBar">
    <div class="TopBar__number">
      {{ visualDataBySection?.number }}
    </div>
    <div class="TopBar__links">
      <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="TopBar__link"
        active-class="TopBar__link--active"
      >
        {{ link.name }}</NuxtLink
      >
    </div>
    <div class="TopBar__dark-mode">
      <ClientOnly>
        <UToggle
          v-model="isDarkMode"
          color="primary"
          on-icon="i-heroicons-moon"
          off-icon="i-heroicons-sun"
        />
      </ClientOnly>
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
    name: "Hero",
    path: "/hero",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "CV",
    path: "/cv",
  },
];
</script>

<style lang="scss" scoped>
@use "@/styles/main.scss" as *;
@use "@/styles/general.scss" as *;
.TopBar {
  @include colored-line;
  @apply flex h-[42px] justify-between w-screen border-b;

  &__number {
    @include colored-line;
    @include primary-gradient-text;
    @apply font-lucania flex min-w-[80px] flex-col items-center justify-center border-r pb-1 text-lg;
  }

  &__dark-mode {
    @include colored-line;
    @apply flex h-[42px] min-w-[80px] flex-col items-center justify-center border-l;
  }

  &__links {
    @apply md:flex hidden;
  }

  &__link {
    @include colored-line;
    @apply font-jetbrainsMono text-xs px-2 min-w-[150px] h-full border-x flex items-center justify-center;
  }

  &__link--active {
    @apply text-primary border-b-4 border-primary w-full dark:text-white transition-all bg-stone-800 dark:bg-stone-100/10;
  }
}
</style>
