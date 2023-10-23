"use client";

import Image from "next/image";
import { useStep } from "../store/stepsStore";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

export default function StepsInterface() {
  const container = {
    // hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const { step } = useStep();

  return (
    <article
      className={
        step != 4
          ? "visible flex h-screen w-[34rem] flex-col items-center justify-center gap-8 bg-gradient-to-t from-details-low to-details-medium px-6 py-10 transition-all duration-700"
          : "invisible flex h-screen w-0 flex-col items-center justify-center bg-gradient-to-t from-details-low to-details-medium py-10 transition-all duration-700"
      }
    >
      <div className="w-full text-left">
        <motion.h2
          initial={{ translateY: 10 }}
          animate={{ translateY: 0 }}
          className={`px-2 text-3xl font-extrabold text-primary ${
            step == 4 && `hidden`
          }`}
        >
          Nombre de la app
        </motion.h2>
      </div>
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {["Crea.", "Administra.", "Sueña."].map((index) => (
          <motion.li
            key={index}
            className={`px-2 text-2xl font-extrabold text-white ${
              step == 4 && `hidden`
            }`}
            variants={item}
          >
            {index}
          </motion.li>
        ))}
      </motion.ul>
      <div className="h-60  w-full">
        <Image
          className="h-full w-full object-cover"
          width={500}
          height={500}
          alt="store"
          src={"/app-store.svg"}
        />
      </div>
      <Button
        className={`w-full bg-white text-details-low hover:bg-slate-300 `}
        radius="sm"
        size="md"
        type="submit"
      >
        ¿Querés saber más?
      </Button>
    </article>
  );
}
