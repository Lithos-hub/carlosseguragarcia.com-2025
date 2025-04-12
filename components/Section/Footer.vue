<template>
  <footer class="Footer">
    <div class="Footer__left">
      <div class="Footer__developedBy">
        <div class="flex items-center gap-1">
          <div class="square bg-primary" />
          <label class="Footer__developedBy-label">
            Developed and designed by
          </label>
        </div>
        <span class="Footer__developedBy-name">Carlos Segura García</span>
      </div>
    </div>

    <div class="Footer__center">
      <div class="Footer__content">
        <p class="Footer__title">
          Made with ❤️ and
          <strong class="font-bold text-green-500">Nuxt</strong>
        </p>
        <div class="Footer__socials">
          <a href="https://github.com/Lithos-hub" class="Footer__social">
            <UIcon name="i-mdi-github" size="20" />
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-segura-garcia/"
            class="Footer__social"
          >
            <UIcon name="i-mdi-linkedin" size="20" />
          </a>
        </div>
      </div>
    </div>

    <div class="Footer__right">
      <div class="Footer__location">
        <div class="flex items-center gap-1">
          <div class="square bg-primary" />
          <label class="Footer__location-label"> Location </label>
        </div>
        <span class="Footer__location-location">Málaga - Spain</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.Footer {
  @apply flex h-full w-full justify-between bg-black;

  &__left,
  &__right {
    @apply flex h-full w-[50vw] items-center bg-black p-2 lg:w-[10vw];
  }

  &__right {
    @apply justify-end;
  }

  &__center {
    @apply flex h-auto w-full max-w-[80vw] items-center justify-center border-x border-secondary;
  }

  &__content {
    @apply flex h-[49px] items-center justify-between gap-10;
  }

  &__title {
    @apply text-center font-exo text-sm text-white;
  }

  &__socials {
    @apply flex items-center justify-center gap-5;
  }

  &__social :deep(*) {
    @apply text-white;
  }

  &__location,
  &__developedBy {
    @apply flex flex-col items-start justify-center font-lucania text-xs;

    &-label {
      @apply font-lucania text-[9px] text-primary;
    }

    &-name,
    &-location {
      @apply font-exo text-[11px] text-secondary;
    }
  }

  &__location {
    @apply items-end;
  }
}
</style>
