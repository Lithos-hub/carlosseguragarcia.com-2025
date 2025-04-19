export const ONBOARDING_CONSTANTS = {
  PHASE_ONE: {
    TEXTS: ["Starting systems", "Please wait..."],
    ANIMATION_DELAYS: {
      ATTENTION_ICON: 3000,
      SEPARATORS: 6000,
      MEMORY_TYPING: 3000,
      PHASE_START: 5000,
    },
  },
  PHASE_TWO: {
    ANIMATION_DELAY: 2000,
  },
  PHASE_THREE: {
    ANIMATION_DELAY: 2000,
  },
} as const;

export const ONBOARDING_ANIMATIONS = {
  DURATIONS: {
    EXPAND_FIRST_PHASE: 2000,
    EXPAND_SECOND_PHASE: 3000,
    FADE_THIRD_PHASE: 3000,
    ATTENTION_ICON: 1000,
    SEPARATORS: 1000,
    TEXT_FADE: 500,
  },
  TIMING_FUNCTIONS: {
    DEFAULT: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    EXPAND: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
} as const;
