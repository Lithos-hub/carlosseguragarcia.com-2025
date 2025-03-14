<template>
  <div class="OnBoarding">
    <div class="OnBoarding__centered">
      <p>{{ welcomeText }}</p>
    </div>
    <pre class="text-red-500">{{ systemsText }}</pre>
    <pre class="text-slate-500">{{ filesText }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { useTypeWriter } from "@/composables/useTypeWriter";

definePageMeta({
  layout: "onboarding",
});

const {
  files,
  isLoading: isGettingFilesNames,
  error,
  loadProjectFiles,
} = useProjectFiles();

const emit = defineEmits(["onboarding-completed"]);

// *** TYPEWRITER *** //
const welcomeTextInitial = [
  "Hello. Welcome to my website.",
  "Systems are starting up.",
  "Please wait.",
];

const {
  text: welcomeText,
  startTyping: startWelcomeTyping,
  isCompleted: isWelcomeCompleted,
} = useTypeWriter({
  texts: welcomeTextInitial,
  delay: 1000,
  speed: 50,
  caretAnimation: false,
});

const systemsTextInitial = [
  `\nL O A D I N G . . .\n`,
  `\n--------------------\n`,
  `\nChecking system status...\n`,
  `\n| Connection - DONE\n`,
  `\n| API - DONE\n`,
  `\n| Scheduler - DONE\n`,
  `\n| Worker - DONE\n`,
  `\n| System status: OK\n`,
  `\n--------------------\n`,
  `\nLoading user experience...\n`,
  `\n--------------------\n`,
  `\n3D models loaded successfully. Total: 87KB\n`,
  `\n--------------------\n`,
  `\nLoading files...\n`,
];

const {
  text: systemsText,
  startTyping: startSystemsTyping,
  isCompleted: isSystemsCompleted,
} = useTypeWriter({
  texts: systemsTextInitial,
  delay: 1000,
  speed: 30,
  caretAnimation: false,
  persistLines: systemsTextInitial.map(() => true),
});

const {
  text: filesText,
  startTyping: startFilesTyping,
  isCompleted: isFilesCompleted,
} = useTypeWriter({
  texts: files.value.map((file) => `\n${file}`).slice(0, 40),
  delay: 0,
  speed: 5,
  caretAnimation: false,
  persistLines: files.value.map(() => true),
});

watch(isWelcomeCompleted, (hasCompleted) => {
  if (hasCompleted) {
    startSystemsTyping();
  }
});

watch(isSystemsCompleted, (hasCompleted) => {
  if (hasCompleted) {
    startFilesTyping();
  }
});

watch(isFilesCompleted, (hasCompleted) => {
  if (hasCompleted) {
    emit("onboarding-completed");
  }
});
onMounted(() => {
  startWelcomeTyping();
  loadProjectFiles();
});
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/colors.scss" as *;

.OnBoarding {
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

  p {
    @apply font-lucania text-xl font-bold text-secondary;
  }

  &__centered {
    @apply flex h-full flex-col items-center justify-center border-red-500 bg-red-500/10 p-5;
  }
}
</style>
