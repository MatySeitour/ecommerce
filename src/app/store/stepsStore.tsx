import { create } from "zustand";

interface StepValue {
  step: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  skip: () => void;
}

export const useStepExample = create<StepValue>((set) => ({
  step: 1,
  increment: (value: number) =>
    set((state: any) => ({ step: state.step + value })),
  decrement: (value: number) =>
    set((state: any) => ({ step: state.step - value })),
  skip: () => set(() => ({ step: 4 })),
}));
