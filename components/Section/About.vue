<template>
  <div class="About__container">
    <div class="About__content">
      <img
        src="/svg/decoration/decoration-6.svg"
        alt="Decoration protocol image"
        class="absolute left-5 top-5 h-[80px]"
      />
      <img
        src="/svg/decoration/decoration-7.svg"
        alt="Decoration protocol image"
        class="absolute bottom-5 right-5 h-[60px]"
      />
      <ComponentName componentName="About.vue" color="secondary" />
      <div class="About__inner-container">
        <img
          src="/svg/decoration/decoration-3.svg"
          alt="Decoration protocol image"
          class="absolute left-0 top-[-40px] h-[30px]"
        />
        <img
          src="/svg/decoration/decoration-4.svg"
          alt="Decoration protocol image"
          class="absolute right-0 top-[-40px] h-[30px]"
        />
        <img
          src="/svg/decoration/decoration-5.svg"
          alt="Decoration protocol image"
          class="absolute bottom-[-20px] right-0 h-[10px]"
        />
        <h1 class="About__title">About me</h1>
        <div class="About__text">
          <p class="About__description">
            I'm a front-end developer with a passion for creating beautiful and
            functional web applications, <br />mainly focused on
            <strong class="vue-gradient-text text-2xl font-bold">VUE</strong>
            ecosystem.
          </p>
          <div class="About__logos">
            <div
              v-for="logo in techLogos"
              :key="logo.alt"
              class="About__logo-container"
            >
              <img :src="logo.src" :alt="logo.alt" class="About__logo-image" />
              <small class="About__logo-name">{{ logo.name }}</small>
            </div>
          </div>
          <p class="About__description">
            Since I was a child, my main vocation has been
            <span class="font-bold text-primary">music</span>. <br /><br />
            In 2020 I discovered the world of
            <span class="font-bold text-primary">programming</span> and the
            enormous possibilities it offers at a creative and professional
            level. <br /><br />
            Since then, I work and keep learning in what has become a new
            passion.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TechLogo {
  src: string;
  alt: string;
  name: string;
}

const techLogos: TechLogo[] = [
  {
    src: "/tech-logos/vue.svg",
    alt: "Vue",
    name: "Vue",
  },
  {
    src: "/tech-logos/nuxt.svg",
    alt: "Nuxt",
    name: "Nuxt",
  },
  {
    src: "/tech-logos/pinia.svg",
    alt: "Pinia",
    name: "Pinia",
  },
  {
    src: "/tech-logos/vite.svg",
    alt: "Vite",
    name: "Vite",
  },
  {
    src: "/tech-logos/typescript.svg",
    alt: "TypeScript",
    name: "TypeScript",
  },
];
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/variables.scss" as *;
@use "@/styles/mixins.scss" as *;
.About {
  &__container {
    @include section-container;
  }

  &__content {
    @include section-content;
  }

  &__inner-container {
    @include inner-container-secondary;
  }

  &__title {
    @include section-title-secondary;
  }

  &__text {
    @apply z-10 flex w-full flex-col items-center justify-center gap-10;
  }

  &__description {
    @apply text-center font-rajdhaniMedium text-lg font-light leading-relaxed text-secondary;
  }

  &__logos {
    @apply flex w-full flex-wrap items-center justify-center gap-5;
  }

  &__logo {
    &-container {
      @apply flex flex-col items-center justify-center gap-2;
    }

    &-image {
      @apply h-10 w-10 object-contain;
    }

    &-name {
      @apply font-exo text-xs font-light text-primary;
    }
  }
}
</style>
