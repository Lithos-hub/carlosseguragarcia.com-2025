<template>
  <div class="Onboarding">
    <div class="Onboarding__first-block">
      <img
        src="/svg/decoration/onboarding/onboarding-1.svg"
        alt="Onboarding left separator in the first block"
        class="Onboarding__first-block__left-separator"
      />
      <div class="Onboarding__first-block__text-container">
        <p class="Onboarding__machine-text">{{ welcomeText }}</p>
      </div>
      <img
        src="/svg/decoration/onboarding/onboarding-2.svg"
        alt="Onboarding right separator in the first block"
        class="Onboarding__first-block__right-separator"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const welcomeTextInitial = ["Starting systems"];

const {
  text: welcomeText,
  startTyping: startWelcomeTyping,
  isCompleted: isWelcomeCompleted,
} = useTypeWriter({
  texts: welcomeTextInitial,
  delay: 3000,
  speed: 25,
  caretAnimation: true,
  caretSymbol: "❚",
});

onMounted(() => {
  startWelcomeTyping();
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

  &__first-block {
    @apply relative flex h-[10px] w-[10px] max-w-4xl items-center justify-center bg-stone-950;

    background-size: 5px 5px;
    background-image: repeating-linear-gradient(
      0deg,
      $secondary20,
      $secondary20 1px,
      $secondary10 1px,
      $secondary10
    );

    animation: expand-block 2s cubic-bezier(0.25, 0.1, 0.25, 1);
    animation-delay: 1s;
    animation-fill-mode: forwards;

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
}

@keyframes expand-block {
  0% {
    opacity: 0;
    overflow: hidden;
    height: 10px;
    width: 10px;
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
</style>
