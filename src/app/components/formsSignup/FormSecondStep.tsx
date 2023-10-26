import { Tooltip } from "@nextui-org/tooltip";
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useStep } from "@/app/store/stepsStore";
import SignupInput from "../inputs/SignupInput";
import SelectInput from "../SelectsForm/SelectInput";
import TimeInput from "../inputs/TimeInput";

export default function FormSecondStep({
  step,
  errors,
  register,
}: {
  step: number;
  errors: any;
  register: any;
}) {
  const dateBusinessOpen = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  const [messageImageError, setMessageImageError] = useState<boolean>(false);
  const [selectBusiness, setSelectBusiness] = useState<string>("");

  const { logoFile, setFileData } = useStep();

  return (
    <div
      className={
        step === 2
          ? `visible absolute grid w-full translate-x-0 grid-cols-2 gap-4 transition-all`
          : `invisible absolute grid translate-x-[40rem] grid-cols-2 gap-4 transition-all`
      }
    >
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="flex flex-row items-center justify-center gap-4">
          <label
            htmlFor="logoCompany"
            className="flex h-24 w-24 cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-full border border-white/30 bg-white p-1 text-sm text-white outline-none placeholder:text-white focus:border-white"
          >
            {logoFile ? (
              <Image
                src={`${URL.createObjectURL(logoFile)}`}
                alt="user"
                width={500}
                height={500}
                className="object-cover"
              />
            ) : (
              <Image src={"/cookies.png"} alt="user" width={500} height={500} />
            )}
          </label>

          <input
            {...register("logoCompany", { required: "social is required" })}
            id="logoCompany"
            accept="image/png"
            onChange={(e) => {
              if (e.target.files) {
                if (
                  e?.target?.files[0]?.type != "image/png" &&
                  e?.target?.files[0]?.type != undefined
                ) {
                  setMessageImageError(true);
                } else {
                  if (e?.target?.files[0]?.name == undefined) {
                    setFileData(logoFile);
                  } else {
                    setFileData(e.target.files[0]);
                    setMessageImageError(false);
                  }
                }
              }
            }}
            type="file"
            className="hidden w-80 bg-black text-white"
            placeholder="John Doe"
            name="logoCompany"
          />
          <div className="flex flex-col gap-2">
            <label className="block origin-top-left pb-1.5 text-xs font-semibold text-primary transition-all !duration-200 !ease-out will-change-auto group-data-[invalid=true]:!text-error-strong motion-reduce:transition-none">
              {`Seleccionar logo (opcional)`}
            </label>
            <Button
              onClick={() => setFileData("")}
              // isLoading={isSubmitting ? true : false}
              isDisabled={logoFile ? false : true}
              className="w-full max-w-[8rem] bg-error-medium text-[0.7rem] text-white hover:bg-error-medium/90"
              radius="sm"
              size="sm"
              type="button"
            >
              Eliminar foto
            </Button>
            <span
              className={`text-[0.66rem] text-secondary ${
                messageImageError && `!text-error-medium`
              }`}
            >
              *Sólo imagenes con formato png.
            </span>
          </div>
        </div>
        {/* {messageImageError && (
          <span className="w-full text-center text-sm text-error-medium">
            Solo se permite imagenes con formato png.
          </span>
        )} */}
      </div>
      <SelectInput
        step={step}
        register={register}
        label="Provincia donde se ubica"
        field="province"
        errorMessage={errors?.province?.message}
        setSelectOption={setSelectBusiness}
        options={["Buenos Aires", "Córdoba", "Santa Fe", "Mendoza", "Tucumán"]}
      />
      <SelectInput
        step={step}
        register={register}
        label="Selecciona el partido donde se ubica"
        field="city"
        errorMessage={errors?.city?.message}
        setSelectOption={setSelectBusiness}
        options={[
          "La Plata",
          "Mar del Plata",
          "Bahía Blanca",
          "Tandil",
          "San Isidro",
        ]}
      />
      <SignupInput
        register={register}
        label="Direccón de tu negocio"
        field="businessAddress"
        placeholder="Escribe la Direccón de tu negocio"
        errorMessage={errors?.businessAddress?.message}
      />
      <div className=" flex w-full flex-col items-start justify-start gap-2">
        <label
          className={`${errors.openWeek && `!text-error-strong`} ${
            errors.closedWeek && `!text-error-strong`
          } block origin-top-left text-left  text-xs font-semibold text-primary transition-all !duration-200 !ease-out will-change-auto group-data-[invalid=true]:!text-error-strong motion-reduce:transition-none`}
        >
          Horarios disponibles
        </label>
        <div className="flex w-full flex-row items-center justify-center gap-2">
          <div className=" flex w-full  flex-col items-center justify-center">
            <Select
              aria-label="dia de apertura"
              classNames={{
                trigger: [
                  `min-h-4 max-h-8 w-full rounded-[4px] px-2 border ${
                    errors.openWeek &&
                    `border-red-500 bg-error-low text-error-medium`
                  }`,
                ],
                value: ["text-xs text-primary -translate-y-[.5rem]"],
              }}
              {...register("openWeek", { required: "social is required" })}
              className="max-w-xs"
            >
              {dateBusinessOpen.map((option) => (
                <SelectItem
                  onClick={() => setSelectBusiness(option)}
                  key={option}
                  value={option}
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
          {errors.openWeek && (
            <div className="">
              <Tooltip
                className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
                content={`${errors?.openWeek?.message}`}
              >
                <div>
                  <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
                </div>
              </Tooltip>
            </div>
          )}
          a
          <div className=" flex w-full flex-col items-center justify-center">
            <Select
              aria-label="dia de cierre"
              classNames={{
                trigger: [
                  `min-h-4 max-h-8 w-full rounded-[4px] px-2 border ${
                    errors.closedWeek &&
                    `border-red-500 bg-error-low text-error-medium`
                  }`,
                ],
                value: ["text-xs text-primary -translate-y-[.5rem]"],
                label: [
                  "text-xs group-data-[filled=true]:-translate-y-7 group-data-[filled=true]:-translate-x-2 group-data-[filled=true]:text-primary group-data-[filled=true]:text-xs group-data-[filled=true]:font-semibold",
                ],
              }}
              {...register("closedWeek", {
                required: "social is required",
              })}
              className="max-w-xs"
            >
              {dateBusinessOpen.map((option) => (
                <SelectItem
                  onClick={() => setSelectBusiness(option)}
                  key={option}
                  value={option}
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
          {errors.closedWeek && (
            <div className="">
              <Tooltip
                className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
                content={`${errors?.closedWeek?.message}`}
              >
                <div>
                  <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
                </div>
              </Tooltip>
            </div>
          )}
        </div>
      </div>

      <div className=" flex w-full flex-col items-start justify-start gap-2">
        <label
          className={`${errors.openTime && `!text-error-strong`} ${
            errors.closedTime && `!text-error-strong`
          } block origin-top-left text-left  text-xs font-semibold text-primary transition-all !duration-200 !ease-out will-change-auto group-data-[invalid=true]:!text-error-strong motion-reduce:transition-none`}
        >
          Horarios de atención
        </label>
        <div className="flex h-full w-full flex-row items-center justify-center gap-2">
          <TimeInput
            field="openTime"
            register={register}
            errorMessage={errors?.openTime?.message}
          />
          a
          <TimeInput
            field="closedTime"
            register={register}
            errorMessage={errors?.closedTime?.message}
          />
        </div>
      </div>
    </div>
  );
}
