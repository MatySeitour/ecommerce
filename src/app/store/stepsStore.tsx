import { create } from "zustand";

interface StepValue {
  step: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  skip: () => void;
}

interface StepsState {
  firstStep: boolean;
  secondStep: boolean;
  thirdStep: boolean;
  completeFirstStep: () => void;
  completeSecondStep: () => void;
  completeThirdStep: () => void;
}

export const useStepExample = create<StepValue>((set) => ({
  step: 1,
  increment: (value: number) =>
    set((state: any) => ({ step: state.step + value })),
  decrement: (value: number) =>
    set((state: any) => ({ step: state.step - value })),
  skip: () => set(() => ({ step: 4 })),
}));

export const stepsState = create<StepsState>((set) => ({
  firstStep: false,
  secondStep: false,
  thirdStep: false,
  completeFirstStep: () => set(() => ({ firstStep: true })),
  completeSecondStep: () => set(() => ({ secondStep: true })),
  completeThirdStep: () => set(() => ({ thirdStep: true })),
}));
