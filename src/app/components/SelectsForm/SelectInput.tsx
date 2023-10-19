"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { Tooltip } from "@nextui-org/tooltip";
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function SelectInput({
  step,
  errors,
  register,
  label,
  field,
  disableOption,
  errorMessage,
  type,
  isVisible,
  handleVisible,
  selectOption,
  setSelectOption,
  options,
}: {
  step: number;
  errors: any;
  register: any;
  field: string;
  label: string;
  errorMessage: string;
  type: string;
  selectOption: string;
  setSelectOption: (option: any) => void;
  options: any[];
  disableOption?: boolean;
  isVisible?: boolean;
  handleVisible?: () => void | undefined;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-full pt-6">
        <div className="flex h-auto w-full flex-wrap items-center justify-center gap-2 pr-2 md:flex-nowrap">
          <Select
            classNames={{
              trigger: ["min-h-4 max-h-8 w-full rounded-[4px] p-2"],
              value: ["text-xs text-primary -translate-y-[.5rem]"],
              label: [
                "text-xs group-data-[filled=true]:-translate-y-7 group-data-[filled=true]:-translate-x-2 group-data-[filled=true]:text-primary group-data-[filled=true]:text-xs group-data-[filled=true]:font-semibold",
              ],
              //   "text-primary font-semibold text-xs group-data-[invalid=true]:!text-error-strong",
            }}
            {...register(`${field}`, { required: "social is required" })}
            label={label}
            className="max-w-xs"
          >
            {options.map((option) => (
              <SelectItem
                onClick={() => setSelectOption(option)}
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
    </div>
  );
}
