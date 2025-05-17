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
          <div class="About__photo-wrapper">
            <img
              src="/foto-cv.jpg"
              alt="Developer photo"
              class="About__photo-image"
            />
            <div class="About__photo-pseudo-border" />
          </div>
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
            Since I was a child, my greatest passion has been
            <span class="font-bold text-primary">music</span>. I worked as a
            composer and producer for several years, with a musical journey
            spanning <span class="font-bold text-primary">19 years</span> - from
            classical conservatory to modern music schools, Jazz studies, and
            ultimately earning a degree in
            <span class="font-bold text-primary"
              >Music History, Science, and Music Technology</span
            >. However, faced with limited career opportunities in Spain, I
            decided to explore a different path. <br /><br />
            During my final year of studies, I discovered the world of
            <span class="font-bold text-primary">web development</span>, which
            eventually evolved into both my primary profession and cherished
            hobby. <br /><br />
            Throughout these years, I've not only worked with various companies
            on exciting projects but have also delved deep into multiple
            technologies. My curiosity has led me beyond just web and frontend
            development, exploring areas like
            <span class="font-bold text-primary">backend</span>,
            <span class="font-bold text-primary">UX/UI design</span>, and
            <span class="font-bold text-primary">cybersecurity</span>.
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
    @include section-content-secondary;
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
    @apply text-center font-rajdhaniSemiBold text-xl leading-relaxed text-secondary;
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

  &__photo {
    &-wrapper {
      @apply relative h-40 w-40;
    }

    &-image {
      @apply absolute inset-0 z-10 h-full w-full object-cover;
      clip-path: polygon(
        0 0,
        80% 0,
        100% 20%,
        100% 70%,
        100% 100%,
        20% 100%,
        0 80%,
        0% 30%
      );
    }

    &-pseudo-border {
      @apply absolute inset-0 left-[-2.5px] top-[-2.5px] z-0 h-[calc(100%+5px)] w-[calc(100%+5px)];
      background: $secondary;
      clip-path: polygon(
        0 0,
        80% 0,
        100% 20%,
        100% 70%,
        100% 100%,
        20% 100%,
        0 80%,
        0% 30%
      );
    }
  }
}
</style>
