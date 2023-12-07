"use client";

import Link from "next/link";
import { Button } from "@nextui-org/button";
import LoginWithOther from "./LoginWithOther";
import { Input } from "@nextui-org/input";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { useForm, FieldValues } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

type FormValues = {
  email: string;
  password: string;
};

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const [isVisible, setIsVisible] = useState(false);

  const [errorLogin, setErrorLogin] = useState(false);
  const [errorServer, setErrorServer] = useState(false);

  const [redirectLoading, setRedirectLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (data: FieldValues) => {
    try {
      setErrorLogin(false);
      const res = await axios.postForm(
        "http://localhost:3000/login",
        {
          email: data.email,
          password: data.password,
        },
        { withCredentials: true },
      );
      setRedirectLoading(true);
      window.location.pathname = "/";
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.error(e);
        if (e.response?.status === 400) {
          setErrorLogin(true);
        } else {
          setErrorServer(true);
        }
      }
    }
  };
  return (
    <div className="h-auto w-auto rounded-3xl bg-white px-4 py-8 shadow-lg md:w-full md:max-w-[35rem]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl font-semibold text-primary">
            Iniciar sesión
          </h2>
          <p className="px-6 text-center text-xs font-normal text-secondary">
            Ingresa tus datos para iniciar sesión en tu cuenta.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center justify-center gap-4">
            <Input
              {...register("email")}
              label="Nombre de usuario"
              labelPlacement="outside"
              id="email"
              variant="bordered"
              placeholder="Escribe tu nombre de usuario"
              radius="sm"
              validationState={errorLogin ? "invalid" : "valid"}
              className="max-w-xs"
              classNames={{
                inputWrapper: [
                  "p-2",
                  "group-data-[focus=true]:border-details-low group-data-[invalid=true]:!border-error-medium",
                ],
                input: [
                  "group-data-[invalid=true]:text-secondary group-data-[invalid=true]:placeholder:text-secondary",
                ],
              }}
            />

            <Input
              label="Contraseña"
              labelPlacement="outside"
              id="password"
              variant="bordered"
              {...register("password")}
              validationState={errorLogin ? "invalid" : "valid"}
              placeholder="Escribe tu Contraseña"
              radius="sm"
              className="text- mb-2 max-w-xs"
              classNames={{
                inputWrapper: [
                  "p-2",
                  "group-data-[focus=true]:border-details-low group-data-[invalid=true]:!border-error-medium",
                ],
                input: [
                  "group-data-[invalid=true]:text-secondary group-data-[invalid=true]:placeholder:text-secondary",
                ],
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <BsEyeSlashFill className="pointer-events-none text-2xl text-details-medium" />
                  ) : (
                    <BsEyeFill className="pointer-events-none text-2xl text-details-medium" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Link
              className="mb-4 flex items-center justify-start"
              href={"/recovery-password"}
            >
              <p className="pl-1 text-center text-xs font-semibold text-primary">
                ¿Has olvidado tu contraseña?
              </p>
            </Link>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            {errorLogin && (
              <p className="max-w-[12rem] text-center text-xs text-error-medium">
                El nombre de usuario o la contraseña son incorrectos.
              </p>
            )}
            {errorServer && (
              <p className="max-w-[12rem] text-center text-xs text-error-medium">
                Estamos teniendo problemas para iniciar sesión. Ya estamos
                trabajando en eso.
              </p>
            )}

            <Button
              disabled={isSubmitting}
              type="submit"
              color="primary"
              className="w-full max-w-[18rem] bg-button-style text-white shadow-md hover:bg-details-medium/90"
              radius="sm"
              isLoading={redirectLoading ? true : false}
            >
              {redirectLoading ? "" : "Iniciar sesión"}
            </Button>
          </div>
        </form>
        <LoginWithOther />
        <div className="flex justify-center gap-1 text-[0.8rem]">
          ¿No tienes una cuenta?{" "}
          <Link href={"/signup"} className="inline-block">
            <b className="text-details-medium">Creála ahora</b>
          </Link>
        </div>
      </div>
    </div>
  );
};
