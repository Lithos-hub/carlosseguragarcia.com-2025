<template>
  <Teleport to="body">
    <TransitionGroup name="blur">
      <div v-if="isRadialMenuVisible" class="overlay" />
      <h2 v-if="isRadialMenuVisible" class="RadialMenu__title">Menu</h2>
      <div v-if="isRadialMenuVisible">
        <div class="RadialMenu">
          <!-- Full -->
          <!-- <div class="absolute z-20 opacity-50 hue-rotate-180">
            <img src="/svg/radial-menu/radial-menu-full.svg" alt="radial-menu-full" />
          </div> -->
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
            <!-- <div class="RadialMenu__connections">
              <img
                src="/svg/radial-menu/radial-menu-connections.svg"
                alt="radial-menu-connections"
              />
            </div> -->
            <div class="RadialMenu__connections">
              <!-- Center -->
              <div class="RadialMenu__connections--center">
                <img
                  src="/svg/radial-menu/radial-menu-connections-center.svg"
                  alt="radial-menu-connections-center"
                />
              </div>
              <!-- Center Chip -->
              <div class="RadialMenu__connections--center-chip">
                <img
                  src="/svg/radial-menu/radial-menu-connections-center-chip.svg"
                  alt="radial-menu-connections-center-chip"
                />
              </div>

              <!-- Top Right -->
              <div class="RadialMenu__connections--top-right">
                <img
                  src="/svg/radial-menu/radial-menu-connections-top-right.svg"
                  alt="radial-menu-connections-top-right"
                />
              </div>

              <!-- Top -->
              <div class="RadialMenu__connections--top">
                <img
                  src="/svg/radial-menu/radial-menu-connections-top.svg"
                  alt="radial-menu-connections-top"
                />
              </div>

              <!-- Top Left -->
              <div class="RadialMenu__connections--top-left">
                <img
                  src="/svg/radial-menu/radial-menu-connections-top-left.svg"
                  alt="radial-menu-connections-top-left"
                />
              </div>

              <!-- Bottom Left -->
              <div class="RadialMenu__connections--bottom-left">
                <img
                  src="/svg/radial-menu/radial-menu-connections-bottom-left.svg"
                  alt="radial-menu-connections-bottom-left"
                />
              </div>

              <!-- Bottom -->
              <div class="RadialMenu__connections--bottom">
                <img
                  src="/svg/radial-menu/radial-menu-connections-bottom.svg"
                  alt="radial-menu-connections-bottom"
                />
              </div>

              <!-- Bottom Right -->
              <div class="RadialMenu__connections--bottom-right">
                <img
                  src="/svg/radial-menu/radial-menu-connections-bottom-right.svg"
                  alt="radial-menu-connections-bottom-right"
                />
              </div>
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
const { closeRadialMenu, toggleRadialMenu } = useUiStore();
const { width: windowWidth } = useWindowSize({ initialWidth: 0 });

const getIsMobile = computed(() => {
  return windowWidth.value < 768;
});

const radialMenuItems: RadialMenuItem[] = [
  {
    title: "Home",
    svgPath: "/svg/radial-menu/radial-menu-top-left.svg",
    alt: "Radial Menu - Home",
    to: "/home",
    class: "RadialMenu__item--top-left",
  },
  {
    title: "About",
    svgPath: "/svg/radial-menu/radial-menu-top.svg",
    alt: "Radial Menu - About",
    to: "/about",
    class: "RadialMenu__item--top",
  },
  {
    title: "Experience",
    svgPath: "/svg/radial-menu/radial-menu-top-right.svg",
    alt: "Radial Menu - Experience",
    to: "/experience",
    class: "RadialMenu__item--top-right",
  },
  {
    title: "Projects",
    svgPath: "/svg/radial-menu/radial-menu-bottom-left.svg",
    alt: "Radial Menu - Projects",
    to: "/projects",
    class: "RadialMenu__item--bottom-left",
  },
  {
    title: "Download CV",
    svgPath: "/svg/radial-menu/radial-menu-bottom.svg",
    alt: "Radial Menu - Download CV",
    to: "/cv",
    class: "RadialMenu__item--bottom",
  },
  {
    title: "Contact",
    svgPath: "/svg/radial-menu/radial-menu-bottom-right.svg",
    alt: "Radial Menu - Contact",
    to: "/contact",
    class: "RadialMenu__item--bottom-right",
  },
];

