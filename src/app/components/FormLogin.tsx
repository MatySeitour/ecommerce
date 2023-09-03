"use client";

import Link from "next/link";
import { Button } from "@nextui-org/button";
import LoginWithOther from "./LoginWithOther";
import LoginInputs from "./inputs/LoginInputs";
import { loginFormSubmit } from "../utils/login";
import { useForm, FieldValues } from "react-hook-form";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    reset();
  };
  return (
    <div className="h-auto w-auto bg-white shadow-lg rounded-3xl px-4 py-8 md:w-full md:max-w-[35rem]">
      <div className="flex-col flex gap-4">
        <div className="flex justify-center items-center flex-col gap-2">
          <h2 className="text-2xl font-semibold text-primary">
            Iniciar sesión
          </h2>
          <p className="text-xs text-center px-6 font-normal text-primary">
            Ingresa tus datos para iniciar sesión en tu cuenta.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginInputs register={register} />
          <div className="flex flex-col gap-4 items-center justify-center">
            <Link
              className="flex justify-start items-center mb-4"
              href={"/recovery-password"}
            >
              <p className="text-xs text-primary font-semibold pl-1 text-center">
                ¿Has olvidado tu contraseña?
              </p>
            </Link>
          </div>
          <div className="w-full flex justify-center items-center">
            <Button
              disabled={isSubmitting}
              type="submit"
              color="primary"
              variant="shadow"
              className="w-full bg-details-medium text-white hover:bg-details-medium/90 max-w-[18rem]"
              radius="sm"
            >
              Iniciar sesión
            </Button>
          </div>
        </form>
        <LoginWithOther />
        <div className="text-[0.6rem] flex justify-center gap-1">
          ¿No tienes una cuenta?{" "}
          <Link href={"/register"} className="inline-block">
            <b>Creála ahora</b>
          </Link>
        </div>
      </div>
    </div>
  );
};
