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
    .refine((file) => {
      return file.length == 0 || ACCEPTED_IMAGE_TYPES.includes(file[0]?.type);
    }, "Sólo se permiten imagenes con la extensión .png")
    .optional(),

  businessAddress: z.string().refine((province) => {
    console.log(province.length);
    return province.length != 0;
  }, "Escribe la dirección de tu negocio."),

  businessProvince: z.string().refine((province) => {
    console.log(province.length);
    return province.length != 0;
  }, "Selecciona una provincia."),

  businessCity: z.string().refine((city) => {
    console.log(city.length);
    return city.length != 0;
  }, "Selecciona una ciudad."),

  businessOpen: z.string().refine((business) => {
    console.log(business.length);
    return business.length != 0;
  }, "Selecciona un dia."),

  businessClosed: z.string().refine((business) => {
    console.log(business.length);
    return business.length != 0;
  }, "Selecciona un dia."),

  businessOpeningHours: z
    .string()
    .regex(
      new RegExp(/^(0[1-9]|1[0-2]):[0-5][0-9]$/),
      "Selecciona un horario.",
    ),
  // .refine((openHour) => {
  //   console.log(openHour);
  //   return openHour.length != 0;
  // }, "Sólo se permiten imagenes con la extensión .png"),

  businessClosedHours: z
    .string()
    .regex(
      new RegExp(/^(0[1-9]|1[0-2]):[0-5][0-9]$/),
      "Selecciona un horario.",
    ),
});