const handleItemClick = (item: RadialMenuItem) => {
  router.push(item.to);
  closeRadialMenu();
};

const listenControlKey = (event: KeyboardEvent) => {
  if (getIsMobile.value) {
    return;
  }

  if (event.key === "Control") {
    toggleRadialMenu();
  }
};

onMounted(() => {
  document.addEventListener("keydown", listenControlKey);
});

onUnmounted(() => {
  document.removeEventListener("keydown", listenControlKey);
});

watch(getIsMobile, (newVal) => {
  if (newVal) {
    closeRadialMenu();
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/colors" as *;

$radial-menu-size: 250px;

.overlay {
  @apply fixed inset-0 z-40 h-full w-full transition-all;

  background-color: $dark2;
  opacity: 1;
  background-size: 25px 25px;
  background-image: radial-gradient(#ef444450 1px, rgba(0, 0, 0, 0.5) 1px);

  &:before {
    content: "";
    @apply fixed inset-0 z-40 h-full w-full bg-gradient-to-br from-secondarySoft/50 via-black/50 to-black/50 transition-all;

    opacity: 0.5;
  }
}

.RadialMenu {
  @apply fixed left-1/2 top-1/2 z-50 h-full w-full -translate-x-1/2 -translate-y-1/2;

  width: $radial-menu-size * 2.5;
  height: $radial-menu-size * 2.5;

  &__wrapper {
    @apply relative inset-0 z-50 h-screen w-screen overflow-hidden;
  }

  &__title {
    @apply fixed left-5 top-5 z-50 text-center font-exo text-xs text-secondarySoft md:text-4xl;
  }

  &__container {
    @apply relative left-1/2 top-1/2 z-50 h-full w-full -translate-x-1/2 -translate-y-1/2;
  }

  &__item {
    @apply z-50 transition-all;

    width: $radial-menu-size - 10px;
    height: $radial-menu-size - 10px;

    &:hover {
      @apply cursor-pointer;
    }

    &-title {
      @apply absolute left-1/2 z-40 w-full -translate-x-1/2 text-center font-lucania text-xs text-secondarySoft md:text-lg;
    }

    &--top-left {
      @apply absolute left-0 top-[90px] md:left-1 md:top-[57px];

      .RadialMenu__item-title {
        @apply top-1/2 z-40 -translate-y-1/2 -rotate-45;
      }

      &:hover {
        &:before {
          content: "";
          @apply absolute inset-0 z-50 h-full w-full;

          background-image: url("/svg/radial-menu/radial-menu-top-left-active.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        & ~ .RadialMenu__connections .RadialMenu__connections--top-left {
          &:before {
            content: "";
            @apply absolute inset-0 z-50 h-full w-full;

            background-image: url("/svg/radial-menu/radial-menu-connections-top-left-active.svg");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }
    }

    &--top {
      @apply absolute left-1/2 top-[20px] -translate-x-1/2 md:top-[60px] md:-translate-y-1/2;

      .RadialMenu__item-title {
        @apply top-[60px] md:top-[100px];
      }

      &:hover {
        &:before {
          content: "";
          @apply absolute inset-0 z-50 h-full w-full;

          background-image: url("/svg/radial-menu/radial-menu-top-active.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        & ~ .RadialMenu__connections .RadialMenu__connections--top {
          &:before {
            content: "";
            @apply absolute inset-0 z-50 h-full w-full;

            background-image: url("/svg/radial-menu/radial-menu-connections-top-active.svg");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }
    }

    &--top-right {
      @apply absolute right-0 top-[90px] z-50 md:right-1 md:top-[57px];

      .RadialMenu__item-title {
        @apply top-1/2 z-40 -translate-y-1/2 rotate-45;
      }

      &:hover {
        &:before {
          content: "";
          @apply absolute inset-0 h-full w-full;

          background-image: url("/svg/radial-menu/radial-menu-top-right-active.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        & ~ .RadialMenu__connections .RadialMenu__connections--top-right {
          &:before {
            content: "";
            @apply absolute inset-0 h-full w-full;

            background-image: url("/svg/radial-menu/radial-menu-connections-top-right-active.svg");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }
    }

    &--bottom-left {
      @apply absolute bottom-[90px] left-1 md:bottom-[80px];

      .RadialMenu__item-title {
        @apply top-1/2 z-40 -translate-y-1/2 rotate-45;
      }

      &:hover {
        &:before {
          content: "";
          @apply absolute inset-0 z-50 h-full w-full;

          background-image: url("/svg/radial-menu/radial-menu-bottom-left-active.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        & ~ .RadialMenu__connections .RadialMenu__connections--bottom-left {
          &:before {
            content: "";
            @apply absolute inset-0 z-10 h-full w-full;

            background-image: url("/svg/radial-menu/radial-menu-connections-bottom-left-active.svg");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }
    }

    &--bottom {
      @apply absolute bottom-[20px] left-1/2 -translate-x-1/2 md:-bottom-[160px] md:-translate-y-1/2;

      .RadialMenu__item-title {
        @apply top-[60px] md:top-[100px];
      }

      &:hover {
        &:before {
          content: "";
          @apply absolute inset-0 z-50 h-full w-full;

          background-image: url("/svg/radial-menu/radial-menu-bottom-active.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        & ~ .RadialMenu__connections .RadialMenu__connections--bottom {
          &:before {
            content: "";
            @apply absolute inset-0 z-50 h-full w-full;

            background-image: url("/svg/radial-menu/radial-menu-connections-bottom-active.svg");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }
    }

    &--bottom-right {
      @apply absolute bottom-[90px] right-1 md:bottom-[80px];

      .RadialMenu__item-title {
        @apply top-1/2 -translate-y-1/2 -rotate-45;
      }

      &:hover {
        &:before {
          content: "";
          @apply absolute inset-0 z-50 h-full w-full;

          background-image: url("/svg/radial-menu/radial-menu-bottom-right-active.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        & ~ .RadialMenu__connections .RadialMenu__connections--bottom-right {
          &:before {
            content: "";
            @apply absolute inset-0 z-50 h-full w-full;

            background-image: url("/svg/radial-menu/radial-menu-connections-bottom-right-active.svg");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }
    }

    &--top-left,
    &--top,
    &--top-right,
    &--bottom-left,
    &--bottom,
    &--bottom-right {
      &:hover {
        // Image
        img {
          @apply opacity-0;
        }

        // Title
        .RadialMenu__item-title {
          @apply text-white;
        }

        & ~ .RadialMenu__connections .RadialMenu__connections--center {
          &:before {
            content: "";
            @apply absolute inset-0 z-50 h-full w-full;

            background-image: url("/svg/radial-menu/radial-menu-connections-center-active.svg");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        }

        & ~ .RadialMenu__connections .RadialMenu__connections--center-chip {
          &:before {
            content: "";
            @apply absolute inset-0 z-50 h-full w-full;

            background-image: url("/svg/radial-menu/radial-menu-connections-center-chip-active.svg");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }
    }
  }

  &__connections {
    @apply absolute left-1/2 top-1/2 z-40 flex -translate-x-1/2 -translate-y-1/2;

    width: $radial-menu-size + 140px;
    height: $radial-menu-size + 140px;

    &--top-left,
    &--top-right,
    &--bottom-left,
    &--bottom-right,
    &--center,
    &--center-chip,
    &--top,
    &--bottom {
      @apply absolute;

      img {
        @apply h-full w-full object-contain;
      }
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
      @apply left-[123px] top-[-8px] z-20;

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
      @apply bottom-[25px] left-[117px] z-20;

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
