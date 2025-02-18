<template>
  <section class="Experience">
    <ClientOnly>
      <ComponentName name="Experience" :mountedTime="mountedTime" />
    </ClientOnly>
    <div class="Experience__content">
      <RoutingButton
        to="/hero"
        icon="i-heroicons-chevron-double-up"
        text="scroll down or click here to router.push('/hero')"
        direction="up"
      />
      <div>Experience</div>
      <RoutingButton
        to="/projects"
        icon="i-heroicons-chevron-double-down"
        text="scroll down or click here to router.push('/projects')"
        direction="down"
      />
    </div>
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

  &__content {
    @apply flex flex-col items-center justify-center gap-5 px-5;
  }
}
</style>
