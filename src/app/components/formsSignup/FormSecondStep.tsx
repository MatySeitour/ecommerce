import { Input } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Select, SelectItem } from "@nextui-org/select";
import { Avatar } from "@nextui-org/react";
import { CameraIcon } from "@/app/components/CameraIcon";

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
  const [file, setFile] = useState<File>();
  const [selectBusiness, setSelectBusiness] = useState<string>("");

  return (
    <div
      className={
        step === 2
          ? `visible absolute grid w-full translate-x-0 grid-cols-2 gap-4 transition-all`
          : `invisible absolute grid translate-x-[40rem] grid-cols-2 gap-4 transition-all`
      }
    >
      <div className="flex items-center gap-4">
        <Avatar
          showFallback
          src="https://images.unsplash.com/broken"
          fallback={
            <CameraIcon
              className="h-6 w-6 animate-pulse text-default-500"
              fill="currentColor"
              size={20}
            />
          }
        />
        <Avatar
          showFallback
          name="Jane"
          src="https://images.unsplash.com/broken"
        />
        <Avatar name="Joe" src="https://images.unsplash.com/broken" />
      </div>
      {/* <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <label className="block origin-top-left pb-1.5 text-xs font-semibold text-primary transition-all !duration-200 !ease-out will-change-auto group-data-[invalid=true]:!text-error-strong motion-reduce:transition-none">
            Logo de tu negocio
          </label>
          <label
            htmlFor="logoCompany"
            className="flex w-56 cursor-pointer flex-row items-center justify-center gap-2 rounded-md border border-white/30 bg-details-medium p-1 text-sm text-white outline-none placeholder:text-white focus:border-white"
          >
            {file ? (
              <span className="text-white">{file.name}</span>
            ) : (
              <div className="flex flex-row items-center justify-center gap-2">
                <span>Adjuntar logo</span>
              </div>
            )}
          </label>

          <input
            {...register("logoCompany", { required: "social is required" })}
            id="logoCompany"
            type="file"
            className="hidden w-80 bg-black text-white"
            placeholder="John Doe"
            name="logoCompany"
          />
        </div>
        {!errors?.logoCompany && (
          <div className="translate-y-2.5">
            <Tooltip
              className="top-0 max-w-[15rem] bg-white text-center text-secondary"
              content={`Este campo es opcional, puedes añadir el logo de tu negocio más tarde.`}
            >
              <div>
                <IoMdInformationCircleOutline className="h-6 w-6 text-secondary" />
              </div>
            </Tooltip>
          </div>
        )}

        {errors?.logoCompany && (
          <div className="translate-y-2.5">
            <Tooltip
              className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
              content={`${errors?.logoCompany?.message}`}
            >
              <div>
                <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
              </div>
            </Tooltip>
          </div>
        )}
      </div> */}

      <div className="flex items-center gap-2">
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
      </div>

      <div className="flex items-center justify-center gap-2">
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
    </div>
  );
}
