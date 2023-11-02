export interface DataUserAccount {
  company: string;
  confirmPassword: string | number;
  readonly email: string;
  password: string | number;
  phone: number;
  province: string;
  city: string;
  businessAddress: string;
  openWeek: Week;
  closedWeek: Week;
  openTime: TimeHour;
  closedTime: TimeHour;
  logo?: string;
}
