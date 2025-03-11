<template>
  <div class="OnBoarding">
    <p>{{ welcomeText }}</p>
    <p>{{ systemsText }}</p>
    <pre>{{ filesText }}</pre>
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

const welcomeTextInitial = [
  "Hello. Welcome to my website.",
  "Systems are starting up.",
  "Please wait.",
];

const {
  text: welcomeText,
  startTyping,
  isCompleted: isWelcomeCompleted,
} = useTypeWriter({
  texts: welcomeTextInitial,
  delay: 2000,
  speed: 100,
  caretAnimation: true,
  caretSymbol: "|",
  caretSpeed: 1000,
});

const systemsTextInitial = [
  `L O A D I N G . . .`,
  `--------------------`,
  `Checking system status...`,
  `0%`,
  `12%`,
  `47%`,
  `76%`,
  `100%`,
  `System status: OK`,
  `--------------------`,
  `Loading user experience...`,
  `--------------------`,
  `3D models loaded successfully. Total: 87KB`,
  `--------------------`,
  `Loading files...`,
];

const {
  text: systemsText,
  startTyping: startSystemsTyping,
  isCompleted: isSystemsCompleted,
} = useTypeWriter({
  texts: systemsTextInitial,
  delay: 2000,
  speed: 80,
  caretAnimation: true,
  caretSymbol: "|",
  caretSpeed: 1000,
});

const filesList = ref<string[]>([]);

const {
  text: filesText,
  startTyping: startFilesTyping,
  isCompleted: isFilesCompleted,
} = useTypeWriter({
  texts: filesList.value.map((file) => `\n${file}`).slice(0, 40),
  delay: 0,
  speed: 5,
  caretAnimation: true,
  caretSymbol: "|",
  caretSpeed: 100,
  persistLines: filesList.value.map(() => true),
});

// watch(isWelcomeCompleted, (hasCompleted) => {
//   if (hasCompleted) {
//     startSystemsTyping();
//   }
// });

// watch(isSystemsCompleted, (hasCompleted) => {
//   if (hasCompleted) {
//     startFilesTyping();
//   }
// });

watch(isFilesCompleted, (hasCompleted) => {
  if (hasCompleted) {
    emit("onboarding-completed");
  }
});

watch(isGettingFilesNames, (hasCompleted) => {
  if (hasCompleted) {
    filesList.value = files.value;
    startFilesTyping();
  }
});

onMounted(async () => {
  await loadProjectFiles();
});
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
.OnBoarding {
  @apply h-screen bg-stone-950 p-10 brightness-200;

  p {
    @apply font-whiteRabbit text-xl font-bold text-green-500;
  }
}
</style>
