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
  @apply flex h-[42px] w-screen border-b;

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
    @apply flex w-full items-center justify-evenly px-2 lg:px-10;
  }

  &__link {
    @include primary-gradient-text;
    @apply font-jetbrainsMono text-xs;
  }

  &__link--active {
    @apply text-primary underline underline-offset-[15px] dark:text-white;

    text-decoration-thickness: 2px;
  }
}
</style>
