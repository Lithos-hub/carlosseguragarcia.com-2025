export type OnboardingPhase = "phaseOne" | "phaseTwo" | "phaseThree";

export interface OnboardingPhaseState {
  isCompleted: boolean;
  isTyping: boolean;
  text: string;
}

export interface OnboardingState {
  phaseOne: OnboardingPhaseState;
  phaseTwo: OnboardingPhaseState;
  phaseThree: OnboardingPhaseState;
  auxiliarTextsCompleted: number[];
}
