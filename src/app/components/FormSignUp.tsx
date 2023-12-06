"use client";

import { Button } from "@nextui-org/button";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import multiForm from "../functions/multiForm";
import FormFirstStep from "./formsSignup/FormFirstStep";
import { firstStepSchema, secondStepSchema } from "../schemas/signup.schema";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useStep } from "../store/stepsStore";

export default function FormSignUp() {
  const router = useRouter();

  const { verifyEmail, errorEmail, sendData, errorPhone, verifyPhone } =
    multiForm();
  const { step } = useStep();
  const [loadingForm, setLoadingForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(firstStepSchema),
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
      const isEmailValidate = await verifyEmail(data);
      const isPhoneValidate = await verifyPhone(data);
      if (isEmailValidate && isPhoneValidate) {
        const a = await sendData(data);
        console.log(a);
        setLoadingForm(true);
        router.push("/verify-account");
      }
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
            ? "flex h-full flex-col items-center justify-center gap-6 sm:items-center sm:justify-center md:gap-8 md:px-10 lg:visible lg:w-full lg:py-2 lg:transition-all"
            : "invisible hidden h-full w-full flex-col items-center justify-center gap-4 px-10 py-2 transition-all"
        }
      >
        <motion.div
          className="flex w-full flex-col gap-4 py-4 sm:w-auto sm:shadow-none"
          variants={itemAnimation}
        >
          <motion.h2
            variants={itemAnimation}
            className="text-center text-4xl font-extrabold text-primary"
          >
            Crea tu cuenta
          </motion.h2>
          <motion.h3
            variants={itemAnimation}
            className="text-center text-lg font-medium text-details-low"
          >
            Crea una cuenta para administrar tu negocio online{" "}
          </motion.h3>
        </motion.div>

        <motion.form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-full flex-col justify-between gap-6 px-4 sm:h-auto sm:gap-4 sm:px-0"
        >
          <motion.div
            variants={itemAnimation}
            className="relative flex items-center justify-center overflow-hidden sm:h-64"
          >
            <FormFirstStep
              step={step}
              errors={errors}
              register={register}
              errorEmail={errorEmail}
              errorPhone={errorPhone}
            />
          </motion.div>

          <motion.div
            variants={itemAnimation}
            className="flex flex-col items-center justify-center gap-8"
          >
            <motion.div variants={itemAnimation} className="text-center">
              <p className="text-xs">
                Esta información se guardará de forma segura según{" "}
                <b className="underline">
                  los términos de servicio y la política de privacidad.
                </b>
              </p>
            </motion.div>
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
              isLoading={loadingForm ? true : false}
              className={`w-full max-w-sm bg-details-medium text-white hover:bg-details-medium/90 `}
              radius="sm"
              size="md"
              type="submit"
            >
              {loadingForm ? "" : "Crear cuenta"}
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
            <Link className="text-sm hover:underline" href={"/login"}>
              ¿Ya tienes una cuenta?
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}
