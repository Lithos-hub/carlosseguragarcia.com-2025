<template>
  <Teleport to="body">
    <TransitionGroup name="blur">
      <div v-if="isRadialMenuVisible" class="overlay" />
      <div v-if="isRadialMenuVisible">
        <div class="RadialMenu">
          <h2 class="RadialMenu__title">Menu</h2>
          <!-- Full -->
          <!-- <div class="absolute z-20 opacity-50 hue-rotate-180">
            <img src="/svg/radial-menu-full.svg" alt="radial-menu-full" />
          </div> -->
          <div class="RadialMenu__container opacity-100">
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
            <!-- <div class="RadialMenu__connections">
              <img
                src="/svg/radial-menu-connections.svg"
                alt="radial-menu-connections"
              />
            </div> -->
            <div class="RadialMenu__connections">
              <!-- Center -->
              <img
                class="RadialMenu__connections--center"
                src="/svg/radial-menu-connections-center.svg"
                alt="radial-menu-connections-center"
              />
              <!-- Center Chip -->
              <img
                class="RadialMenu__connections--center-chip"
                src="/svg/radial-menu-connections-center-chip.svg"
                alt="radial-menu-connections-center-chip"
              />

              <!-- Top Right -->
              <img
                class="RadialMenu__connections--top-right"
                src="/svg/radial-menu-connections-top-right.svg"
                alt="radial-menu-connections-top-right"
              />

              <!-- Top -->
              <img
                class="RadialMenu__connections--top"
                src="/svg/radial-menu-connections-top.svg"
                alt="radial-menu-connections-top"
              />

              <!-- Top Left -->
              <img
                class="RadialMenu__connections--top-left"
                src="/svg/radial-menu-connections-top-left.svg"
                alt="radial-menu-connections-top-left"
              />

              <!-- Bottom Left -->
              <img
                class="RadialMenu__connections--bottom-left"
                src="/svg/radial-menu-connections-bottom-left.svg"
                alt="radial-menu-connections-bottom-left"
              />

              <!-- Bottom -->
              <img
                class="RadialMenu__connections--bottom"
                src="/svg/radial-menu-connections-bottom.svg"
                alt="radial-menu-connections-bottom"
              />

              <!-- Bottom Right -->
              <img
                class="RadialMenu__connections--bottom-right"
                src="/svg/radial-menu-connections-bottom-right.svg"
                alt="radial-menu-connections-bottom-right"
              />
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </Teleport>
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
.overlay {
  @apply fixed inset-0 z-40 h-full w-full bg-gradient-to-b from-black to-stone-800/80 backdrop-blur-xl transition-all;
}

