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

  &::before {
    content: "";
    @apply absolute top-0 z-0 h-[20px] w-full;
    background-image: url("/img/bg-1.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &::after {
    content: "";
    @apply absolute bottom-0 z-0 h-[20px] w-full;
    background-image: url("/img/bg-1.svg");
    background-size: cover;
    background-position: 50% 60%;
    background-repeat: no-repeat;
  }

  &__inner {
    @apply px-[10vw];
  }

  &__content {
    @include corner-effect;
    @apply p-10 text-center text-xl text-stone-900 dark:text-white;
  }
}
</style>
