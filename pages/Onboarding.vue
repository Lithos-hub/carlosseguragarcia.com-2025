<template>
  <div class="Onboarding">
    <div class="Onboarding__centered">
      <p class="Onboarding__welcome-text">{{ welcomeText }}</p>
      <Transition name="fade">
        <div v-if="isSystemTyping" class="Onboarding__system-text">
          <pre class="w-[300px]">
      _______  _____  _______  ______  __________________  _______
     / ___/\ \/ / _ \/ __/ _ \/ __/\ \/ / __/_  __/ __/  |/  / __/
    / /__   \  / _  / _// , _/\ \   \  /\ \  / / / _// /|_/ /\ \  
    \___/   /_/____/___/_/|_/___/   /_/___/ /_/ /___/_/  /_/___/
    
              All rights reserved | CyberSystems {{ new Date().getFullYear() }}
          </pre>

          <div class="flex gap-2 pb-2">
            <small
              class="text-xs text-secondary/50"
              v-for="(char, i) in startingSystemChars"
              :key="char + i"
            >
              {{ char }}
            </small>
          </div>

          <pre>{{ systemText }}</pre>
        </div>
      </Transition>
      <Transition name="fade">
        <div v-if="isFilesTyping" class="Onboarding__scanning-files">
          <div class="Onboarding__scanning-files__pseudo-border" />
          <div class="Onboarding__scanning-files__content">
            <div class="absolute flex w-full justify-between gap-5 p-10">
              <div class="flex flex-1 flex-col gap-1">
                <div class="flex gap-2">
                  <small
                    class="text-xs text-primary/50"
                    v-for="(char, i) in scanningFilesChars"
                    :key="char + i"
                  >
                    {{ char }}
                  </small>
                </div>
                <pre class="Onboarding__files-list">{{ filesText }}</pre>
              </div>
              <div class="flex w-full flex-1 flex-col gap-5 md:relative">
                <!-- SCANNING BAR -->
                <div class="Onboarding__scanning-bar">
                  <div
                    class="absolute left-0 top-0 h-[10px] bg-secondarySoft"
                    :style="{
                      width: `${
                        (filesText.split('\n').length /
                          CYBERINFO.FILES_LIST.length) *
                        100
                      }%`,
                    }"
                  />
                </div>
                <!-- SCANNING PERCENTAGE -->
                <small class="font-lucania text-secondary">
                  {{
                    (
                      (filesText.split("\n").length /
                        CYBERINFO.FILES_LIST.length) *
                      100
                    ).toFixed(2)
                  }}
                  %
                </small>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <p>{{ endingText }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTypeWriter } from "@/composables/useTypeWriter";
import * as CYBERINFO from "@/consts/cyberinfo";
import { LOADING_SYSTEM_TEXT } from "@/consts/cyberinfo";
definePageMeta({
  layout: "onboarding",
});

const router = useRouter();

const welcomeTextInitial = [
  "Hello. Welcome to my website.",
  "Systems are starting up.",
  "Please wait...",
];

const startingSystemChars = [
  "[",
  "S",
  " ",
  "T",
  " ",
  "A",
  " ",
  "R",
  " ",
  "T",
  " ",
  "I",
  " ",
  "N",
  " ",
  "G",
  " ",
  "S",
  " ",
  "Y",
  " ",
  "S",
  " ",
  "T",
  " ",
  "E",
  " ",
  "M",
  "]",
];

const scanningFilesChars = [
  "[",
  "S",
  " ",
  "C",
  " ",
  "A",
  " ",
  "N",
  " ",
  "N",
  " ",
  "I",
  " ",
  "N",
  " ",
  "G",
  " ",
  "F",
  " ",
  "I",
  " ",
  "L",
  " ",
  "E",
  " ",
  "S",
  "]",
];

const endingTextInitial = ["Systems are ready.", "Redirecting..."];

const {
  text: welcomeText,
  startTyping: startWelcomeTyping,
  isCompleted: isWelcomeCompleted,
} = useTypeWriter({
  texts: welcomeTextInitial,
  delay: 1000,
  speed: 50,
});

