<template>
  <TransitionGroup name="fade">
    <div class="OnBoarding">
      <div class="OnBoarding__centered">
        <p>{{ welcomeText }}</p>
        <pre
          v-if="isSystemsTyping"
          class="expand-animation h-[40vw] w-[700px] overflow-hidden border border-secondary/50 bg-black/10 p-10 leading-none text-secondary"
        >
        <span class="text-secondary">{{ systemsText }}</span>
      </pre>
        <pre
          v-if="isFilesTyping"
          class="h-[40vw] w-[700px] overflow-hidden border border-secondary/50 bg-black/10 p-10 leading-none text-secondary"
        >
        <code>{{ filesText }}</code>
      </pre>
      </div>
    </div>
  </TransitionGroup>
</template>

<script lang="ts" setup>
import { useTypeWriter } from "@/composables/useTypeWriter";

definePageMeta({
  layout: "onboarding",
});

const router = useRouter();

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
  isTyping: isSystemsTyping,
} = useTypeWriter({
  texts: systemsTextInitial,
  delay: 1000,
  speed: 0,
  caretAnimation: false,
  persistLines: systemsTextInitial.map(() => true),
});

const filesTextInitial = [
  ".nvmrc",
  ".gitignore",
  ".env",
  ".env.local",
  ".env.development",
  ".env.production",
  ".env.test",
  ".env.test.local",
  ".env.test.local",
  ".github",
  "src/components/Header.vue",
  "src/components/Footer.vue",
  "src/components/Sidebar.vue",
  "src/components/Navigation.vue",
  "src/components/Button.vue",
  "src/components/Card.vue",
  "src/components/Modal.vue",
  "src/components/Loader.vue",
  "src/components/Avatar.vue",
  "src/components/Dropdown.vue",
  "src/pages/Home.vue",
  "src/pages/About.vue",
  "src/pages/Contact.vue",
  "src/pages/Projects.vue",
  "src/pages/Blog.vue",
  "src/assets/styles/main.scss",
  "src/assets/styles/variables.scss",
  "src/assets/styles/animations.scss",
  "src/assets/images/logo.svg",
  "src/assets/images/hero.jpg",
  "src/utils/api.ts",
  "src/utils/helpers.ts",
  "src/utils/validation.ts",
  "src/utils/formatter.ts",
  "src/store/index.ts",
  "src/store/modules/user.ts",
  "src/store/modules/theme.ts",
  "src/store/modules/projects.ts",
  "src/composables/useAuth.ts",
  "src/composables/useTheme.ts",
  "src/composables/useProjects.ts",
  "src/types/User.ts",
  "src/types/Project.ts",
  "src/types/Theme.ts",
  "src/services/AuthService.ts",
  "src/services/ProjectService.ts",
  "src/services/ApiService.ts",
  "package.json",
  "tsconfig.json",
  "vite.config.ts",
  "README.md",
];

const {
  text: filesText,
  startTyping: startFilesTyping,
  isCompleted: isFilesCompleted,
  isTyping: isFilesTyping,
} = useTypeWriter({
  texts: filesTextInitial.map((text) => `\n${text}`),
  delay: 0,
  speed: 5,
  caretAnimation: false,
  persistLines: filesTextInitial.map(() => true),
});

watch(isWelcomeCompleted, (hasCompleted) => {
  if (hasCompleted) {
    startSystemsTyping();
  }
});

watch(isSystemsCompleted, async (hasCompleted) => {
  if (hasCompleted) {
    await startFilesTyping();
  }
});

watch(isFilesCompleted, (hasCompleted) => {
  if (hasCompleted) {
    router.push("/home");
  }
});

onMounted(() => {
  startWelcomeTyping();
});
</script>

<style lang="scss" scoped>
@use "@/styles/fonts.scss" as *;
@use "@/styles/general.scss" as *;
@use "@/styles/colors.scss" as *;

.OnBoarding {
  @apply h-screen bg-black;

  &::before {
    @apply absolute inset-0 m-5;
    content: "";
    background-image: url("/svg/onboarding-frame-1.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

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

.expand-animation {
  animation: expand 1s ease-in-out;
}

@keyframes expand {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 40vw;
    opacity: 1;
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
