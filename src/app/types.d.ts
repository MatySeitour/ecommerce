export type DataUserAccount = InfoCompany & DataCompanyEssential;

type Week =
  | `Lunes`
  | `Martes`
  | `Miercoles`
  | `Jueves`
  | `Viernes`
  | `Sabado`
  | `Domingo`;

type TimeHour = `${string}${string}:${string}${string}`;

type DataCompanyEssential = {
  company: string;
  confirmPassword: string | number;
  readonly email: string;
  password: string | number;
  phone: number;
};

type InfoCompany = {
  province: string;
  city: string;
  businessAddress: string;
  openWeek: Week;
  closedWeek: Week;
  openTime: TimeHour;
  closedTime: TimeHour;
  logoCompany?: File;
};
