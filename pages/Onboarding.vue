<template>
  <div class="Onboarding">
    <div
      v-if="!isPhaseOneCompleted && !isPhaseTwoCompleted"
      ref="firstBlockRef"
      class="Onboarding__phase-one-block"
    >
      <img
        ref="attentionImageRef"
        src="/svg/decoration/onboarding/onboarding-attention.svg"
        alt="Onboarding attention"
        class="Onboarding__phase-one-block__attention"
      />
      <img
        src="/svg/decoration/onboarding/onboarding-1.svg"
        alt="Onboarding left separator in the first block"
        class="Onboarding__phase-one-block__left-separator"
      />
      <div class="Onboarding__phase-one-block__text-container">
        <p class="Onboarding__machine-text">{{ phaseOneText }}</p>
      </div>
      <img
        src="/svg/decoration/onboarding/onboarding-2.svg"
        alt="Onboarding right separator in the first block"
        class="Onboarding__phase-one-block__right-separator"
      />
    </div>
    <div
      v-if="isPhaseOneCompleted && !isPhaseTwoCompleted"
      ref="secondBlockRef"
      class="Onboarding__phase-two-block"
    >
      <div v-if="isPhaseTwoTyping" class="Onboarding__system-text">
        <div class="flex gap-10">
          <div>
            <pre>
  _______  _____  _______  ______  __________________  _______
 / ___/\ \/ / _ \/ __/ _ \/ __/\ \/ / __/_  __/ __/  |/  / __/
/ /__   \  / _  / _// , _/\ \   \  /\ \  / / / _// /|_/ /\ \  
\___/   /_/____/___/_/|_/___/   /_/___/ /_/ /___/_/  /_/___/
                
          All rights reserved | CyberSystems {{ new Date().getFullYear() }}
              </pre
            >

            <div class="flex gap-2 pb-2">
              <small
                class="text-xs text-secondarySoft brightness-200"
                v-for="(char, i) in startingSystemChars"
                :key="char + i"
              >
                {{ char }}
              </small>
            </div>

            <pre class="h-[60vh] max-h-[60vh] overflow-hidden text-[10px]">{{
              phaseTwoText
            }}</pre>
          </div>
          <div class="flex hidden w-full flex-col gap-5 p-5 md:block">
            <p
              class="Onboarding__phase-two-block__systems-messages-initial-text"
            >
              {{ CYBERINFO.LEFT_SIDE_TEXT }}
            </p>
            <small class="text-xs text-primary">
              Tasks completed:{{ auxiliarTextsCompleted.length }}
            </small>
            <div class="grid grid-cols-3 pt-5">
              <div
                v-for="(line, index) in systemAuxiliarTextInitial"
                :key="index"
              >
                <OnboardingSystemsMessages
                  :texts="[line]"
                  @completed="onSystemAuxiliarCompleted(index)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as CYBERINFO from "@/consts/cyberinfo";
import { LOADING_SYSTEM_TEXT } from "@/consts/cyberinfo";

const router = useRouter();

const firstBlockRef = useTemplateRef("firstBlockRef");
const attentionImageRef = useTemplateRef("attentionImageRef");

// First phase
const firstPhaseTypedResult = ["Starting systems", "Please wait..."];

// Second phase
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

const {
  text: phaseOneText,
  startTyping: startPhaseOne,
  isCompleted: isPhaseOneCompleted,
  isTyping: isPhaseOneTyping,
} = useTypeWriter({
  texts: firstPhaseTypedResult,
  delay: 1000,
  speed: 25,
});

const {
  text: phaseTwoText,
  startTyping: startPhaseTwo,
  isCompleted: isPhaseTwoCompleted,
  isTyping: isPhaseTwoTyping,
} = useTypeWriter({
  texts: LOADING_SYSTEM_TEXT.map((text) => `\n${text}`),
  delay: 100,
  speed: 0,
  persistLines: LOADING_SYSTEM_TEXT.map(Boolean),
});

const {
  text: phaseThreeText,
  startTyping: startPhaseThree,
  isCompleted: isPhaseThreeCompleted,
  isTyping: isPhaseThreeTyping,
} = useTypeWriter({
  texts: CYBERINFO.FILES_LIST.map((text) => `${text}\n`),
  delay: 50,
  speed: 0,
  persistLines: CYBERINFO.FILES_LIST.map(Boolean),
});

const auxiliarTextsCompleted = ref<number[]>([]);

const isAllAuxiliarTextsCompleted = computed(() => {
  return (
    auxiliarTextsCompleted.value.length === systemAuxiliarTextInitial.length
  );
});

const onSystemAuxiliarCompleted = (index: number) => {
  auxiliarTextsCompleted.value.push(index);
};

const systemAuxiliarTextInitial = [
  ...CYBERINFO.EXTERNAL_SIGNAL,
  ...CYBERINFO.ENCRYPTION_CHECK,
  ...CYBERINFO.BIOFEED_INTERFACE,
  ...CYBERINFO.MALWARE_SCAN,
  ...CYBERINFO.SECURITY_PROTOCOL,
];

