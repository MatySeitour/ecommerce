import { Input } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import { IoMdInformationCircleOutline } from "react-icons/io";
import SignupInput from "../inputs/SignupInput";

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
          step={step}
          errors={errors}
          register={register}
          label="Nombre del negocio"
          field="company"
          placeholder="Escribe el nombre de tu negocio"
          type="text"
          errorMessage={errors?.company?.message}
        />
        <SignupInput
          step={step}
          errors={errors}
          register={register}
          label="Correo Electrónico"
          field="email"
          placeholder="Escribe el correo electrónico"
          errorMessage={errors?.email?.message}
          type="email"
          errorEmail={errorEmail}
        />
        <SignupInput
          step={step}
          errors={errors}
          register={register}
          label="Contraseña"
          field="password"
          placeholder="Escribe una contraseña"
          type="password"
          errorMessage={errors?.password?.message}
        />
        <SignupInput
          step={step}
          errors={errors}
          register={register}
          label="Confirmar contraseña"
          field="confirmPassword"
          placeholder="Vuelve a escribir la contraseña"
          type="password"
          errorMessage={errors?.confirmPassword?.message}
        />
        <SignupInput
          step={step}
          errors={errors}
          register={register}
          label="Numero de teléfono - celular"
          field="phone"
          placeholder="Escribe un numero de teléfono"
          type="text"
          errorMessage={errors?.phone?.message}
        />
        {/* <div className="flex items-center justify-center gap-2">
          <Input
            {...register("company", { required: "company is required" })}
            type="text"
            label="Nombre del negocio"
            id="company"
            labelPlacement="outside"
            placeholder="Escribe el nombre de tu negocio"
            className="h-auto text-primary"
            validationState={errors?.company?.message ? `invalid` : "valid"}
            classNames={{
              inputWrapper: [
                "p-2",
                "group-data-[focus=true]:border-details-low rounded-[4px] min-h-4 max-h-8 w-full group-data-[hover=true]:bg-white/30 group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0",
              ],
              label: [
                "text-primary font-semibold text-xs group-data-[invalid=true]:!text-error-strong",
              ],
              input: [
                "placeholder:group-data-[invalid=true]:text-error-medium",
              ],
            }}
          />
          {errors.company && (
            <div className="translate-y-2.5">
              <Tooltip
                className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
                content={`${errors?.company?.message}`}
              >
                <div>
                  <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
                </div>
              </Tooltip>
            </div>
          )}
        </div> */}
        {/* <div className="flex items-center justify-center gap-2">
          <Input
            type="email"
            {...register("email")}
            label="Correo Electrónico"
            labelPlacement="outside"
            id="email"
            placeholder="Escribe el correo electrónico "
            className="text-primary"
            validationState={
              errors?.email?.message
                ? `invalid`
                : errorEmail === 400
                ? "invalid"
                : "valid"
            }
            classNames={{
              inputWrapper: [
                "p-2",
                "group-data-[focus=true]:border-details-low rounded-[4px] min-h-4 max-h-8 w-full group-data-[hover=true]:bg-white/30",
              ],
              label: [
                "text-primary font-semibold text-xs group-data-[invalid=true]:!text-error-strong",
              ],
              input: [
                "placeholder:group-data-[invalid=true]:text-error-medium",
              ],
            }}
          />
          {errors.email && (
            <div className="translate-y-2.5">
              <Tooltip
                className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
                content={`${errors?.email?.message}`}
              >
                <div>
                  <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
                </div>
              </Tooltip>
            </div>
          )}
          {errorEmail === 400 && (
            <div className="translate-y-2.5">
              <Tooltip
                className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
                content={`Email no válido`}
              >
                <div>
                  <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
                </div>
              </Tooltip>
            </div>
          )}
        </div> */}

        {/* <div className="flex items-center justify-center gap-2">
          <Input
            type="password"
            {...register("password")}
            label="Contraseña"
            labelPlacement="outside"
            id="password"
            validationState={errors?.password?.message ? `invalid` : "valid"}
            placeholder="Escribe una contraseña"
            className="text-primary"
            classNames={{
              inputWrapper: [
                "p-2",
                "group-data-[focus=true]:border-details-low rounded-[4px] min-h-4 max-h-8 w-full group-data-[hover=true]:bg-white/30",
              ],
              label: [
                "text-primary font-semibold text-xs group-data-[invalid=true]:!text-error-strong",
              ],
              input: [
                "placeholder:group-data-[invalid=true]:text-error-medium",
              ],
            }}
          />
          {errors.password && (
            <div className="translate-y-2.5">
              <Tooltip
                className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
                content={`${errors?.password?.message}`}
              >
                <div>
                  <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
                </div>
              </Tooltip>
            </div>
          )}
        </div> */}
        {/* <div className="flex items-center justify-center gap-2">
          <Input
            type="password"
            {...register("confirmPassword")}
            label="Confirmar contraseña"
            validationState={
              errors?.confirmPassword?.message ? `invalid` : "valid"
            }
            id="confirmPassword"
            labelPlacement="outside"
            placeholder="Vuelve a escribir la contraseña"
            className="text-primary"
            classNames={{
              inputWrapper: [
                "p-2",
                "group-data-[focus=true]:border-details-low rounded-[4px] min-h-4 max-h-8 w-full group-data-[hover=true]:bg-white/30",
              ],
              label: [
                "text-primary font-semibold text-xs group-data-[invalid=true]:!text-error-strong",
              ],
              input: [
                "placeholder:group-data-[invalid=true]:text-error-medium",
              ],
            }}
          />
          {errors.confirmPassword && (
            <div className="translate-y-2.5">
              <Tooltip
                className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
                content={`${errors?.confirmPassword?.message}`}
              >
                <div>
                  <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
                </div>
              </Tooltip>
            </div>
          )}
        </div> */}
        {/* <div className="flex items-center justify-center gap-2">
          <Input
            type="text"
            label="Numero de teléfono - celular"
            {...register("phone")}
            labelPlacement="outside"
            id="phone"
            placeholder="Escribe un numero de teléfono"
            className="text-primary"
            validationState={errors?.phone?.message ? `invalid` : "valid"}
            classNames={{
              inputWrapper: [
                "p-2",
                "group-data-[focus=true]:border-details-low rounded-[4px] min-h-4 max-h-8 w-full group-data-[hover=true]:bg-white/30",
              ],
              label: [
                "text-primary font-semibold text-xs group-data-[invalid=true]:!text-error-strong",
              ],
              input: [
                "placeholder:group-data-[invalid=true]:text-error-medium",
              ],
            }}
          />
          {errors.phone && (
            <div className="translate-y-2.5">
              <Tooltip
                className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
                content={`${errors?.phone?.message}`}
              >
                <div>
                  <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
                </div>
              </Tooltip>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
}
