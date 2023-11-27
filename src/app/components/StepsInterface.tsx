"use client";

import Image from "next/image";
import { useStep } from "../store/stepsStore";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

export default function StepsInterface() {
  const container = {
    visible: {
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        // delayChildren: 0.1,
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        duration: 0.5,
      },
    },
  };

  const { step } = useStep();

  return (
    <motion.article
      variants={container}
      initial="hidden"
      animate="visible"
      className={
        step != 4
          ? "visible hidden h-screen flex-col items-center justify-center gap-8 bg-gradient-to-t from-details-low to-details-medium px-6 py-10 transition-all duration-700 sm:w-[24rem] md:flex lg:w-[34rem]"
          : "invisible flex h-screen w-0 flex-col items-center justify-center bg-gradient-to-t from-details-low to-details-medium py-10 transition-all duration-700"
      }
    >
      <div className="w-full text-left">
        <motion.h2
          variants={item}
          className={`px-2 font-extrabold text-primary md:text-2xl lg:text-3xl ${
            step == 4 && `hidden`
          }`}
        >
          Nombre de la app
        </motion.h2>
      </div>
      <motion.ul className="w-full">
        {["Crea.", "Administra.", "Sueña."].map((index) => (
          <motion.li
            key={index}
            className={`px-2 font-extrabold text-white md:text-xl lg:text-2xl ${
              step == 4 && `hidden`
            }`}
            variants={item}
          >
            {index}
          </motion.li>
        ))}
      </motion.ul>
      <motion.div variants={item} className="w-full md:h-44 lg:h-60">
        <Image
          className="h-full w-full object-cover"
          width={500}
          height={500}
          alt="store"
          src={"/app-store.svg"}
        />
      </motion.div>
      <motion.div variants={item} className="w-full">
        <Button
          className={`w-full bg-white text-details-low hover:bg-slate-300`}
          radius="sm"
          size="md"
          type="submit"
        >
          ¿Querés saber más?
        </Button>
      </motion.div>
    </motion.article>
  );
}
