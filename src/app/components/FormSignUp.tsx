"use client";

import { Button } from "@nextui-org/button";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import multiForm from "../functions/multiForm";
import FormFirstStep from "./formsSignup/FormFirstStep";
import FormSecondStep from "./formsSignup/FormSecondStep";
import { firstStepSchema, secondStepSchema } from "../schemas/signup.schema";
import { stepsState, useStep } from "../store/stepsStore";
import Steps from "./Steps";
import { motion } from "framer-motion";

import AccountSuccess from "./AccountSuccess";

export default function FormSignUp() {
  const router = useRouter();

  const {
    step,
    backStep,
    verifyEmail,
    errorEmail,
    skipState,
    setSkipState,
    skipSignUp,
    values,
    sendData,
    errorPhone,
    nextStep,
    addValuesForm,
    verifyPhone,
  } = multiForm();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(step === 1 ? firstStepSchema : secondStepSchema),
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

  const { completeSecondStep, completeFirstStep } = stepsState();
  const { logoFile } = useStep();

  const onSubmit = async (data: FieldValues) => {
    if (step == 1) {
      const isEmailValidate = await verifyEmail(data);
      const isPhoneValidate = await verifyPhone(data);
      // if (isEmailValidate == false || isPhoneValidate == false) {
      //   router.push("/error-server");
      // }
      if (isEmailValidate && isPhoneValidate) {
        nextStep(step, data);
        completeFirstStep();
      }
    }
    if (step == 2) {
      const dataWithImage = { ...data, logoCompany: logoFile };
      nextStep(1, dataWithImage);
      completeSecondStep();
    }
    if (step == 3) {
      const dataWithImage3 = { ...data, logoCompany: logoFile };
      addValuesForm(dataWithImage3);
      if (values != undefined) {
        const a = await sendData(values);
        console.log(a);
      }
    }
    if (skipState) {
      try {
        skipSignUp(data);
        if (values != undefined) {
          const a = await sendData(values);
          console.log(a);
        }
        // skip();
      } catch (e) {
        console.error(e);
        setSkipState(false);
      }
      // setStep(4);
    }
  };
  console.log(values);

  return (
    <div className={`h-full w-full overflow-y-scroll sm:overflow-hidden`}>
      <motion.div
        variants={containerSignUpAnimation}
        initial="hidden"
        animate="visible"
        className={
          step != 4
            ? "flex h-full flex-col gap-6 sm:items-center sm:justify-center md:gap-8 md:px-10 lg:visible lg:w-full lg:py-2 lg:transition-all"
            : "invisible hidden h-full w-full flex-col items-center justify-center gap-4 px-10 py-2 transition-all"
        }
      >
        <motion.div
          className="shadow-mobile__steps flex w-full flex-col gap-4 py-4 sm:w-auto sm:shadow-none"
          variants={itemAnimation}
        >
          <Steps />

          <motion.h2
            variants={itemAnimation}
            className="text-center text-4xl font-extrabold text-primary"
          >
            Crea tu negocio
          </motion.h2>
          <motion.h3
            variants={itemAnimation}
            className="text-center text-lg font-medium text-details-low"
          >
            Crea el perfil de tu negocio online{" "}
          </motion.h3>
        </motion.div>

        <motion.form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-full flex-col gap-6 px-4 sm:h-auto sm:gap-4 sm:px-0"
        >
          <motion.div
            variants={itemAnimation}
            className="relative flex h-full items-center justify-center overflow-hidden sm:h-64"
          >
            {step >= 1 && (
              <FormFirstStep
                step={step}
                errors={errors}
                register={register}
                errorEmail={errorEmail}
                errorPhone={errorPhone}
              />
            )}

            {step >= 1 && (
              <FormSecondStep step={step} errors={errors} register={register} />
            )}
          </motion.div>
          <motion.div variants={itemAnimation} className="text-center">
            <p className="text-xs">
              Esta información se guardará de forma segura según{" "}
              <b className="underline">
                los términos de servicio y la política de privacidad.
              </b>
            </p>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            className="flex flex-row items-center justify-center gap-4"
          >
            <Button
              className={`bg-white text-details-medium hover:bg-white/40 ${
                step < 2 && `hidden`
              }`}
              radius="sm"
              onClick={() => backStep(step)}
              size="md"
            >
              Atrás
            </Button>
            <Button
              isLoading={isSubmitting ? true : false}
              className={`w-full bg-details-medium text-white hover:bg-details-medium/90 `}
              radius="sm"
              size="md"
              type="submit"
            >
              {isSubmitting ? "" : "Siguiente paso"}
            </Button>
            {step > 1 && (
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
            )}
          </motion.div>
        </motion.form>
      </motion.div>
      <div
        className={
          step == 4
            ? "flex h-full w-full items-center justify-center"
            : "h-0 w-0"
        }
      >
        {step == 4 && <AccountSuccess />}
      </div>
    </div>
  );
}