.RadialMenu {
  @apply fixed left-1/2 top-1/2 z-50 h-full w-full -translate-x-1/2 -translate-y-1/2;
  $radial-menu-size: 250px;

  // Desktop variables
  width: $radial-menu-size * 2.5;
  height: $radial-menu-size * 2.5;

  // Mobile variables
  @media (max-width: 768px) {
    width: $radial-menu-size * 1.58;
    height: $radial-menu-size * 2;
  }

  &__wrapper {
    @apply relative inset-0 z-50 h-screen w-screen overflow-hidden;
  }

  &__title {
    @apply fixed left-5 top-5 z-50 font-exo text-xs text-secondarySoft md:text-4xl;
  }

  &__container {
    @apply relative left-1/2 top-1/2 z-50 h-full w-full -translate-x-1/2 -translate-y-1/2;
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
    }

    // Título común para todos los elementos
    &-title {
      @apply absolute left-1/2 z-40 w-full -translate-x-1/2 text-center font-lucania text-xs text-secondarySoft md:text-lg;
    }

    // Posicionamiento específico para cada elemento
    &--top-left {
      @apply absolute left-0 top-[90px] md:left-1 md:top-[57px];

      .RadialMenu__item-title {
        @apply top-1/2 z-40 -translate-y-1/2 -rotate-45;
      }

      &:hover {
        & ~ .RadialMenu__connections .RadialMenu__connections--top-left {
          @apply transition-all;

          filter: brightness(2) hue-rotate(180deg);
        }
      }
    }

    &--top {
      @apply absolute left-1/2 top-[20px] -translate-x-1/2 md:top-[60px] md:-translate-y-1/2;

      .RadialMenu__item-title {
        @apply top-[60px] md:top-[100px];
      }

      &:hover {
        & ~ .RadialMenu__connections .RadialMenu__connections--top {
          @apply transition-all;

          filter: brightness(2) hue-rotate(180deg);
        }
      }
    }

    &--top-right {
      @apply absolute right-0 top-[90px] md:right-1 md:top-[57px];

      .RadialMenu__item-title {
        @apply top-1/2 z-40 -translate-y-1/2 rotate-45;
      }

      &:hover {
        & ~ .RadialMenu__connections .RadialMenu__connections--top-right {
          @apply transition-all;

          filter: brightness(2) hue-rotate(180deg);
        }
      }
    }

    &--bottom-left {
      @apply absolute bottom-[90px] left-1 md:bottom-[80px];

      .RadialMenu__item-title {
        @apply top-1/2 z-40 -translate-y-1/2 rotate-45;
      }

      &:hover {
        & ~ .RadialMenu__connections .RadialMenu__connections--bottom-left {
          @apply transition-all;

          filter: brightness(2) hue-rotate(180deg);
        }
      }
    }

    &--bottom {
      @apply absolute bottom-[20px] left-1/2 -translate-x-1/2 md:-bottom-[160px] md:-translate-y-1/2;

      .RadialMenu__item-title {
        @apply top-[60px] md:top-[100px];
      }

      &:hover {
        & ~ .RadialMenu__connections .RadialMenu__connections--bottom {
          @apply transition-all;

          filter: brightness(2) hue-rotate(180deg);
        }
      }
    }

    &--bottom-right {
      @apply absolute bottom-[90px] right-1 md:bottom-[80px];

      .RadialMenu__item-title {
        @apply top-1/2 -translate-y-1/2 -rotate-45;
      }

      &:hover {
        & ~ .RadialMenu__connections .RadialMenu__connections--center-chip,
        & ~ .RadialMenu__connections .RadialMenu__connections--bottom-right {
          @apply transition-all;

          filter: hue-rotate(180deg);
        }
      }
    }
  }

  &__connections {
    @apply absolute left-1/2 top-1/2 z-40 flex -translate-x-1/2 -translate-y-1/2;

    // Desktop variables
    width: $radial-menu-size + 140px;
    height: $radial-menu-size + 140px;

    // Mobile variables
    @media (max-width: 768px) {
      width: $radial-menu-size;
      height: $radial-menu-size;
    }

    img {
      @apply absolute;
    }

    &--center {
      @apply left-1/2 top-[calc(50%-10px)] z-20 -translate-x-1/2 -translate-y-1/2;

      width: $radial-menu-size - 55px;
      height: $radial-menu-size - 55px;
    }

    &--center-chip {
      @apply left-1/2 top-[calc(50%-10px)] z-20 z-50 -translate-x-1/2 -translate-y-1/2;

      width: $radial-menu-size - 190px;
      height: $radial-menu-size - 190px;
    }

    &--top-left {
      @apply left-[5px] top-[55px];

      width: $radial-menu-size - 90px;
      height: $radial-menu-size - 90px;
    }

    &--top {
      @apply left-[120px] top-[-5px] z-20;

      width: $radial-menu-size - 80px;
      height: $radial-menu-size - 80px;
    }

    &--top-right {
      @apply right-[22px] top-[30px] z-20;

      width: $radial-menu-size - 100px;
      height: $radial-menu-size - 100px;
    }

    &--bottom-left {
      @apply bottom-[90px] left-[15px];

      width: $radial-menu-size - 100px;
      height: $radial-menu-size - 100px;
    }

    &--bottom {
      @apply bottom-[25px] left-[117px] z-50;

      width: $radial-menu-size - 100px;
      height: $radial-menu-size - 100px;
    }

    &--bottom-right {
      @apply bottom-[65px] right-[0px] z-10;

      width: $radial-menu-size - 70px;
      height: $radial-menu-size - 70px;
    }
  }
}

// Blur transition
.blur-enter-active,
.blur-leave-active {
  transition: all 0.3s;
}

.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(5rem);
}
</style>
