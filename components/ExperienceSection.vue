<template>
  <section class="ExperienceSection">
    <NuxtLink to="/hero">
      <div class="ExperienceSection__button-container">
        <small class="font-jetbrainsMono text-xs text-stone-700/50">
          scroll up or click to router.push("/hero")
        </small>
        <img
          src="/icons/chevron-up.svg"
          alt="Arrow up"
          class="ExperienceSection__button-image"
        />
      </div>
    </NuxtLink>

    <div class="ExperienceSection__content">
      <h1>Experience</h1>
    </div>

    <NuxtLink to="/projects">
      <div class="ExperienceSection__button-container">
        <small class="font-jetbrainsMono text-xs text-stone-700/50">
          scroll down or click to router.push("/projects")
        </small>
        <img
          src="/icons/chevron-down.svg"
          alt="Arrow down"
          class="ExperienceSection__button-image"
        />
      </div>
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
.ExperienceSection {
  @apply relative flex flex-col gap-5 justify-center items-center h-screen;

  &__content {
    @apply flex flex-col gap-5 px-5 justify-center items-center grow;
  }

  &__button-container {
    @apply flex flex-col items-center h-[100px] justify-center gap-2.5;
  }

  &__button-image {
    @apply w-5 h-5 object-contain animate-bounce opacity-50;
  }
}
</style>
