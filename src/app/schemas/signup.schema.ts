import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/png"];

export const firstStepSchema = z
  .object({
    company: z
      .string()
      .min(3, "El nombre de la compañia debe tener al menos 3 cáracteres."),
    email: z.string().email("Correo eléctronico invalido."),
    password: z
      .string()
      .regex(
        new RegExp(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/,
        ),
        `La contraseña debe tener al menos 6 carácteres, un carácter especial, una mayúscula y un alfanumérico`,
      ),
    confirmPassword: z
      .string()
      .regex(
        new RegExp(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/,
        ),
        "Las contraseñas deben coincidir.",
      ),
    phone: z
      .string()
      .regex(
        new RegExp(
          /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
        ),
        "Número de teléfono invalido.",
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas deben coincidir.",
    path: ["confirmPassword"],
  });

export const secondStepSchema = z.object({
  logoCompany: z
    .any()
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Sólo se permiten imagenes con la extensión .png",
    ),
});
