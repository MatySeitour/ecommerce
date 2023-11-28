import { HiMiniCheckCircle } from "react-icons/hi2";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AccountSuccess() {
  return (
    <motion.div
      initial={{ translateY: 1000 }}
      animate={{ translateY: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={"rounded-md bg-white px-4 py-12 sm:h-80 sm:w-[30rem] sm:p-0"}
    >
      <div className="h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
          <HiMiniCheckCircle className="h-24 w-24 text-green-400" />
          <div></div>
          <p className="mb-4 text-center text-lg font-medium text-primary sm:text-xl">
            ¡Tu cuenta fue creada con éxito!
          </p>

          <Link
            href={"/login"}
            className="w-full max-w-[18rem] rounded-md bg-success p-2 text-center text-white shadow-xl hover:bg-success/90"
          >
            {`Iniciar sesión`}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
