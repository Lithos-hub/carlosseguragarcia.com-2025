<template>
  <div class="TopBar">
    <div class="TopBar__number">
      <div class="TopBar__number-content">
        {{ visualDataBySection?.number }}
      </div>
    </div>
    <div class="TopBar__dark-mode">
      <ClientOnly>
        <UToggle
          v-model="isDarkMode"
          color="primary"
          size="xl"
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
</script>

<style lang="scss" scoped>
@use "@/styles/main.scss" as *;
@use "@/styles/general.scss" as *;
.TopBar {
  @include colored-line;
  @apply flex w-screen justify-between border-b;

  &__number {
    @include colored-line;
    @apply font-lucania flex h-[50px] w-[100px] flex-col items-center justify-center border-r;
  }

  &__number-content {
    @include primary-gradient-text;
    @apply text-xl;
  }

  &__dark-mode {
    @include colored-line;
    @apply flex h-[50px] w-[100px] flex-col items-center justify-center border-l;
  }
}
</style>
