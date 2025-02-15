<template>
  <section class="grid grid-cols-12 h-screen">
    <div class="col-span-1 border-r border-stone-500/50">
      <div class="Section__number">00</div>
    </div>
    <HomeHero class="col-span-10" />
    <div class="col-span-1 border-l border-stone-500/50">
      <div class="Section__socialNetworks">
        <a
          href="https://www.linkedin.com/in/carlos-segura-garcia"
          target="_blank"
          ><img src="/icons/linkedin.svg" alt="Linkedin" class="w-5 h-5"
        /></a>
        <a href="https://github.com/lithos-hub" target="_blank"
          ><img src="/icons/github.svg" alt="Github" class="w-5 h-5"
        /></a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/styles/fonts.scss";

.Section {
  &__number {
    @apply font-lucania text-2xl flex flex-col items-center justify-center w-full p-5 border-b border-stone-500/50;
  }

  &__socialNetworks {
    @apply flex flex-col items-center justify-center w-full p-5 gap-5 border-b border-stone-500/50;
  }
}
</style>
