interface UseTypeWriterProps {
  texts: string[];
  delay: number;
  speed: number;
  caretAnimation?: boolean;
  caretSymbol?: string;
  caretSpeed?: number;
  persistLines?: boolean[];
}

export const useTypeWriter = ({
  texts,
  delay,
  speed,
  caretAnimation = true,
  caretSymbol = "|",
  caretSpeed = 500,
  persistLines = [],
}: UseTypeWriterProps) => {
  const textRef = ref("");
  const isTyping = ref(false);
  const caret = ref("");
  const isCompleted = ref(false);

  // Manage the caret animation
  const startCaretAnimation = () => {
    if (!caretAnimation) return;

    const caretInterval = setInterval(() => {
      caret.value = caret.value === caretSymbol ? "" : caretSymbol;
    }, caretSpeed);

    return caretInterval;
  };

  const startTyping = async () => {
    isTyping.value = true;
    textRef.value = "";
    isCompleted.value = false;

    const caretInterval = startCaretAnimation();

    await new Promise((resolve) => setTimeout(resolve, delay));

    for (let i = 0; i < texts.length; i++) {
      const text = texts[i];
      const shouldPersist = persistLines[i] || false;

      for (let j = 0; j < text.length; j++) {
        textRef.value += text[j];
        await new Promise((resolve) => setTimeout(resolve, speed));
      }

      if (!shouldPersist) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        textRef.value = "";
      }
    }

    isTyping.value = false;
    isCompleted.value = true;

    if (caretInterval) {
      clearInterval(caretInterval);
      caret.value = "";
    }
  };

  const displayText = computed(() => `${textRef.value}${caret.value}`);

  return {
    text: displayText,
    isTyping,
    isCompleted,
    startTyping,
  };
};
