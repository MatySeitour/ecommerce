"use client";

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

export default function LoginInputs({ register }: { register: any }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Input
        {...register("username", {
          required: "El usuario es requerido",
          minLength: {
            value: 5,
          },
        })}
        label="Nombre de usuario"
        labelPlacement="outside"
        id="username"
        variant="bordered"
        placeholder="Escribe tu nombre de usuario"
        radius="sm"
        className="max-w-xs focus:border-red-500"
        classNames={{
          inputWrapper: ["p-2", "group-data-[focus=true]:border-details-low"],
        }}
      />
      <Input
        label="Contraseña"
        labelPlacement="outside"
        id="password"
        variant="bordered"
        {...register("password", {
          required: "La contraseña es requerida",
          minLength: {
            value: 5,
          },
        })}
        placeholder="Escribe tu Contraseña"
        radius="sm"
        className="text- mb-2 max-w-xs"
        classNames={{
          inputWrapper: ["p-2", "group-data-[focus=true]:border-details-low"],
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
  );
}
