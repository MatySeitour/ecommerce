import Image from "next/image";
import { motion } from "framer-motion";

export default function OnboardingFirst() {
  const itemAnimation = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.7, 0.8, 0.6, 1],
        duration: 0.5,
      },
    },
  };
  const containerSignUpAnimation = {
    visible: {
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerSignUpAnimation}
      initial="hidden"
      animate="visible"
      className="h-full max-w-xs"
    >
      <motion.div
        variants={itemAnimation}
        className="flex w-full justify-center"
      >
        <Image
          className="h-72 w-72"
          src={"./young.svg"}
          alt="welcome image"
          width={600}
          height={600}
        />
      </motion.div>
      <div className="flex flex-col gap-4 text-center">
        <motion.h3
          variants={itemAnimation}
          className="text-2xl font-bold text-white"
        >
          Te damos la bienvenida a *Nombre del ecommerce*
        </motion.h3>
        <motion.p
          variants={itemAnimation}
          className="text-base font-medium text-white"
        >
          Es hora de que pongas tu negocio online como siempre quisiste!
        </motion.p>
      </div>
    </motion.div>
  );
}
