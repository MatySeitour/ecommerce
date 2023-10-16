"use client";

import multiForm from "../hooks/multiForm";
import { stepsState, useStepExample } from "../store/stepsStore";
import { BsCheckCircle } from "react-icons/bs";

export default function Steps() {
  const { step } = useStepExample();
  const { firstStep, secondStep, thirdStep } = stepsState();
  console.log(step);

  return (
    <div className="flex h-20 w-full items-center justify-center">
      <div className="flex h-8 w-auto items-center justify-center">
        <div className="flex flex-col">
          <span className="translate-x-0.5 text-details-low">Paso 1</span>
          <div className="flex h-full w-auto flex-row items-center justify-center">
            <div
              className={
                !firstStep
                  ? `flex h-14 w-14 justify-center rounded-full ${
                      step == 1
                        ? `border-2 border-details-low bg-white`
                        : `bg-details-low`
                    } transition-all`
                  : `h-14 w-14 rounded-full bg-success transition-all`
              }
            >
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden">
                <span
                  className={`absolute translate-y-0 text-center text-xl ${
                    step == 1 ? `text-details-low` : `text-white`
                  } ${
                    firstStep && `hidden translate-y-40 transition-all`
                  } transition-all`}
                >
                  1
                </span>
                <BsCheckCircle
                  className={`h-8 w-10 -translate-y-40 text-center text-white ${
                    firstStep && `!translate-y-0 transition-all`
                  } transition-all`}
                ></BsCheckCircle>
              </div>
            </div>
            <div className="relative flex h-full items-center justify-center gap-4">
              <div
                className={
                  firstStep == false
                    ? "step-line flex h-1 w-10 flex-row opacity-80 transition-all"
                    : "step-line step-line__active flex h-1 w-10 flex-row transition-all"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-8 w-auto flex-row items-center justify-center">
        <div className="flex flex-col">
          <span className="translate-x-0.5 text-details-low">Paso 2</span>

          <div className="flex h-full w-auto flex-row items-center justify-center">
            <div
              className={
                !secondStep
                  ? `flex h-14 w-14 justify-center rounded-full ${
                      !firstStep && `opacity-40`
                    } bg-details-low transition-all`
                  : `h-14 w-14 rounded-full bg-success transition-all ${
                      !firstStep && `opacity-40`
                    }`
              }
            >
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden">
                <span
                  className={`absolute translate-y-0 text-center text-xl text-white ${
                    secondStep && `hidden translate-y-40 transition-all`
                  } transition-all`}
                >
                  2
                </span>
                <BsCheckCircle
                  className={`h-8 w-10 -translate-y-40 text-center text-white ${
                    secondStep && `!translate-y-0 transition-all`
                  } transition-all`}
                ></BsCheckCircle>
              </div>
            </div>
            <div className="relative flex h-full items-center justify-center gap-4">
              <div
                className={
                  secondStep == false
                    ? "step-line flex h-1 w-10 flex-row opacity-80 transition-all"
                    : "step-line step-line__active flex h-1 w-10 flex-row transition-all"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-8 w-auto flex-row items-center justify-center">
        <div>
          <span className="translate-x-1 text-details-low">Paso 3</span>
          <div>
            <div
              className={
                !thirdStep
                  ? `flex h-14 w-14 justify-center rounded-full bg-details-low transition-all ${
                      !firstStep && `opacity-40`
                    } ${!secondStep && `opacity-40`}`
                  : `h-14 w-14 rounded-full bg-success transition-all ${
                      !firstStep && !secondStep && `opacity-40`
                    }`
              }
            >
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden">
                <span
                  className={`absolute translate-y-0 text-center text-xl text-white ${
                    thirdStep && `hidden translate-y-40 transition-all`
                  } transition-all`}
                >
                  3
                </span>
                <BsCheckCircle
                  className={`h-10 w-10 -translate-y-40 text-center text-white ${
                    thirdStep && `!translate-y-0 transition-all`
                  } transition-all`}
                ></BsCheckCircle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
