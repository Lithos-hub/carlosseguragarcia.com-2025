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
        ref="leftPhaseOneSeparatorRef"
        src="/svg/decoration/onboarding/onboarding-1.svg"
        alt="Onboarding left separator in the first block"
        class="Onboarding__phase-one-block__left-separator"
      />
      <div
        class="absolute right-5 top-5 flex flex-col items-end gap-2 text-right font-exo"
      >
        <pre class="text-[15px] font-bold text-secondary/50">{{
          memoryTextTop
        }}</pre>
        <pre class="text-[10px] text-secondarySoft">{{
          dataStreamTextTop
        }}</pre>
      </div>
      <div class="Onboarding__phase-one-block__text-container">
        <p class="Onboarding__machine-text">{{ phaseOneText }}</p>
      </div>
      <div
        class="absolute bottom-5 left-5 flex min-h-[100px] flex-col items-start gap-2 overflow-hidden text-left font-rajdhaniMedium"
      >
        <pre class="text-[15px] font-bold text-secondary/50">{{
          memoryTextBottom
        }}</pre>
        <pre class="text-[10px] text-secondarySoft">{{
          dataStreamTextBottom
        }}</pre>
      </div>
      <img
        ref="rightPhaseOneSeparatorRef"
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
            <pre class="text-secondary">
  _______  _____  _______  ______  __________________  _______
 / ___/\ \/ / _ \/ __/ _ \/ __/\ \/ / __/_  __/ __/  |/  / __/
/ /__   \  / _  / _// , _/\ \   \  /\ \  / / / _// /|_/ /\ \  
\___/   /_/____/___/_/|_/___/   /_/___/ /_/ /___/_/  /_/___/
                
          All rights reserved | CyberSystems {{ new Date().getFullYear() }}
              </pre
            >

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
            <div class="absolute bottom-5 right-5">
              <img
                src="/svg/decoration/onboarding/onboarding-3.svg"
                alt="Onboarding floating image"
                class="w-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isPhaseTwoCompleted && !isPhaseThreeCompleted"
      class="Onboarding__phase-three-block flex w-full justify-center gap-5"
    >
      <div class="flex flex-1 flex-col gap-5">
        <div class="p-5 font-rajdhaniMedium text-lg text-primary">
          L O A D I N G // F I L E S
        </div>
        <pre class="h-auto overflow-hidden p-5 text-[10px] text-primary">{{
          phaseThreeText
        }}</pre>
      </div>
      <div class="flex flex-1 flex-col gap-5">
        <div class="p-5 font-rajdhaniMedium text-lg text-primary">
          B O O T I N G // S Y S T E M
        </div>
        <pre class="h-auto overflow-hidden p-5 text-[10px] text-primary">{{
          phaseFourText
        }}</pre>
      </div>
      <div class="flex h-full flex-col items-end justify-end">
        <img
          src="/svg/decoration/onboarding/onboarding-phase-four-1.svg"
          alt="Onboarding floating image"
          class="w-[700px]"
        />
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
const leftPhaseOneSeparatorRef = useTemplateRef("leftPhaseOneSeparatorRef");
const rightPhaseOneSeparatorRef = useTemplateRef("rightPhaseOneSeparatorRef");

// First phase
const firstPhaseTypedResult = ["Starting systems", "Please wait..."];

// Second phase
const { text: memoryTextTop, startTyping: startMemoryTypingTop } =
  useTypeWriter({
    texts: CYBERINFO.MEMORY_GRID_TOP.map((text) => `${text}\n`),
    delay: 10,
    speed: 15,
  });

const { text: dataStreamTextTop, startTyping: startDataStreamTextTop } =
  useTypeWriter({
    texts: CYBERINFO.DATA_STREAM_TOP.map((text) => `${text}\n`),
    delay: 20,
    speed: 10,
    persistLines: CYBERINFO.DATA_STREAM_TOP.map(Boolean),
  });

const { text: memoryTextBottom, startTyping: startMemoryTypingBottom } =
  useTypeWriter({
    texts: CYBERINFO.MEMORY_GRID_BOTTOM.map((text) => `${text}\n`),
    delay: 10,
    speed: 15,
  });

const { text: dataStreamTextBottom, startTyping: startDataStreamTextBottom } =
  useTypeWriter({
    texts: CYBERINFO.DATA_STREAM_BOTTOM.map((text) => `${text}\n`),
    delay: 20,
    speed: 10,
    persistLines: CYBERINFO.DATA_STREAM_BOTTOM.map(Boolean),
  });

