<template>
  <section class="DefaultLayout">
    <LeftColumn />
    <!-- HERO SECTION -->
    <div class="flex-1">
      <slot />
    </div>
    <RightColumn />
  </section>
</template>

<style lang="scss" scoped>
.DefaultLayout {
  @apply relative flex h-screen w-full;
}
</style>
