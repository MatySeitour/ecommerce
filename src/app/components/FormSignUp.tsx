"use client";

import { Button } from "@nextui-org/button";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import multiForm from "../hooks/multiForm";
import FormFirstStep from "./formsSignup/FormFirstStep";
import FormSecondStep from "./formsSignup/FormSecondStep";
import { firstStepSchema, secondStepSchema } from "../schemas/signup.schema";
import { stepsState, useStepExample } from "../store/stepsStore";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { motion } from "framer-motion";
import Steps from "./Steps";

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
    nextStep,
    addValuesForm,
    // setStep,
  } = multiForm();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(step === 1 ? firstStepSchema : secondStepSchema),
  });

  const { firstStep, secondStep, completeSecondStep } = stepsState();

  const onSubmit = async (data: FieldValues) => {
    if (step == 1) {
      const a = await verifyEmail(data);
      if (a == false) {
        router.push("/error-server");
      }
    }
    if (step == 2) {
      nextStep(1, data);
      completeSecondStep();
    }
    if (step == 3) {
      addValuesForm(data);
      const a = await sendData(values);
      console.log(a);
    }
    if (skipState) {
      try {
        skipSignUp(data);
        const a = await sendData(values);
        console.log(a);
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
    <div className={`h-full w-full overflow-hidden`}>
      <div
        className={
          step != 4
            ? "visible flex h-full w-full flex-col items-center justify-center gap-4 px-6 py-2 transition-all"
            : "invisible hidden h-full w-full flex-col items-center justify-center gap-4 px-6 py-2 transition-all"
        }
      >
        <Steps />
        {/* <span className="text-sm text-secondary">{`Paso ${step} / 3`}</span> */}
        <h2 className="text-3xl font-extrabold text-primary">
          Crea tu negocio
        </h2>
        <h3 className="text-lg font-medium text-primary">
          Crea el perfil de tu negocio online{" "}
        </h3>
        {/* {step != 1 && (
          <div className="max-w-sm text-xs font-semibold text-secondary">
            Si desear agregar más datos sobre tu negocio más tarde, puedes
            saltearte todos estos pasos.
          </div>
        )} */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="relative h-60 overflow-hidden px-2">
            {step >= 1 && (
              <FormFirstStep
                step={step}
                errors={errors}
                register={register}
                errorEmail={errorEmail}
              />
            )}

            {step >= 1 && (
              <FormSecondStep step={step} errors={errors} register={register} />
            )}
          </div>
          <span
            className={`text-center text-primary opacity-0 transition-opacity ${
              step > 1 && `opacity-100 transition-opacity`
            }`}
          >
            Si lo deseas, puedes omitir los pasos siguientes para completarlos
            más tarde.
          </span>
          <div className="text-center">
            <p className="text-xs">
              Esta información se guardará de forma segura según{" "}
              <b className="underline">
                los términos de servicio y la política de privacidad.
              </b>
            </p>
          </div>
          {/* {!errorServer && (
            <div className="text-2xl text-error-medium">
              Lo sentimos, estamos teniendo problemas
            </div>
          )} */}
          <div className="flex flex-row items-center justify-center gap-4">
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
                className="w-full max-w-[7rem] bg-details-medium text-white hover:bg-details-medium/90"
                radius="sm"
                size="md"
                type="submit"
              >
                {isSubmitting ? "" : "Omitir"}
              </Button>
            )}
          </div>
        </form>
      </div>
      <div
        className={
          step == 4
            ? "flex h-full w-full items-center justify-center"
            : "h-0 w-0"
        }
      >
        {step == 4 && (
          <motion.div
            initial={{ translateY: 1000 }}
            animate={{ translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className={"h-[300px] w-[500px] rounded-md bg-white"}
          >
            <div className="h-full w-full">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                <HiMiniCheckCircle className="h-24 w-24 text-green-400" />
                <div></div>
                <p className="mb-4 text-center text-xl font-medium text-primary">
                  ¡Tu cuenta fue creada con éxito!
                </p>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  color="primary"
                  variant="shadow"
                  className="w-full max-w-[18rem] bg-success text-white hover:bg-success/90"
                  radius="sm"
                  isLoading={isSubmitting ? true : false}
                >
                  {isSubmitting ? "" : "Iniciar sesión"}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
