<template>
  <div class="Portfolio__container" id="Portfolio">
    <div class="Portfolio__content">
      <ComponentName componentName="Portfolio.vue" color="primary" />
      <div class="Portfolio__inner-container">
        <img
          src="/svg/decoration/decoration-21.svg"
          alt="Decoration protocol image"
          class="absolute left-0 top-[-100px] h-[70px]"
        />

        <h1 class="Portfolio__title">Portfolio</h1>
        <div class="Portfolio__grid">
          <article
            v-for="project in PORTFOLIO_PROJECTS"
            :key="`portfolio-${project.id}`"
            class="Portfolio__card"
          >
            <div class="Portfolio__card-image-container">
              <img
                :src="project.image"
                :alt="project.title"
                class="Portfolio__card-image"
              />
            </div>
            <div class="Portfolio__card-content">
              <p class="Portfolio__card-prev-title">{{ project.prevTitle }}</p>
              <h3 class="Portfolio__card-title">{{ project.title }}</h3>
              <p class="Portfolio__card-description">
                {{ project.description }}
              </p>

              <div class="Portfolio__card-stack">
                <div
                  v-for="tech in project.stack"
                  :key="tech.techName"
                  class="Portfolio__stack-item"
                  :title="tech.techName"
                >
                  <img
                    :src="tech.imageUrl"
                    :alt="tech.techName"
                    class="Portfolio__stack-icon"
                  />
                </div>
              </div>

              <div class="Portfolio__card-buttons">
                <BaseButton variant="primary" size="sm">
                  <a
                    :href="project.repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="Portfolio__button-link"
                  >
                    <Icon
                      name="grommet-icons:github"
                      size="16"
                      class="text-primary"
                    />
                    Repository
                  </a>
                </BaseButton>
                <BaseButton v-if="project.href" variant="secondary" size="sm">
                  <a
                    :href="project.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="Portfolio__button-link"
                  >
                    <Icon
                      name="uil:external-link-alt"
                      size="16"
                      class="text-secondary"
                    />
                    Live Demo
                  </a>
                </BaseButton>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PORTFOLIO_PROJECTS } from "~/consts/portfolio";
</script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
@use "@/styles/fonts.scss" as *;
@use "@/styles/variables.scss" as *;
@use "@/styles/mixins.scss" as *;

.Portfolio {
  &__container {
    @include section-container;
  }

  &__content {
    @include section-content-primary;
  }

  &__inner-container {
    @include inner-container-primary;
  }

  &__title {
    @include section-title-primary;
  }

  &__grid {
    @apply grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3;
  }

  &__card {
    @include corner-effect;
    @apply relative flex flex-col overflow-hidden bg-black/60 backdrop-blur-sm transition-all duration-300 hover:bg-black/80 hover:shadow-lg hover:shadow-secondarySoft/50;
  }

  &__card-image-container {
    @apply relative h-48 w-full overflow-hidden;
  }

  &__card-image {
    @apply h-full w-full object-cover transition-transform duration-300 hover:scale-110;
  }

  &__card-content {
    @apply flex flex-1 flex-col gap-3 p-5;
  }

  &__card-prev-title {
    @apply font-orbitron text-xs font-bold uppercase tracking-wider text-secondary;
  }

  &__card-title {
    @apply font-rajdhaniSemiBold text-lg font-bold text-white;
  }

  &__card-description {
    @apply font-rajdhaniMedium text-sm leading-relaxed text-gray-300;
  }

  &__card-stack {
    @apply flex flex-wrap gap-2;
  }

  &__stack-item {
    @apply flex items-center justify-center rounded bg-stone-900/50 p-2 transition-all hover:scale-110 hover:bg-stone-800/70;
  }

  &__stack-icon {
    @apply h-5 w-5 object-contain;
  }

  &__card-buttons {
    @apply m-2 mt-auto flex w-full items-center justify-center gap-3;
  }

  &__button-link {
    @apply flex items-center gap-2 text-inherit no-underline;
  }

  &__button-icon {
    @apply h-4 w-4 object-contain;
  }
}
</style>
