import { create } from "zustand";

interface StepValue {
  step: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  logoFile: any;
  setFileData: (value: File | string) => void;
  skip: () => void;
  setNewStep: (value: number) => void;
}

interface StepsState {
  firstStep: boolean;
  secondStep: boolean;
  thirdStep: boolean;
  completeFirstStep: () => void;
  completeSecondStep: () => void;
  completeThirdStep: () => void;
}

export const useStep = create<StepValue>((set) => ({
  step: 1,
  logoFile: "",
  increment: (value: number) =>
    set((state: any) => ({ step: state.step + value })),
  decrement: (value: number) =>
    set((state: any) => ({ step: state.step - value })),
  setFileData: (value: File | string) => set(() => ({ logoFile: value })),
  skip: () => set(() => ({ step: 4 })),
  setNewStep: (value: number) => set((state: any) => ({ step: value })),
}));

export const stepsState = create<StepsState>((set) => ({
  firstStep: false,
  secondStep: false,
  thirdStep: false,
  completeFirstStep: () => set(() => ({ firstStep: true })),
  completeSecondStep: () => set(() => ({ secondStep: true })),
  completeThirdStep: () => set(() => ({ thirdStep: true })),
}));
