"use client";

import { Button } from "@nextui-org/button";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import multiForm from "../functions/multiForm";
import FormFirstStep from "./formsSignup/FormFirstStep";
import { firstStepSchema, secondStepSchema } from "../schemas/signup.schema";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FormSecondStep from "./formsSignup/FormSecondStep";
import Steps from "./StepsContainer";
import { useStep } from "../store/stepsStore";
import Image from "next/image";

export default function FormAccountSettings({
  logoImage,
  currentStep,
}: {
  logoImage: string;
  currentStep: number;
}) {
  const router = useRouter();

  const { sendFirstStepData } = multiForm();

  const { logoFile, step, setNewStep } = useStep();
  const [loadingForm, setLoadingForm] = useState(false);

  useEffect(() => {
    setNewStep(currentStep);
  }, [currentStep, setNewStep]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(secondStepSchema),
  });

  const containerSignUpAnimation = {
    visible: {
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        delayChildren: 0.1,
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        duration: 0.5,
      },
    },
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      const dataWithImage = { ...data, logoCompany: logoFile };
      console.log("este es data", dataWithImage);
      const a = await sendFirstStepData(dataWithImage);
      console.log(a);
      setNewStep(currentStep + 1);
      setLoadingForm(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={`h-full w-full overflow-y-scroll sm:overflow-hidden`}>
      <motion.div
        variants={containerSignUpAnimation}
        initial="hidden"
        animate="visible"
        className={
          step != 4
            ? "flex h-full flex-col gap-6 sm:items-center sm:justify-center sm:gap-8 sm:px-10 lg:visible lg:w-full lg:py-2 lg:transition-all"
            : "invisible hidden h-full w-full flex-col items-center justify-center gap-4 px-10 py-2 transition-all"
        }
      >
        <motion.div
          className="sm:min-w-[40rem] sm:max-w-7xl sm:rounded-md sm:bg-white sm:p-4"
          variants={itemAnimation}
        >
          <motion.div
            className="shadow-mobile__steps flex w-full flex-col gap-4 py-4 sm:w-auto sm:shadow-none"
            variants={itemAnimation}
          >
            <Steps />
            <motion.div
              className="flex w-full justify-center"
              variants={itemAnimation}
            >
              <motion.h2
                variants={itemAnimation}
                className="max-w-sm text-center text-4xl font-extrabold text-primary"
              >
                Crea el perfil de tu negocio online{" "}
              </motion.h2>
            </motion.div>
            <motion.h3
              variants={itemAnimation}
              className="text-center text-lg font-medium text-details-low"
            ></motion.h3>
          </motion.div>

          <motion.form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 px-4 sm:h-auto sm:gap-4 sm:px-0"
          >
            <motion.div
              variants={itemAnimation}
              className="relative flex items-center justify-center overflow-hidden py-10 sm:h-72"
            >
              <FormSecondStep
                step={step}
                errors={errors}
                register={register}
                logoImage={logoImage}
              />
            </motion.div>

            <motion.div
              variants={itemAnimation}
              className="flex flex-row items-center justify-center gap-4"
            >
              {/* <Button
              className={`bg-white text-details-medium hover:bg-white/40 ${
                step < 2 && `hidden`
              }`}
              radius="sm"
              onClick={() => backStep(step)}
              size="md"
            >
              Atrás
            </Button> */}
              <Button
                isLoading={isSubmitting ? true : false}
                className={`w-full bg-details-medium text-white hover:bg-details-medium/90 `}
                radius="sm"
                size="md"
                type="submit"
              >
                {isSubmitting ? "" : "Siguiente paso"}
              </Button>
              {/* {step > 1 && (
              <Button
                onClick={() => setSkipState(true)}
                isLoading={isSubmitting ? true : false}
                className="w-full max-w-[7rem] bg-details-low text-white hover:bg-details-medium/60"
                radius="sm"
                size="md"
                type="submit"
              >
                {isSubmitting ? "" : "Omitir"}
              </Button>
            )} */}
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
}
