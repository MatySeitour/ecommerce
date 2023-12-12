import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Divider, Tooltip } from "@nextui-org/react";
import { MdEdit } from "react-icons/md";
import FirstCardOnboarding from "./FirstCardOnboarding";

export default function OnboardingSecond() {
  const containerSignUpAnimation2 = {
    visible: {
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const itemAnimation2 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: [0.7, 0.8, 0.6, 1],
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="relative flex h-full w-full flex-row items-center justify-center gap-4"
      variants={containerSignUpAnimation2}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemAnimation2}
        animate={{
          translateY: [10, 0, 10],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
        className="h-auto w-60 rounded-md bg-white"
      >
        <FirstCardOnboarding />
      </motion.div>
      <motion.div
        animate={{
          translateY: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
        variants={itemAnimation2}
        className="h-72 w-60 rounded-md bg-gradient-to-tr from-slate-200 to-white"
      >
        <div className="flex flex-col gap-4 p-2">
          <h5 className="text-sm font-semibold text-primary">
            Detalles del producto
          </h5>
          <p className="text-xs leading-10 text-secondary">
            Sumérgete en la refrescante experiencia de la Coca-Cola Clásica con
            nuestra lata de 355 ml. Esta icónica bebida carbonatada te ofrece el
            sabor auténtico y burbujeante que todos conocemos y amamos. Creada
            con la fórmula secreta de Coca-Cola, cada sorbo es una explosión de
            deliciosos sabores que satisfacen tu sed y te brindan un momento de
            puro disfrute.
          </p>
        </div>
      </motion.div>
      <motion.div
        animate={{
          translateY: [10, 0, 10],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
        variants={itemAnimation2}
        className="h-72 w-60 rounded-md bg-red-400"
      ></motion.div>
    </motion.div>
  );
}
