import { Input } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import { useEffect, useRef, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Select, SelectItem } from "@nextui-org/select";
import { Avatar, Button } from "@nextui-org/react";
import { CameraIcon } from "@/app/components/CameraIcon";
import Image from "next/image";
import { useStepExample } from "@/app/store/stepsStore";
import SignupInput from "../inputs/SignupInput";
import SelectInput from "../SelectsForm/SelectInput";

export default function FormSecondStep({
  step,
  errors,
  register,
}: {
  step: number;
  errors: any;
  register: any;
}) {
  const optionsBusiness = [
    "Tengo un negocio fisico",
    "Tengo un negocio digital",
  ];

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

  const { logoFile, setFileData } = useStepExample();

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
              Seleccionar logo
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
            <span className="text-[0.66rem] text-secondary">
              *Sólo imagenes con formato png.
            </span>
          </div>
        </div>
        {messageImageError && (
          <span className="w-full text-center text-sm text-error-medium">
            Solo se permite imagenes con formato png.
          </span>
        )}
      </div>

      <SelectInput
        step={step}
        errors={errors}
        register={register}
        label="Provincia donde se ubica"
        field="businessType"
        type="text"
        errorMessage={errors?.businessType?.message}
        selectOption={selectBusiness}
        setSelectOption={setSelectBusiness}
        options={["Buenos Aires", "Córdoba", "Santa Fe", "Mendoza", "Tucumán"]}
      />

      <SelectInput
        step={step}
        errors={errors}
        register={register}
        label="Selecciona el partido donde se ubica"
        field="businessType"
        type="text"
        errorMessage={errors?.businessType?.message}
        selectOption={selectBusiness}
        setSelectOption={setSelectBusiness}
        options={[
          "La Plata",
          "Mar del Plata",
          "Bahía Blanca",
          "Tandil",
          "San Isidro",
        ]}
      />
      {/* <div className="flex items-center gap-2">
        <div className="w-full pt-6">
          <div className="flex h-auto w-full flex-wrap items-center justify-center gap-2 pr-2 md:flex-nowrap">
            <Select
              classNames={{
                trigger: ["min-h-4 max-h-8 w-full rounded-[4px] px-2"],
                value: ["text-xs text-primary -translate-y-[.5rem]"],
                label: [
                  "text-xs group-data-[filled=true]:-translate-y-7 group-data-[filled=true]:-translate-x-2 group-data-[filled=true]:text-primary group-data-[filled=true]:text-xs group-data-[filled=true]:font-semibold",
                ],
              }}
              {...register("businessType", { required: "social is required" })}
              label="Tipo de negocio"
              className="max-w-xs"
            >
              {optionsBusiness.map((option) => (
                <SelectItem
                  onClick={() => setSelectBusiness(option)}
                  key={option}
                  value={option}
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
            {errors.businessType && (
              <div className="">
                <Tooltip
                  className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
                  content={`${errors?.businessType?.message}`}
                >
                  <div>
                    <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
                  </div>
                </Tooltip>
              </div>
            )}
          </div>
        </div>

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
      </div> */}

      <SignupInput
        step={step}
        errors={errors}
        register={register}
        label="Direccón de tu negocio"
        field="businessAddress"
        placeholder="Escribe la Direccón de tu negocio"
        type="text"
        errorMessage={errors?.businessAddress?.message}
        disableOption={
          selectBusiness === "" || selectBusiness === optionsBusiness[1]
            ? true
            : false
        }
      />

      {/* <div className="flex items-center justify-center gap-2">
        <Input
          type="businessAddress"
          {...register("businessAddress")}
          label="Direccón de tu negocio"
          labelPlacement="outside"
          id="businessAddress"
          isDisabled={
            selectBusiness === "" || selectBusiness === optionsBusiness[1]
              ? true
              : false
          }
          placeholder="Escribe el Direccón de tu negocio "
          className="text-primary"
          validationState={
            errors?.businessAddress?.message ? `invalid` : "valid"
          }
          classNames={{
            inputWrapper: [
              "p-2",
              "group-data-[focus=true]:border-details-low rounded-[4px] min-h-4 max-h-8 w-full",
            ],
            label: [
              "text-primary font-semibold text-xs group-data-[invalid=true]:!text-error-strong",
            ],
            input: ["placeholder:group-data-[invalid=true]:text-error-medium"],
          }}
        />
        {errors.businessAddress && (
          <div className="translate-y-2.5">
            <Tooltip
              className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
              content={`${errors?.businessAddress?.message}`}
            >
              <div>
                <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
              </div>
            </Tooltip>
          </div>
        )}
      </div> */}

      <div className=" flex w-full flex-col items-center justify-center">
        <div className="h-[16px] pb-1.5"></div>
        <span className="pointer-events-none block w-full origin-top-left pb-1.5 text-left text-xs font-semibold text-primary text-primary/50 transition-all !duration-200 !ease-out will-change-auto group-data-[invalid=true]:!text-error-strong motion-reduce:transition-none"></span>
        <Select
          isDisabled={
            selectBusiness === "" || selectBusiness === optionsBusiness[1]
              ? true
              : false
          }
          classNames={{
            trigger: ["min-h-4 max-h-8 w-full rounded-[4px] px-2"],
            value: ["text-xs text-primary -translate-y-[.5rem]"],
            label: [
              "text-xs group-data-[filled=true]:-translate-y-7 group-data-[filled=true]:-translate-x-2 group-data-[filled=true]:text-primary group-data-[filled=true]:text-xs group-data-[filled=true]:font-semibold",
            ],
          }}
          {...register("businessOpen", { required: "social is required" })}
          label="Horario de apertura"
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
        {errors.businessOpen && (
          <div className="translate-y-2.5">
            <Tooltip
              className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
              content={`${errors?.businessOpen?.message}`}
            >
              <div>
                <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
              </div>
            </Tooltip>
          </div>
        )}
      </div>
      <div className=" flex w-full flex-col items-center justify-center">
        <div className="h-[16px] pb-1.5"></div>
        <span className="pointer-events-none block w-full origin-top-left pb-1.5 text-left text-xs font-semibold text-primary text-primary/50 transition-all !duration-200 !ease-out will-change-auto group-data-[invalid=true]:!text-error-strong motion-reduce:transition-none"></span>
        <Select
          isDisabled={
            selectBusiness === "" || selectBusiness === optionsBusiness[1]
              ? true
              : false
          }
          classNames={{
            trigger: ["min-h-4 max-h-8 w-full rounded-[4px] px-2"],
            value: ["text-xs text-primary -translate-y-[.5rem]"],
            label: [
              "text-xs group-data-[filled=true]:-translate-y-7 group-data-[filled=true]:-translate-x-2 group-data-[filled=true]:text-primary group-data-[filled=true]:text-xs group-data-[filled=true]:font-semibold",
            ],
          }}
          {...register("businessOpen", { required: "social is required" })}
          label="Horario de cierre"
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
        {errors.businessOpen && (
          <div className="translate-y-2.5">
            <Tooltip
              className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
              content={`${errors?.businessOpen?.message}`}
            >
              <div>
                <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
              </div>
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
}