watch(isPhaseOneCompleted, (isCompleted) => {
  if (isCompleted) {
    setTimeout(() => {
      startPhaseTwo();
    }, 1000);
  }
});

watch([isPhaseTwoCompleted, isAllAuxiliarTextsCompleted], (hasCompleted) => {
  if (hasCompleted.every((isCompleted) => isCompleted)) {
    setTimeout(() => {
      startPhaseThree();
    }, 1000);
  }
});

onMounted(() => {
  setTimeout(() => {
    attentionImageRef.value?.classList.add(
      "animation--atention-icon-dissapear",
    );
  }, 3000);
  setTimeout(() => {
    startPhaseOne();
  }, 5000);
});
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/variables.scss" as *;

.Onboarding {
  @apply flex h-screen flex-col items-center justify-center bg-black p-2.5 lg:p-5;

  &__machine-text {
    @apply font-jetbrainsMono text-lg text-secondary;
    opacity: 0;
    animation: fade-text 0.5s ease forwards;
    animation-delay: 1.5s;
  }

  &__phase-one-block {
    @apply relative flex h-[10px] w-[10px] max-w-[90vw] items-center justify-center bg-stone-950;

    background-size: 5px 5px;
    background-image: repeating-linear-gradient(
      0deg,
      $secondary20,
      $secondary20 1px,
      $secondary10 1px,
      $secondary10
    );

    animation: expand-block-to-first-phase 2s cubic-bezier(0.25, 0.1, 0.25, 1);
    animation-fill-mode: forwards;

    &__attention {
      @apply absolute h-[150px] w-[150px] object-cover opacity-0;
      animation: rapidPulseAndSlideToLeft 1s cubic-bezier(0.25, 0.1, 0.25, 1);
      animation-delay: 1s;
      animation-fill-mode: forwards;
    }

    &__left-separator {
      @apply absolute h-full object-cover;
      left: -10px;
      opacity: 0;
      animation: move-left-separator 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
      animation-delay: 3s;
      animation-fill-mode: forwards;
    }

    &__right-separator {
      @apply absolute h-full object-cover;
      right: -10px;
      opacity: 0;
      animation: move-right-separator 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
      animation-delay: 3s;
      animation-fill-mode: forwards;
    }

    &__text-container {
      @apply flex h-[200px] w-[calc(100%-100px)] flex-col items-center justify-center border border-secondary opacity-0;
      animation: fade-text 0.5s ease forwards;
      animation-delay: 1.5s;
    }
  }

  &__phase-two-block {
    @apply flex h-[90vh] w-[90vw] items-center justify-center overflow-hidden border border-secondarySoft bg-stone-950 p-10;

    background-size: 5px 5px;
    background-image: repeating-linear-gradient(
      0deg,
      $secondary20,
      $secondary20 1px,
      $secondary10 1px,
      $secondary10
    );

    animation: expand-block-to-second-phase 1s cubic-bezier(0.25, 0.1, 0.25, 1);
    animation-fill-mode: forwards;

    &__system-text {
      @apply h-[80vh] max-h-[80vh] w-full overflow-hidden text-secondary;
    }

    &__systems-messages-initial-text {
      @apply font-lucania text-[8px] text-secondary;
    }
  }
}

.animation--expand-block-to-first-phase {
  animation: expand-block-to-first-phase 2s cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-fill-mode: forwards;
}

.animation--expand-block-to-second-phase {
  animation: expand-block-to-second-phase 0.5s
    cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation-fill-mode: forwards;
}

.animation--atention-icon-dissapear {
  animation: dissapear-and-scale-to-zero 1s cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-fill-mode: forwards;
}

@keyframes expand-block-to-first-phase {
  0% {
    opacity: 0;
    overflow: hidden;
    height: 10px;
    width: 10px;
  }
  10% {
    opacity: 0;
    overflow: hidden;
    height: 10px;
    width: 1000px;
  }
  25% {
    overflow: hidden;
    height: 100px;
    width: 1000px;
  }
  100% {
    opacity: 1;
    height: 500px;
    width: 1000px;
  }
}

@keyframes expand-block-to-second-phase {
  0% {
    overflow: hidden;
    height: 500px;
    width: 1000px;
  }
  10% {
    overflow: hidden;
    height: 1000px;
    width: 1000px;
  }
  25% {
    overflow: hidden;
    height: 90vh;
    width: 1000px;
  }
  100% {
    height: 90vh;
    width: 90vw;
  }
}

@keyframes move-left-separator {
  0% {
    opacity: 0;
    top: -200px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}

@keyframes move-right-separator {
  0% {
    opacity: 0;
    bottom: -200px;
  }
  100% {
    opacity: 1;
    bottom: 0;
  }
}

@keyframes fade-text {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rapidPulseAndSlideToLeft {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  10% {
    opacity: 1;
    transform: translateY(-100px);
  }
  20% {
    opacity: 0;
    transform: translateY(-100px);
  }
  30% {
    opacity: 1;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes dissapear-and-scale-to-zero {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
