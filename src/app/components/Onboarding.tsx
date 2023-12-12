"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import OnboardingFirst from "./Onboarding/OnboardingFirst";
import OnboardingSecond from "./Onboarding/OnboardingSecond";

export default function Onboarding() {
  const [stepOnboarding, setStepOnboarding] = useState(1);

  useEffect(() => {
    console.log(stepOnboarding);
  }, [stepOnboarding]);

  const containerSignUpAnimation2 = {
    visible: {
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        staggerChildren: 0.7,
        duration: 0.5,
      },
    },
  };

  const itemAnimation2 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: [0.7, 0.8, 0.6, 1],
        duration: 0.5,
      },
    },
  };
  console.log(stepOnboarding);
  return (
    <div>
      <div className="flex h-[32rem] w-full flex-col gap-4 rounded-md">
        <div className="flex h-full w-full flex-col items-center justify-center">
          {stepOnboarding == 1 && <OnboardingFirst />}
          {stepOnboarding == 2 && <OnboardingSecond />}
        </div>
      </div>

      <motion.div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="flex gap-8">
          {stepOnboarding > 1 && (
            <Button
              onClick={() => {
                setStepOnboarding((prev) => prev - 1);
              }}
              className="w-24 scale-110 bg-white text-details-strong shadow-lg"
            >
              Atrás
            </Button>
          )}
          <Button
            onClick={() => {
              setStepOnboarding((prev) => prev + 1);
            }}
            className="w-24 scale-110 bg-white text-details-strong shadow-lg"
          >
            Siguiente
          </Button>
        </div>
        <div className="flex h-8 w-full items-center justify-center">
          <div className="flex h-3 w-16 justify-between ">
            <div
              className={`h-3 w-3 ${
                stepOnboarding == 1 && `scale-125 bg-white transition-all`
              } rounded-full border border-white transition-all`}
            ></div>
            <div
              className={`h-3 w-3 ${
                stepOnboarding == 2 && `scale-125 bg-white transition-all`
              } rounded-full border border-white transition-all`}
            ></div>
            <div
              className={`h-3 w-3 ${
                stepOnboarding == 3 && `scale-125 bg-white transition-all`
              } rounded-full border border-white transition-all`}
            ></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
