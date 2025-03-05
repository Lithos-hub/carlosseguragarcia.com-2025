<template>
  <div class="TopBar">
    <div class="TopBar__code">
      {{ visualDataBySection?.code }}
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
          class="dark-mode-toggle"
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
.TopBar {
  @apply fixed top-0 z-50 flex w-full justify-between p-5;

  &__code {
    @include corner-effect;
    @apply font-lucania dark:text-primary flex w-[80px] flex-col items-center justify-center border-y border-y-stone-500/10 pb-1 text-lg text-stone-800 backdrop-blur;
  }

  &__links {
    @include corner-effect;
    @apply hidden w-auto items-center justify-center gap-5 border-y border-y-stone-500/10 p-2 backdrop-blur md:flex;
  }

  &__link {
    @include corner-effect;
    @apply font-jetbrainsMono dark:text-primary relative py-2 text-[12px] text-stone-800 md:px-5 lg:px-10;

    &:hover {
      @apply text-primary bg-stone-900 brightness-200 transition-all duration-300 dark:bg-stone-500/10 dark:text-cyan-500 dark:shadow-[0_0_10px_#00eaff7d];
      background-size: 100% 100%;
    }
  }

  &__dark-mode {
    @include corner-effect;
    @apply flex w-[80px] flex-col items-center justify-center border-y border-y-stone-500/10 p-2 backdrop-blur;

    :deep(button) {
      @apply dark:bg-primary-500 bg-stone-500;
    }

    :deep(.iconify) {
      @apply text-stone-950 dark:text-white;
    }
  }

  &__link-zone {
    @apply font-lucania dark:text-primary absolute -bottom-7 left-1/2 -translate-x-1/2 text-[8px] text-stone-800;
  }
}
</style>