const {
  text: phaseOneText,
  startTyping: startPhaseOne,
  isCompleted: isPhaseOneCompleted,
} = useTypeWriter({
  texts: firstPhaseTypedResult,
  delay: 500,
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
} = useTypeWriter({
  texts: CYBERINFO.FILES_LIST.map((text) => `${text}\n`),
  delay: 20,
  speed: 0,
  persistLines: CYBERINFO.FILES_LIST.map(Boolean),
});

const {
  text: phaseFourText,
  startTyping: startPhaseFour,
  isCompleted: isPhaseFourCompleted,
} = useTypeWriter({
  texts: CYBERINFO.BOOT_SEQUENCE_LIST.map((text) => `${text}\n`),
  delay: 20,
  speed: 0,
  persistLines: CYBERINFO.BOOT_SEQUENCE_LIST.map(Boolean),
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
    }, 2000);
  }
});

watch([isPhaseTwoCompleted, isAllAuxiliarTextsCompleted], (hasCompleted) => {
  if (hasCompleted.every((isCompleted) => isCompleted)) {
    setTimeout(() => {
      startPhaseThree();
      startPhaseFour();
    }, 2000);
  }
});

onMounted(() => {
  setTimeout(() => {
    attentionImageRef.value?.classList.add(
      "animation--atention-icon-dissapear",
    );
  }, 3000);
  setTimeout(() => {
    leftPhaseOneSeparatorRef.value?.classList.add(
      "animation--move-left-separator-to-bottom",
    );
    rightPhaseOneSeparatorRef.value?.classList.add(
      "animation--move-right-separator-to-top",
    );
  }, 9000);

  setTimeout(() => {
    startMemoryTypingTop();
    startDataStreamTextTop();
    startMemoryTypingBottom();
    startDataStreamTextBottom();
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
    @apply relative flex h-[10px] w-[10px] max-w-[90vw] items-center justify-center border border-transparent;

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
      animation: move-left-separator-to-initial 0.5s
        cubic-bezier(0.25, 0.1, 0.25, 1);
      animation-delay: 3s;
      animation-fill-mode: forwards;
    }

    &__right-separator {
      @apply absolute h-full object-cover;
      right: -10px;
      opacity: 0;
      animation: move-right-separator-to-initial 0.5s
        cubic-bezier(0.25, 0.1, 0.25, 1);
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
    @apply relative flex h-[500px] w-[1000px] items-center justify-center overflow-hidden border border-transparent p-10;

    background-size: 5px 5px;
    background-image: repeating-linear-gradient(
      0deg,
      $secondary20,
      $secondary20 1px,
      $secondary10 1px,
      $secondary10
    );

    animation: expand-block-to-second-phase 3s cubic-bezier(0.25, 0.1, 0.25, 1);
    animation-fill-mode: forwards;

    &__system-text {
      @apply h-[80vh] max-h-[80vh] w-full overflow-hidden text-secondary;
    }

    &__systems-messages-initial-text {
      @apply font-lucania text-[8px] text-secondary;
    }
  }

  &__phase-three-block {
    @apply relative flex h-[90vh] w-[90vw] overflow-hidden border border-transparent p-10;

    background-size: 5px 5px;
    background-image: repeating-linear-gradient(
      0deg,
      $primary20,
      $primary20 1px,
      $primary10 1px,
      $primary10
    );

    animation: fade-block-to-third-phase 3s cubic-bezier(0.25, 0.1, 0.25, 1);
    animation-fill-mode: forwards;
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

.animation--fade-block-to-third-phase {
  animation: fade-block-to-third-phase 3s cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-fill-mode: forwards;
}

.animation--atention-icon-dissapear {
  animation: dissapear-and-scale-to-zero 1s cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-fill-mode: forwards;
}

.animation--move-left-separator-to-bottom {
  animation: move-left-separator-to-bottom 1s cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-fill-mode: forwards;
}

.animation--move-right-separator-to-top {
  animation: move-right-separator-to-top 1s cubic-bezier(0.25, 0.1, 0.25, 1);
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
    height: 500px;
    width: 1000px;
  }
  50% {
    height: 500px;
    width: 1000px;
  }
  75% {
    border-color: $secondarySoft;
    height: 90vh;
    width: 1000px;
  }
  100% {
    border-color: $secondarySoft;
    height: 90vh;
    width: 90vw;
  }
}

@keyframes fade-block-to-third-phase {
  0% {
    opacity: 0;
    border-color: $secondarySoft;
  }
  100% {
    opacity: 1;
    border-color: $primary;
  }
}

@keyframes move-left-separator-to-initial {
  0% {
    opacity: 0;
    top: -200px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}

@keyframes move-right-separator-to-initial {
  0% {
    opacity: 0;
    bottom: -200px;
  }
  100% {
    opacity: 1;
    bottom: 0;
  }
}

@keyframes move-left-separator-to-bottom {
  0% {
    opacity: 1;
    top: 0px;
  }
  100% {
    top: 200px;
    opacity: 0;
  }
}

@keyframes move-right-separator-to-top {
  0% {
    opacity: 1;
    bottom: 0px;
  }
  100% {
    bottom: 200px;
    opacity: 0;
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
