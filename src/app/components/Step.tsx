import { FaCheck } from "react-icons/fa6";

export default function Step({
  currentStep,
  stepNumber,
  lastStep,
}: {
  currentStep: number;
  stepNumber: number;
  lastStep: boolean;
}) {
  return (
    <div className="flex h-8 w-auto items-center justify-center">
      <div className="flex flex-col">
        {/* <span className="translate-x-0.5 text-details-low">Paso 1</span> */}
        <div className="flex h-full w-auto flex-col items-start justify-start">
          <span className="translate-x-1 text-sm text-details-low">
            Paso {stepNumber}
          </span>
          <div className="flex h-full w-auto flex-row items-center justify-center">
            <div
              className={
                currentStep <= stepNumber
                  ? `flex h-12 w-12 justify-center rounded-full ${
                      currentStep <= stepNumber
                        ? `border border-details-low bg-white`
                        : `bg-details-low`
                    } transition-all`
                  : `h-12 w-12 rounded-full bg-success transition-all`
              }
            >
              <div className="relative flex items-center justify-center overflow-hidden">
                <span
                  className={`absolute translate-y-0 text-center text-xl ${
                    currentStep <= stepNumber
                      ? `text-details-low`
                      : `text-white`
                  } ${
                    currentStep > stepNumber &&
                    `hidden translate-y-40 transition-all`
                  } transition-all`}
                >
                  {stepNumber}
                </span>
                <FaCheck
                  className={`h-12 w-12 -translate-y-40 p-2 text-center text-white ${
                    currentStep > stepNumber && `!translate-y-0 transition-all`
                  } transition-all`}
                ></FaCheck>
              </div>
            </div>
            {!lastStep && (
              <div className="relative flex h-full items-center justify-center gap-4">
                <div
                  className={
                    currentStep <= stepNumber
                      ? "step-line flex h-1 w-10 flex-row opacity-80 transition-all"
                      : "step-line step-line__active flex h-1 w-10 flex-row transition-all"
                  }
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
