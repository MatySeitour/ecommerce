import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function FormSignUp() {
  return (
    <div
      className="h-auto w-96 px-4 py-2 flex flex-col gap-2
          "
    >
      <span className="text-sm text-secondary">Paso 01 / 04</span>
      <h2 className="text-3xl text-primary font-extrabold">Crea tu negocio</h2>
      <h3 className="text-lg text-primary font-medium">
        Crea el perfil de tu negocio online{" "}
      </h3>
      <form className="flex flex-col gap-4">
        <Input
          type="text"
          label="Nombre del negocio"
          labelPlacement="outside"
          placeholder="Escribe el nombre de tu negocio"
          className="text-primary h-auto "
          classNames={{
            inputWrapper: [
              "p-2",
              "group-data-[focus=true]:border-details-low rounded-[4px] min-h-4 max-h-8",
            ],
            label: ["text-primary font-semibold text-xs"],
          }}
        />
        <Input
          type="email"
          label="Correo Electrónico"
          labelPlacement="outside"
          placeholder="Escribe el correo electrónico "
          className="text-primary"
          classNames={{
            inputWrapper: [
              "p-2",
              "group-data-[focus=true]:border-details-low rounded-[4px] min-h-4 max-h-8",
            ],
            label: ["text-primary font-semibold text-xs"],
          }}
        />
        <Input
          type="password"
          label="Contraseña"
          labelPlacement="outside"
          placeholder="Escribe una contraseña de tu cuenta"
          className="text-primary"
          classNames={{
            inputWrapper: [
              "p-2",
              "group-data-[focus=true]:border-details-low rounded-[4px] min-h-4 max-h-8",
            ],
            label: ["text-primary font-semibold text-xs"],
          }}
        />
        <Input
          type="password"
          label="Confirmar contraseña"
          labelPlacement="outside"
          placeholder="Vuelve a escribir la contraseña"
          className="text-primary"
          classNames={{
            inputWrapper: [
              "p-2",
              "group-data-[focus=true]:border-details-low min-h-4 rounded-[4px] max-h-8",
            ],
            label: ["text-primary font-semibold text-xs"],
          }}
        />
        <Input
          type="text"
          label="Numero de teléfono - celular"
          labelPlacement="outside"
          placeholder="Escribe un numero de teléfono"
          className="text-primary"
          classNames={{
            inputWrapper: [
              "p-2",
              "group-data-[focus=true]:border-details-low min-h-4 rounded-[4px] max-h-8",
            ],
            label: ["text-primary font-semibold text-xs"],
          }}
        />
        <p className="text-xs">
          Esta información se guardará de forma segura según{" "}
          <b className="underline">
            los términos de servicio y la política de privacidad.
          </b>
        </p>
        <div className="flex flex-row justify-center items-center gap-4">
          <Button
            className="bg-white text-details-medium"
            radius="sm"
            size="md"
          >
            Ayuda?
          </Button>
          <Button
            className="bg-details-medium text-white w-full"
            radius="sm"
            size="md"
          >
            Siguiente paso
          </Button>
        </div>
      </form>
    </div>
  );
}
