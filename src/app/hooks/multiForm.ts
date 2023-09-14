import { useState } from "react";

export default function multiForm() {
  const [step, setStep] = useState<number>(2);

  function nextStep(stepValue: number) {
    if (stepValue <= 4) {
      setStep(stepValue + 1);
    }
  }

  function backStep(stepValue: number) {
    if (stepValue > 1) {
      setStep(stepValue - 1);
    }
  }

  const isLastStep = step == 4 ? true : false;

  return { step, nextStep, backStep, isLastStep };
}
