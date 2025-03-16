<template>
  <div class="Onboarding">
    <div class="Onboarding__memory">
      <pre class="text-[15px] font-bold text-secondary/50">{{
        memoryText
      }}</pre>
      <pre class="text-[10px] text-secondarySoft">{{ dataStreamText }}</pre>
    </div>
    <div class="Onboarding__text-left">
      <p>Systems operator</p>
      <p>AH-0000922344</p>
      <p>Model i093-v.01</p>
    </div>
    <div class="Onboarding__left-side-text" />
    <div class="Onboarding__right-side-text" />
    <div class="Onboarding__access-point">
      <p>Access point</p>
    </div>
    <div class="Onboarding__right-section">
      <div class="Onboarding__right-section-box">
        <p>{{ box1Text }}</p>
      </div>
      <div class="Onboarding__right-section-box">
        <p>{{ box2Text }}</p>
      </div>
      <div class="Onboarding__right-section-box">
        <p>{{ box3Text }}</p>
      </div>
      <div class="Onboarding__right-section-box">
        <p>{{ box4Text }}</p>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import * as CYBERINFO from "@/consts/cyberinfo";

const { text: memoryText, startTyping: startMemoryTyping } = useTypeWriter({
  texts: CYBERINFO.MEMORY_GRID.map((text) => `${text}\n`),
  delay: 700,
  speed: 100,
});

const {
  text: dataStreamText,
  startTyping: startDataStreamText,
  isCompleted: isDataStreamCompleted,
} = useTypeWriter({
  texts: CYBERINFO.DATA_STREAM.map((text) => `${text}\n`),
  delay: 1000,
  speed: 10,
  persistLines: CYBERINFO.DATA_STREAM.map(Boolean),
});

const box1TextInitial = [
  ...CYBERINFO.MALWARE_SCAN,
  ...CYBERINFO.AI_COMPANION,
  ...CYBERINFO.MEMORY_GRID,
];
const box2TextInitial = [
  ...CYBERINFO.NODE_CONNECTION,
  ...CYBERINFO.ENCRYPTION_CHECK,
  ...CYBERINFO.BIOFEED_INTERFACE,
];

const box3TextInitial = [
  ...CYBERINFO.REMOTE_ACCESS,
  ...CYBERINFO.EXTERNAL_SIGNAL,
];

const box4TextInitial = [
  ...CYBERINFO.MALWARE_SCAN,
  ...CYBERINFO.AI_COMPANION,
  ...CYBERINFO.MEMORY_GRID,
];

const { text: box1Text, startTyping: startBox1Typing } = useTypeWriter({
  texts: box1TextInitial.map((text) => `${text}\n`),
  delay: 0,
  speed: 50,
  count: 10,
  persistLines: box1TextInitial.map(Boolean),
});

const { text: box2Text, startTyping: startBox2Typing } = useTypeWriter({
  texts: box2TextInitial.map((text) => `${text}\n`),
  delay: 0,
  speed: 10,
  count: 10,
  persistLines: box2TextInitial.map(Boolean),
});

const { text: box3Text, startTyping: startBox3Typing } = useTypeWriter({
  texts: box3TextInitial.map((text) => `${text}\n`),
  delay: 0,
  speed: 20,
  count: 10,
  persistLines: box3TextInitial.map(Boolean),
});

const { text: box4Text, startTyping: startBox4Typing } = useTypeWriter({
  texts: box4TextInitial.map((text) => `${text}\n`),
  delay: 0,
  speed: 40,
  count: 10,
  persistLines: box4TextInitial.map(Boolean),
});

const startBoxesTyping = () => {
  startBox1Typing();
  startBox2Typing();
  startBox3Typing();
  startBox4Typing();
};

onMounted(() => {
  startBoxesTyping();
  startMemoryTyping();
  startDataStreamText();
});
</script>

<style lang="scss" scoped>
.Onboarding {
  @apply bg-black text-green-500;

  &__memory {
    @apply fixed right-0 top-0 flex flex-col p-5 text-right font-exo;
  }

  &__text-left {
    @apply fixed left-0 top-0 p-5;

    p {
      @apply font-exo text-[10px] text-secondarySoft;
    }
  }

  &__access-point {
    @apply fixed bottom-5 left-5;

    background-image: url("@/public/svg/dark-button-1.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;

    p {
      @apply p-2 px-10 font-exo text-[12px] text-secondarySoft;
    }
  }

  &__right-section {
    @apply fixed bottom-5 right-5 flex flex-col gap-1 border border-secondarySoft/10 bg-secondary/10 p-2;

    &-box {
      @apply flex h-[60px] w-[60px] flex-col items-end justify-center overflow-hidden p-2 text-right;

      background-image: url("/svg/onboarding-small-box.svg");
      background-size: 100% 100%;
      background-repeat: no-repeat;

      p {
        @apply py-2 font-exo text-[5px] text-secondarySoft;
      }
    }
  }

  &__left-side-text {
    @apply fixed left-2 top-1/2 h-full w-[12px] -translate-y-1/2;
    background-image: url("/svg/onboarding-left-side-text.svg");
    background-size: 40%;
    background-repeat: no-repeat;
  }

  &__right-side-text {
    @apply fixed right-0 top-1/2 h-full w-[12px] -translate-y-1/2;
    background-image: url("/svg/onboarding-right-side-text.svg");
    background-size: 40%;
    background-repeat: no-repeat;
  }
}
</style>
