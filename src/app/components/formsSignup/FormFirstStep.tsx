import { Input } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import { IoMdInformationCircleOutline } from "react-icons/io";
import SignupInput from "../inputs/SignupInput";
import { useState } from "react";

export default function FormFirstStep({
  step,
  errors,
  register,
  errorEmail,
}: {
  step: number;
  errors: any;
  register: any;
  errorEmail: number | undefined;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <div
        className={
          step === 1
            ? `visible absolute grid w-full translate-x-0 grid-cols-2 gap-4 pr-4 transition-all`
            : `invisible absolute grid -translate-x-96 grid-cols-2 gap-4 transition-all`
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
        />
      </div>
    </>
  );
}
