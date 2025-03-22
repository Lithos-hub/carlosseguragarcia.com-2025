<template>
  <div class="RadialMenu__overlay" />
  <div class="RadialMenu">
    <div class="RadialMenu__container">
      <button
        v-for="(item, index) in radialMenuItems"
        :key="index"
        :class="['RadialMenu__item', item.class]"
        @click="handleItemClick(item)"
      >
        <h2 :class="`RadialMenu__item-title`">{{ item.title }}</h2>
        <img :src="item.svgPath" :alt="item.alt" />
      </button>

      <!-- Connections -->
      <div class="RadialMenu__connections">
        <img
          src="/svg/radial-menu-connections.svg"
          alt="radial-menu-connections"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface RadialMenuItem {
  title: string;
  svgPath: string;
  alt: string;
  to: string;
  class: string;
}

const router = useRouter();
const { isRadialMenuVisible } = storeToRefs(useUiStore());

const radialMenuItems: RadialMenuItem[] = [
  {
    title: "Home",
    svgPath: "/svg/radial-menu-top-left.svg",
    alt: "Radial Menu - Home",
    to: "/home",
    class: "RadialMenu__item--top-left",
  },
  {
    title: "About",
    svgPath: "/svg/radial-menu-top.svg",
    alt: "Radial Menu - About",
    to: "/about",
    class: "RadialMenu__item--top",
  },
  {
    title: "Experience",
    svgPath: "/svg/radial-menu-top-right.svg",
    alt: "Radial Menu - Experience",
    to: "/experience",
    class: "RadialMenu__item--top-right",
  },
  {
    title: "Projects",
    svgPath: "/svg/radial-menu-bottom-left.svg",
    alt: "Radial Menu - Projects",
    to: "/projects",
    class: "RadialMenu__item--bottom-left",
  },
  {
    title: "Download CV",
    svgPath: "/svg/radial-menu-bottom.svg",
    alt: "Radial Menu - Download CV",
    to: "/cv",
    class: "RadialMenu__item--bottom",
  },
  {
    title: "Contact",
    svgPath: "/svg/radial-menu-bottom-right.svg",
    alt: "Radial Menu - Contact",
    to: "/contact",
    class: "RadialMenu__item--bottom-right",
  },
];

const handleItemClick = (item: RadialMenuItem) => {
  router.push(item.to);
  isRadialMenuVisible.value = false;
};
</script>

<style lang="scss" scoped>
.RadialMenu {
  @apply fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2;

  $radial-menu-size: 250px;

  // Desktop variables
  width: $radial-menu-size * 2.5;
  height: $radial-menu-size * 2.5;

  // Mobile variables
  @media (max-width: 768px) {
    width: $radial-menu-size * 1.58;
    height: $radial-menu-size * 2;
  }

  &__overlay {
    @apply absolute inset-0 z-40 bg-black/50 backdrop-blur;
  }

  &__container {
    @apply relative h-full w-full;
  }

  &__item {
    @apply z-50 transition-all;

    // Desktop variables
    width: $radial-menu-size - 10px;
    height: $radial-menu-size - 10px;

    // Mobile variables
    @media (max-width: 768px) {
      width: $radial-menu-size - 100px;
      height: $radial-menu-size - 100px;
    }

    &:hover {
      @apply cursor-pointer;

      filter: brightness(2) hue-rotate(180deg)
        drop-shadow(0 0 1px rgba(0, 255, 225, 0.5))
        drop-shadow(0 0 3px rgba(0, 255, 225, 0.5))
        drop-shadow(0 0 6px rgba(0, 255, 225, 0.5));

      & ~ .RadialMenu__connections {
        @apply transition-all;

        filter: brightness(2) hue-rotate(180deg);
      }
    }

    // Título común para todos los elementos
    &-title {
      @apply absolute left-1/2 z-40 w-full -translate-x-1/2 text-center font-lucania text-xs text-secondarySoft md:text-lg;
    }

    // Posicionamiento específico para cada elemento
    &--top-left {
      @apply absolute left-0 top-[100px] md:left-0 md:top-[70px];

      .RadialMenu__item-title {
        @apply top-1/2 z-40 -translate-y-1/2 -rotate-45;
      }
    }

    &--top {
      @apply absolute left-1/2 top-[20px] -translate-x-1/2 md:top-[60px] md:-translate-y-1/2;

      .RadialMenu__item-title {
        @apply top-[60px] md:top-[100px];
      }
    }

    &--top-right {
      @apply absolute right-0 top-[100px] md:top-[70px];

      .RadialMenu__item-title {
        @apply top-1/2 z-40 -translate-y-1/2 rotate-45;
      }
    }

    &--bottom-left {
      @apply absolute bottom-[100px] left-0 md:bottom-[70px];

      .RadialMenu__item-title {
        @apply top-1/2 z-40 -translate-y-1/2 rotate-45;
      }
    }

    &--bottom {
      @apply absolute bottom-[20px] left-1/2 -translate-x-1/2 md:-bottom-[180px] md:-translate-y-1/2;

      .RadialMenu__item-title {
        @apply top-[60px] md:top-[100px];
      }
    }

    &--bottom-right {
      @apply absolute bottom-[100px] right-0 md:bottom-[70px];

      .RadialMenu__item-title {
        @apply top-1/2 -translate-y-1/2 -rotate-45;
      }
    }
  }

  &__connections {
    @apply absolute left-1/2 top-1/2 z-40 flex -translate-x-1/2 -translate-y-1/2;

    // Desktop variables
    width: $radial-menu-size + 150px;
    height: $radial-menu-size + 150px;

    // Mobile variables
    @media (max-width: 768px) {
      width: $radial-menu-size;
      height: $radial-menu-size;
    }
  }
}
</style>
