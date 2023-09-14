"use client";

import { Button } from "@nextui-org/button";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import multiForm from "../hooks/multiForm";
import FormFirstStep from "./formsSignup/FormFirstStep";
import FormSecondStep from "./formsSignup/FormSecondStep";
import { firstStepSchema, secondStepSchema } from "../schemas/signup.schema";

export default function FormSignUp() {
  const { step, backStep, nextStep, isLastStep } = multiForm();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(step === 1 ? firstStepSchema : secondStepSchema),
  });

  const [values, setValues] = useState<any>([]);
  const onSubmit = async (data: FieldValues, e: any) => {
    e.preventDefault();
    if (!isLastStep) {
      nextStep(step);
      setValues(() => {
        return { ...values, ...data };
      });
    }
  };

  console.log(values);
  return (
    <div className="flex h-auto w-auto flex-col gap-2 px-6 py-2 ">
      <span className="text-sm text-secondary">{`Paso ${step} / 4`}</span>
      <h2 className="text-3xl font-extrabold text-primary">Crea tu negocio</h2>
      <h3 className="text-lg font-medium text-primary">
        Crea el perfil de tu negocio online{" "}
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-xl flex-col gap-4"
      >
        <div className="relative h-60 overflow-hidden px-2">
          {step >= 1 && (
            <FormFirstStep step={step} errors={errors} register={register} />
          )}

          {step >= 1 && (
            <FormSecondStep step={step} errors={errors} register={register} />
          )}
        </div>

        <div className="text-center">
          <p className="text-xs">
            Esta información se guardará de forma segura según{" "}
            <b className="underline">
              los términos de servicio y la política de privacidad.
            </b>
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Button
            className="bg-white text-details-medium hover:bg-white/40"
            radius="sm"
            onClick={() => backStep(step)}
            size="md"
          >
            Atrás
          </Button>
          <Button
            // onClick={() => completeFormStep()}
            className="w-full bg-details-medium text-white hover:bg-details-medium/90"
            radius="sm"
            size="md"
            type="submit"
          >
            Siguiente paso
          </Button>
        </div>
      </form>
    </div>
  );
}
