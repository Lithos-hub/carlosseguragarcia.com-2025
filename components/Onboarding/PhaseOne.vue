<template>
  <div ref="firstBlockRef" class="OnboardingPhaseOne">
    <img
      ref="attentionImageRef"
      src="/svg/decoration/onboarding/onboarding-attention.svg"
      alt="Onboarding attention"
      class="OnboardingPhaseOne__attention"
    />
    <img
      ref="leftPhaseOneSeparatorRef"
      src="/svg/decoration/onboarding/onboarding-1.svg"
      alt="Onboarding left separator in the first block"
      class="OnboardingPhaseOne__left-separator"
    />
    <div
      class="absolute right-5 top-5 flex flex-col items-end gap-2 text-right font-exo"
    >
      <pre class="text-[15px] font-bold text-secondary/50">{{
        memoryTextTop
      }}</pre>
      <pre class="text-[8px] text-secondarySoft">{{ dataStreamTextTop }}</pre>
    </div>
    <div class="OnboardingPhaseOne__text-container">
      <p class="OnboardingPhaseOne__machine-text">{{ phaseOneText }}</p>
    </div>
    <div
      class="absolute bottom-5 left-5 flex min-h-[100px] flex-col items-start gap-2 overflow-hidden text-left font-rajdhaniMedium"
    >
      <pre class="text-[15px] font-bold text-secondary/50">{{
        memoryTextBottom
      }}</pre>
      <pre class="text-[8px] text-secondarySoft">{{
        dataStreamTextBottom
      }}</pre>
    </div>
    <img
      ref="rightPhaseOneSeparatorRef"
      src="/svg/decoration/onboarding/onboarding-2.svg"
      alt="Onboarding right separator in the first block"
      class="OnboardingPhaseOne__right-separator"
    />
  </div>
</template>

<script setup lang="ts">
import { ONBOARDING_CONSTANTS } from "@/consts/onboarding";

interface Props {
  memoryTextTop: string;
  dataStreamTextTop: string;
  memoryTextBottom: string;
  dataStreamTextBottom: string;
  phaseOneText: string;
}

defineProps<Props>();

const firstBlockRef = useTemplateRef("firstBlockRef");
const attentionImageRef = useTemplateRef("attentionImageRef");
const leftPhaseOneSeparatorRef = useTemplateRef("leftPhaseOneSeparatorRef");
const rightPhaseOneSeparatorRef = useTemplateRef("rightPhaseOneSeparatorRef");

onMounted(() => {
  localStorage.setItem("hasSeenOnboarding", "true");
  setTimeout(() => {
    attentionImageRef.value?.classList.add(
      "animation--atention-icon-dissapear",
    );
  }, ONBOARDING_CONSTANTS.PHASE_ONE.ANIMATION_DELAYS.ATTENTION_ICON);

  setTimeout(() => {
    leftPhaseOneSeparatorRef.value?.classList.add(
      "animation--move-left-separator-to-bottom",
    );
    rightPhaseOneSeparatorRef.value?.classList.add(
      "animation--move-right-separator-to-top",
    );
  }, ONBOARDING_CONSTANTS.PHASE_ONE.ANIMATION_DELAYS.SEPARATORS);
});
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/variables.scss" as *;

.OnboardingPhaseOne {
  @apply relative flex h-[10px] w-[10px] max-w-[90vw] items-center justify-center border border-transparent lg:max-w-[50vw];

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
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
  }

  &__right-separator {
    @apply absolute h-full object-cover;
    right: -10px;
    opacity: 0;
    animation: move-right-separator-to-initial 0.5s
      cubic-bezier(0.25, 0.1, 0.25, 1);
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
  }

  &__text-container {
    @apply flex h-[200px] w-[calc(100%-100px)] flex-col items-center justify-center border border-secondary opacity-0;
    animation: fade-text 0.5s ease forwards;
    animation-delay: 1.5s;
  }

  &__machine-text {
    @apply font-jetbrainsMono text-lg text-secondary;
    opacity: 0;
    animation: fade-text 0.5s ease forwards;
    animation-delay: 1.5s;
  }
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
    width: 90vw;
    @screen lg {
      width: 50vw;
    }
  }
  25% {
    overflow: hidden;
    height: 100px;
    width: 90vw;
    @screen lg {
      width: 50vw;
    }
  }
  100% {
    height: 500px;
    width: 90vw;
    @screen lg {
      width: 50vw;
    }
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
