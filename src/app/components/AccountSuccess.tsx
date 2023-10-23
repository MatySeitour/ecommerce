import { HiMiniCheckCircle } from "react-icons/hi2";
import { motion } from "framer-motion";
import OtpInput from "react-otp-input";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function AccountSuccess() {
  const [otp, setOtp] = useState("");

  return (
    <motion.div
      initial={{ translateY: 1000 }}
      animate={{ translateY: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={"h-80 w-[30rem] rounded-md bg-white"}
    >
      <div className="h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
          <HiMiniCheckCircle className="h-24 w-24 text-green-400" />
          <div></div>
          <p className="mb-4 text-center text-xl font-medium text-primary">
            ¡Tu cuenta fue creada con éxito!
          </p>
          <OtpInput
            containerStyle={`flex justify-center items-center w-40 gap-2`}
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={`h-12 !w-10 rounded-md border-2 border-details-low  text-center text-lg outline-none text-primary`}
            renderInput={(props) => <input {...props} />}
          />
          {/* <Button
            disabled={isSubmitting}
            type="submit"
            color="primary"
            variant="shadow"
            className="w-full max-w-[18rem] bg-success text-white hover:bg-success/90"
            radius="sm"
            isLoading={isSubmitting ? true : false}
          >
            {isSubmitting ? "" : "Iniciar sesión"}
          </Button> */}
        </div>
      </div>
    </motion.div>
  );
}
