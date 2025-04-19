<template>
  <div class="Onboarding">
    <OnboardingPhaseOne
      v-if="!isPhaseOneCompleted && !isPhaseTwoCompleted"
      :memory-text-top="memoryTextTop"
      :data-stream-text-top="dataStreamTextTop"
      :memory-text-bottom="memoryTextBottom"
      :data-stream-text-bottom="dataStreamTextBottom"
      :phase-one-text="phaseOneText"
    />
    <OnboardingPhaseTwo
      v-if="isPhaseOneCompleted && !isPhaseTwoCompleted"
      :is-typing="isPhaseTwoTyping"
      :phase-two-text="phaseTwoText"
      :system-auxiliar-text-initial="systemAuxiliarTextInitial"
      :auxiliar-texts-completed="state.auxiliarTextsCompleted"
      @system-auxiliar-completed="onSystemAuxiliarCompleted"
    />
    <OnboardingPhaseThree
      v-if="isPhaseTwoCompleted && !isPhaseThreeCompleted"
      :phase-three-text="phaseThreeText"
      :phase-four-text="phaseFourText"
    />
  </div>
</template>

<script setup lang="ts">
const {
  state,
  memoryTextTop,
  dataStreamTextTop,
  memoryTextBottom,
  dataStreamTextBottom,
  phaseOneText,
  phaseTwoText,
  phaseThreeText,
  phaseFourText,
  isPhaseOneCompleted,
  isPhaseTwoCompleted,
  isPhaseThreeCompleted,
  isPhaseTwoTyping,
  systemAuxiliarTextInitial,
  onSystemAuxiliarCompleted,
  onMounted: onOnboardingMounted,
} = useOnboarding();

onMounted(() => {
  onOnboardingMounted();
});
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/variables.scss" as *;

.Onboarding {
  @apply flex h-screen flex-col items-center justify-center bg-black p-2.5 lg:p-5;
}
</style>
