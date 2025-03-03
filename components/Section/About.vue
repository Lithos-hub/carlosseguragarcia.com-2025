<template>
  <div class="About">
    <div class="About__inner">
      <ComponentName
        :name="visualDataBySection.componentName"
        :mounted-time="mountedTimes[visibleSection]"
      />
      <div class="About__content">
        {{ DEV_INFO.aboutDescription }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DEV_INFO } from "~/consts/devInfo";

const startTime = ref(performance.now());

const { mountedTimes, visibleSection, visualDataBySection } =
  storeToRefs(useUiStore());

onMounted(() => {
  mountedTimes.value.about = Math.round(performance.now() - startTime.value);
});
</script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
.About {
  @apply relative flex h-screen w-full flex-col items-center justify-center;

  &__inner {
    @apply px-[10vw];
  }

  &__content {
    @include corner-effect;
    @apply p-10 text-center text-xl text-stone-900 dark:text-white;
  }
}
</style>
