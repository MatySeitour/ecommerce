import SignupInput from "../inputs/SignupInput";
import { useState } from "react";

export default function FormFirstStep({
  step,
  errors,
  register,
  errorEmail,
  errorPhone,
}: {
  step: number;
  errors: any;
  register: any;
  errorEmail: number | undefined;
  errorPhone: number | undefined;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <div
        className={
          step === 1
            ? `visible flex h-full w-full translate-x-0 flex-col gap-8 transition-all sm:absolute sm:grid sm:h-auto sm:grid-cols-2 sm:gap-4 sm:pr-4`
            : `invisible absolute grid -translate-x-[40rem] grid-cols-2 gap-4 transition-all`
        }
      >
        <SignupInput
          register={register}
          label="Nombre del negocio"
          field="company"
          placeholder="Escribe el nombre de tu negocio"
          errorMessage={errors?.company?.message}
        />
        <SignupInput
          register={register}
          label="Correo Electrónico"
          field="email"
          placeholder="Escribe el correo electrónico"
          errorMessage={errors?.email?.message}
          errorEmail={errorEmail}
        />
        <SignupInput
          register={register}
          label="Contraseña"
          field="password"
          placeholder="Escribe una contraseña"
          errorMessage={errors?.password?.message}
          isVisible={isVisible}
          handleVisible={toggleVisibility}
        />
        <SignupInput
          register={register}
          label="Confirmar contraseña"
          field="confirmPassword"
          placeholder="Vuelve a escribir la contraseña"
          errorMessage={errors?.confirmPassword?.message}
          isVisible={isVisible}
          handleVisible={toggleVisibility}
        />
        <SignupInput
          register={register}
          label="Numero de teléfono - celular"
          field="phone"
          placeholder="Escribe un numero de teléfono"
          errorMessage={errors?.phone?.message}
          errorPhone={errorPhone}
        />
      </div>
    </>
  );
}
