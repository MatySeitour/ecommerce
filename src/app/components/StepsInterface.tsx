"use client";

import { useStepExample } from "../store/stepsStore";

export default function StepsInterface() {
  // const { step, skipState } = multiForm();
  const { step } = useStepExample();
  console.log(step);

  return (
    <article
      className={
        step != 4
          ? "visible flex h-screen w-[30rem] flex-col items-center justify-center bg-slate-400 py-10 transition-all duration-700"
          : "invisible flex h-screen w-0 flex-col items-center justify-center bg-slate-400 py-10 transition-all duration-700"
      }
    >
      <div className="flex h-screen flex-col items-center justify-center">
        <span className="text-2xl text-primary">Paso 1</span>
        <div className="flex h-full translate-x-[50%] items-center justify-center">
          <div className="flex h-full w-0.5 flex-col bg-black"></div>
          <div>asdsad</div>
        </div>
      </div>
      <span>Paso {step}</span>
      <div className="flex h-screen w-0.5 flex-col bg-black"></div>
      <span>Paso 3</span>
      <div className="flex h-screen w-0.5 flex-col bg-black"></div>
      <span className={step == 4 ? "text-red-400" : ""}>Paso 4</span>
    </article>
  );
}
