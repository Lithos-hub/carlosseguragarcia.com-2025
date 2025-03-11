<template>
  <div class="OnBoarding">
    <code class="text-green">{{ text }}</code>
    <p v-if="isTyping">Escribiendo...</p>
  </div>
</template>

<script lang="ts" setup>
import { useTypeWriter } from "@/composables/useTypeWriter";
const emit = defineEmits(["onboarding-completed"]);

const { text, isTyping, startTyping } = useTypeWriter({
  text: "Hola, soy una máquina de escribir",
  delay: 1000,
  speed: 100,
  caretAnimation: true,
  caretSymbol: "|",
  caretSpeed: 400,
});
</script>
