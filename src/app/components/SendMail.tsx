"use client";

import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import { Button } from "@nextui-org/button";
import axios from "axios";

export default function SendMail() {
  const handleSendCode = async () => {
    const res = await axios.post(
      "http://localhost:3000/verify-account",
      {
        code: "asdasd",
      },
      { withCredentials: true },
    );
    console.log(res);
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
      className={"h-auto w-[30rem] rounded-md bg-white p-4 shadow-md"}
    >
      <div className="h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <IoIosMail className="h-36 w-36 text-details-medium" />
          <div className="flex flex-col gap-4 px-4 text-center">
            <h4 className="text-xl font-semibold text-primary">
              Codigo de verificación
            </h4>
            <p>
              Enviaremos un codigo de verificación para comprobar tu identidad.
            </p>

            <Button
              className={`bg-details-low text-white hover:bg-details-low/80`}
              radius="sm"
              size="md"
              onClick={() => handleSendCode()}
              type="button"
            >
              Enviar codigo
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
