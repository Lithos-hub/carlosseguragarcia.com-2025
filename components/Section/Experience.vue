<template>
  <div class="Experience">
    <ComponentName
      :name="visualDataBySection.componentName"
      :mounted-time="mountedTimes[visibleSection]"
    />
    <ExperienceGallery />
  </div>
</template>

<script setup lang="ts">
const startTime = ref(performance.now());

const { mountedTimes, visibleSection, visualDataBySection } =
  storeToRefs(useUiStore());

onMounted(() => {
  mountedTimes.value.experience = Math.round(
    performance.now() - startTime.value,
  );
});
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
</style>

<style lang="scss">
.Experience {
  @apply flex h-full flex-col items-center justify-center;
}
</style>
