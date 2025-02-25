<template>
  <section class="Experience">
    <ComponentName name="Experience" :mountedTime="mountedTime" />
    <!-- <RoutingButton
        to="/hero"
        icon="i-heroicons-chevron-double-up"
        text="scroll up or click here to router.push('/hero')"
        direction="up"
      /> -->
    <ExperienceGallery />
    <!-- <RoutingButton
        to="/projects"
        icon="i-heroicons-chevron-double-down"
        text="scroll down or click here to router.push('/projects')"
        direction="down"
      /> -->
  </section>
</template>

<script setup lang="ts">
const mountedTime = ref(0);
const startTime = ref(performance.now());

onMounted(() => {
  mountedTime.value = Math.round(performance.now() - startTime.value);
});
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;

.Experience {
  @include section-wrapper;
}
</style>
