"use client";

import { motion } from "framer-motion";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { IoIosMailOpen } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import { Button } from "@nextui-org/button";
import axios from "axios";

export default function EmailOtp({ emailAccount }: { emailAccount: string }) {
  const [otp, setOtp] = useState("");

  const handleSendCodeVerify = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/send-code",
        {
          code: otp,
        },
        { withCredentials: true },
      );
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <motion.div
      initial={{ translateY: 1000 }}
      animate={{ translateY: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={"h-auto w-[30rem] rounded-md bg-white p-4"}
    >
      <div className="flex h-full w-full flex-col gap-4">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <IoIosMailOpen className="h-36 w-36 text-details-medium" />
          <div className="flex flex-col gap-4 px-4 text-center">
            <h4 className="text-lg font-semibold text-primary">
              ¡Codigo enviado con éxito!
            </h4>
            <p className="max-w-[21rem] text-sm text-secondary">
              Hemos enviado un codigo a{" "}
              <b className="text-details-medium">{emailAccount}</b> para
              verificar tu cuenta.
              <br />
              <br />
              Revisa tu bandeja de entrada e introduce el codigo que está en el
              correo
            </p>
            <p className="max-w-[21rem] text-sm text-secondary"></p>
          </div>

          <OtpInput
            containerStyle={`flex justify-center items-center w-40 gap-2`}
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={`h-12 !w-10 rounded-md border-2 border-details-low text-center text-lg outline-none text-primary`}
            renderInput={(props) => <input {...props} />}
          />
          <Button
            type="button"
            radius="md"
            onClick={() => handleSendCodeVerify()}
            className="bg-button-style text-white shadow-lg"
          >
            Confirmar
          </Button>
        </div>
        <div className="flex w-full items-center justify-center p-1">
          <div className="flex cursor-pointer items-center justify-center gap-2 rounded-md p-1 px-2">
            <VscDebugRestart className="flex h-5 w-5 translate-y-[0.05rem] items-center justify-center text-details-low" />
            <p className="text-sm text-details-low">Reenviar codigo</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