const {
  text: systemText,
  startTyping: startSystemTyping,
  isCompleted: isSystemCompleted,
  isTyping: isSystemTyping,
} = useTypeWriter({
  texts: LOADING_SYSTEM_TEXT.map((text) => `\n${text}`),
  delay: 100,
  speed: 0,
  persistLines: LOADING_SYSTEM_TEXT.map(Boolean),
});

const {
  text: filesText,
  startTyping: startFilesTyping,
  isCompleted: isFilesCompleted,
  isTyping: isFilesTyping,
} = useTypeWriter({
  texts: CYBERINFO.FILES_LIST.map((text) => `${text}\n`),
  delay: 50,
  speed: 0,
  persistLines: CYBERINFO.FILES_LIST.map(Boolean),
});

const {
  text: endingText,
  startTyping: startEndingTyping,
  isCompleted: isEndingCompleted,
} = useTypeWriter({
  texts: endingTextInitial.map((text) => `${text}\n`),
  delay: 1000,
  speed: 100,
});

watch(isWelcomeCompleted, (hasCompleted) => {
  if (hasCompleted) {
    setTimeout(() => {
      startSystemTyping();
    }, 1000);
  }
});

watch(isSystemCompleted, (hasCompleted) => {
  if (hasCompleted) {
    setTimeout(() => {
      startFilesTyping();
    }, 1000);
  }
});

watch(isFilesCompleted, (hasCompleted) => {
  if (hasCompleted) {
    setTimeout(() => {
      startEndingTyping();
    }, 1000);
  }
});

// watch(isEndingCompleted, (hasCompleted) => {
//   if (hasCompleted) {
//     setTimeout(() => {
//       router.push("/home");
//     }, 1000);
//   }
// });

onMounted(() => {
  startFilesTyping();
});
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/colors.scss" as *;

.Onboarding {
  @apply h-screen bg-black;

  &::after {
    @apply absolute inset-0;
    content: "";
    background-color: transparent;
    background-image:
      linear-gradient($secondary 1px, transparent 1px),
      linear-gradient(to right, $secondary 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.1;
  }

  &__welcome-text {
    @apply font-lucania text-sm font-bold text-secondary md:text-xl;
  }

  &__centered {
    @apply flex h-full flex-col items-center justify-center border-red-500 bg-red-500/10 p-2 md:p-20 lg:p-40;
  }

  &__system-text {
    @apply expand-animation z-50 h-full w-full overflow-hidden border border-secondary/50 p-5 backdrop-blur-sm;

    pre {
      @apply text-[10px] text-secondary;
    }
  }

  $clip-shape: polygon(
    0% 15%,
    0 0,
    15% 0%,
    98% 0,
    100% 5%,
    100% 95%,
    75% 95%,
    73% 100%,
    2% 100%,
    0 95%
  );

  &__scanning-files {
    @apply relative h-[90vh] w-full overflow-hidden border-2 border-secondarySoft p-20;
    clip-path: $clip-shape;

    &::after {
      content: "";
      @apply absolute inset-0 z-0 h-full w-full bg-black;
      clip-path: $clip-shape;
    }

    &__pseudo-border {
      @apply absolute inset-0 -left-1 h-[calc(100%+10px)] w-[calc(100%+10px)] bg-secondarySoft;
      clip-path: $clip-shape;
    }

    &__content {
      @apply absolute inset-0 z-10 flex h-full w-full gap-5;
    }
  }

  &__files-list {
    @apply p-5 text-[10px] text-primary/50;
  }

  &__scanning-bar {
    @apply relative flex h-[10px] w-full flex-col overflow-hidden border border-secondary;
  }
}

.expand-animation {
  animation: expand 1s cubic-bezier(0.25, 0.1, 0.25, 1);
}

@keyframes expand {
  0% {
    height: 0;
    width: 0;
  }
  100% {
    height: 100%;
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
