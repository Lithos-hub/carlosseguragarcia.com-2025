<template>
  <section class="Experience">
    <div class="Experience__content">
      <NuxtLink to="/projects">
        <div class="Experience__button-container">
          <UIcon
            name="i-heroicons-chevron-double-up"
            class="Experience__button-image"
          />
          <small class="font-jetbrainsMono text-xs text-stone-700/50">
            scroll down or click here to router.push("/hero")
          </small>
        </div>
      </NuxtLink>
      <div>Experience</div>
      <NuxtLink to="/projects">
        <div class="Experience__button-container">
          <small class="font-jetbrainsMono text-xs text-stone-700/50">
            scroll down or click here to router.push("/projects")
          </small>
          <UIcon
            name="i-heroicons-chevron-double-down"
            class="Experience__button-image"
          />
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;

.Experience {
  @apply relative flex h-full flex-col items-center justify-center gap-5;

  &__content {
    @apply flex flex-col items-center justify-center gap-5 px-5;
  }

  &__button-container {
    @apply flex h-[100px] flex-col items-center justify-center gap-2.5;
  }

  &__button-image {
    @apply h-5 w-5 animate-bounce object-contain opacity-50;
  }
}
</style>
