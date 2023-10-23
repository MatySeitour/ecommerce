import { Tooltip } from "@nextui-org/tooltip";
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Input } from "@nextui-org/input";

export default function TimeInput({
  register,
  field,
  errorMessage,
}: {
  register: any;
  field: string;
  errorMessage: string;
}) {
  const [openHour, setOpenHour] = useState("");

  const handleOpenHourChange = (event: any) => {
    setOpenHour(event.target.value);
  };
  return (
    <div className="flex h-full w-full flex-row items-center justify-center gap-2">
      <div className=" flex h-full w-full  flex-col items-center justify-center">
        <Input
          {...register(`${field}`, { required: "company is required" })}
          type={"time"}
          id={field}
          name={field}
          value={openHour}
          classNames={{
            inputWrapper: [
              "p-2",
              `group-data-[focus=true]:border-details-low rounded-[4px] min-h-4 max-h-8 w-full group-data-[hover=true]:bg-white/30 group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0 ${
                errorMessage && `bg-error-low text-error-medium`
              }`,
            ],
            input: [
              `placeholder:group-data-[invalid=true]:text-error-medium group-data-[invalid=true]:!bg-error-medium`,
            ],
          }}
          onChange={handleOpenHourChange}
        />
        {/* <input
          className="min-h-4 h-full max-h-8 w-full rounded-[4px] px-2 text-center outline-none hover:bg-white/30 "
          type="time"
          {...register(`${field}`, {
            required: "social is required",
          })}
         
        /> */}
      </div>
      {errorMessage && (
        <div className="">
          <Tooltip
            className="top-0 max-w-[15rem] bg-error-medium text-center text-white"
            content={`${errorMessage}`}
          >
            <div>
              <IoMdInformationCircleOutline className="h-6 w-6 text-error-medium" />
            </div>
          </Tooltip>
        </div>
      )}
    </div>
  );
}
