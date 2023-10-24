"use client";

import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";

export default function SendMail() {
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
      <div className="h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <IoIosMail className="h-36 w-36 text-details-medium" />
          <div className="px-4 text-center">
            <h4 className="font-semibold text-primary">
              Hemos enviado un codigo a tu correo eléctronico para verificar tu
              cuenta
            </h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
