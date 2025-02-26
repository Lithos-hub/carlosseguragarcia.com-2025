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
        :class="[`TopBar__link--${link.name}`]"
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
  @apply sticky top-0 z-50 flex h-[42px] w-full justify-between backdrop-blur;

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
    @apply hidden md:flex md:gap-5;

    &:first-child {
    }
  }

  &__link {
    @include colored-line;
    @apply font-jetbrainsMono relative m-2 box-border flex h-full min-w-[150px] items-center justify-center border-x px-2 text-xs;
    clip-path: polygon(
      15% 0,
      100% 0,
      100% 70%,
      85% 100%,
      0 100%,
      0% 60%,
      0 30%
    );

    $linkNames: Hero, Experience, Projects, CV;

    // Randomize the clip path for each link
    @each $linkName in $linkNames {
      &--#{$linkName} {
      }
    }

    &::before {
      content: "";
      @apply absolute inset-0 border border-stone-500;
      clip-path: polygon(
        20% 0%,
        80% 0%,
        100% 20%,
        100% 80%,
        80% 100%,
        20% 100%,
        0% 80%,
        0% 20%
      );
    }
  }

  &__link--active {
    @apply text-primary border-primary w-full border-y-2 font-bold transition-all dark:bg-stone-100/10 dark:text-white;

    &::before {
      content: "";
      @apply border-primary-500 absolute inset-0;
      clip-path: polygon(
        20% 0%,
        80% 0%,
        100% 20%,
        100% 80%,
        80% 100%,
        20% 100%,
        0% 80%,
        0% 20%
      );
    }
  }
}
</style>
