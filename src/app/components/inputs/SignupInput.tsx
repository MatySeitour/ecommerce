import { Input } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import {
  IoMdInformationCircleOutline,
  IoMdEyeOff,
  IoMdEye,
} from "react-icons/io";

export default function SignupInput({
  step,
  errors,
  register,
  label,
  field,
  placeholder,
  errorMessage,
  errorEmail,
  type,
  isVisible,
  handleVisible,
}: {
  step: number;
  errors: any;
  register: any;
  field: string;
  label: string;
  placeholder: string;
  errorMessage: string;
  type: string;
  errorEmail?: number | undefined;
  isVisible?: boolean;
  handleVisible?: () => void | undefined;
}) {
  const isPassword =
    field === "password" || field === "confirmPassword" ? true : false;

  return (
    <div className="flex items-center justify-center gap-2">
      <Input
        {...register(`${field}`, { required: "company is required" })}
        type={isPassword ? (isVisible ? "text" : "password") : field}
        label={label}
        id={field}
        labelPlacement="outside"
        placeholder={placeholder}
        endContent={
          isPassword && (
            <button
              className="focus:outline-none"
              type="button"
              onClick={handleVisible}
            >
              {isVisible ? (
                <IoMdEye className="pointer-events-none text-2xl text-default-400" />
              ) : (
                <IoMdEyeOff className="pointer-events-none text-2xl text-default-400" />
              )}
            </button>
          )
        }
        className="h-auto text-primary"
        validationState={
          errorMessage ? `invalid` : errorEmail === 400 ? "invalid" : "valid"
        }
        classNames={{
          inputWrapper: [
            "p-2",
            "group-data-[focus=true]:border-details-low rounded-[4px] min-h-4 max-h-8 w-full group-data-[hover=true]:bg-white/30 group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0",
          ],
          label: [
            "text-primary font-semibold text-xs group-data-[invalid=true]:!text-error-strong",
          ],
          input: [
            "placeholder:group-data-[invalid=true]:text-error-medium group-data-[invalid=true]:bg-error-medium",
          ],
        }}
      />
      {errorMessage && (
        <div className="translate-y-2.5">
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
    </div>
  );
}
