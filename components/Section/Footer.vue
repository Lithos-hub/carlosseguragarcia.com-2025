<template>
  <footer class="Footer">
    <div class="Footer__container">
      <div class="Footer__content">
        <p class="Footer__title">
          Made with ❤️ and <span class="text-green-500">Nuxt</span>
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
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.Footer {
  @apply border-t border-secondary bg-black;

  &__container {
    @apply relative w-full border-x border-secondary p-5 lg:mx-auto lg:max-w-[80vw];
  }

  &__content {
    @apply flex items-center justify-between gap-10;
  }

  &__copyright,
  &__title {
    @apply text-center font-exo text-sm text-white;
  }

  &__socials {
    @apply flex items-center justify-center gap-5;
  }

  &__social :deep(*) {
    @apply text-white;
  }
}
</style>
