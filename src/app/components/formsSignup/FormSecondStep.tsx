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
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

export default function FormSecondStep({
  step,
  errors,
  register,
  logoImage,
}: {
  step: number;
  errors: any;
  register: any;
  logoImage: string;
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
  const [logoImageUrl, setLogoImageUrl] = useState<string>(logoImage);

  const { logoFile, setFileData } = useStep();

  // async function deleteLogo() {
  //   try {
  //     const res = await axios.delete(
  //       "http://localhost:3000/delete-logo",

  //       { withCredentials: true },
  //     );
  //     console.log("esta es la respuesta", res);
  //     // nextStep(step, data);
  //     return true;
  //   } catch (error: any) {
  //     if (error?.response?.data == "Este mail no es válido") {
  //       // setErrorEmail(error?.response?.status);
  //       console.error(error?.response);
  //       return false;
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  // async function saveLogoImage(logoCompany: any) {
  //   try {
  //     const res = await axios.postForm(
  //       "http://localhost:3000/save-logo",
  //       { logoCompany: logoCompany },
  //       { withCredentials: true },
  //     );
  //     console.log("esta es la respuesta", res);
  //     // nextStep(step, data);
  //     return true;
  //   } catch (error: any) {
  //     if (error?.response?.data == "Este mail no es válido") {
  //       // setErrorEmail(error?.response?.status);
  //       console.error(error);
  //       return false;
  //     } else {
  //       console.error(error);

  //       return false;
  //     }
  //   }
  // }

  return (
    <div
      className={
        step != 2
          ? `visible flex w-full translate-x-0 flex-col gap-4 transition-all sm:absolute sm:grid sm:grid-cols-2`
          : `invisible absolute grid translate-x-[40rem] grid-cols-2 gap-4 transition-all`
      }
    >
      <div className="flex flex-col gap-0 sm:items-start sm:justify-start">
        <div className="hidden flex-row items-center justify-center gap-4 lg:flex">
          <label
            htmlFor="logoCompany"
            className="flex h-20 w-20 cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-full border border-white/30 bg-white p-1 text-sm text-white outline-none placeholder:text-white focus:border-white lg:h-24 lg:w-24"
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
                    // saveLogoImage(e.target.files[0]);
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
              onClick={() => {
                setFileData("");
                setLogoImageUrl("");
              }}
              // isLoading={isSubmitting ? true : false}
              isDisabled={logoFile ? false : logoImageUrl ? false : true}
              className=" h-10 w-10 rounded-full bg-error-medium text-[0.7rem] text-white hover:bg-error-medium/90 lg:inline-block lg:w-full lg:max-w-[8rem]"
              radius="sm"
              size="sm"
              type="button"
            >
              Eliminar foto
            </Button>
            <Button
              onClick={() => setFileData("")}
              isDisabled={logoFile ? false : true}
              className="inline-block h-10 w-10 min-w-0 rounded-full bg-error-medium p-0 text-[0.7rem] text-white hover:bg-error-medium/90 lg:hidden lg:w-full lg:max-w-[8rem]"
              radius="sm"
              size="sm"
              type="button"
            ></Button>
            <span
              className={`hidden text-[0.66rem] text-secondary lg:inline-block ${
                messageImageError && `!text-error-medium`
              }`}
            >
              *Sólo imagenes con formato png.
            </span>
          </div>
        </div>

        <div className="flex-col items-center justify-center gap-4 lg:hidden">
          <div className="flex flex-col gap-2">
            <label className="block origin-top-left pb-1.5 text-xs font-semibold text-primary transition-all !duration-200 !ease-out will-change-auto group-data-[invalid=true]:!text-error-strong motion-reduce:transition-none">
              {`Seleccionar logo (opcional)`}
            </label>
            <div className="flex flex-row items-center justify-start gap-4">
              <label
                htmlFor="logoCompany"
                className="flex h-20 w-20 cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-full border border-white/30 bg-white p-1 text-sm text-white outline-none placeholder:text-white focus:border-white lg:h-24 lg:w-24"
              >
                {logoImage != "" ? (
                  <Image
                    src={`${
                      logoFile != ""
                        ? URL.createObjectURL(logoFile)
                        : logoImageUrl != ""
                        ? logoImage
                        : "/cookies.png"
                    }`}
                    alt="user"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src={"/cookies.png"}
                    alt="user"
                    width={500}
                    height={500}
                  />
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

              <Button
                onClick={() => {
                  setFileData("");
                  setLogoImageUrl("");
                }}
                isDisabled={logoFile ? false : logoImageUrl ? false : true}
                className="flex h-10 w-10 min-w-0 bg-error-medium p-0 text-[0.7rem] text-white hover:bg-error-medium/90 lg:hidden lg:w-full lg:max-w-[8rem]"
                radius="sm"
                size="sm"
                type="button"
              >
                <FaTrashAlt className="h-6 w-6" />
              </Button>
            </div>
            <span
              className={`text-[0.66rem] text-secondary lg:inline-block ${
                messageImageError && `!text-error-medium`
              }`}
            >
              *Sólo imagenes con formato png.
            </span>
          </div>
        </div>
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
                  `min-h-4 max-h-8 w-full rounded-[4px] px-2 border  border-details-low  ${
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
                  `min-h-4 max-h-8 w-full rounded-[4px] px-2 border  border-details-low ${
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
