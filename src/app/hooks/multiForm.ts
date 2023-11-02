import axios from "axios";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { stepsState, useStep } from "../store/stepsStore";

type Week =
  | `Lunes`
  | `Martes`
  | `Miercoles`
  | `Jueves`
  | `Viernes`
  | `Sabado`
  | `Domingo`;

type TimeHour = `${string}${string}:${string}${string}`;

interface SignUpData {
  company: string;
  confirmPassword: string | number;
  email: string;
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

export default function useMultiForm() {
  const [values, setValues] = useState<SignUpData>();
  const [errorEmail, setErrorEmail] = useState<number>(0);
  const [skipState, setSkipState] = useState<boolean>(false);

  const { completeFirstStep } = stepsState();

  const { step, increment, decrement, skip } = useStep();

  function addValuesForm(data: FieldValues) {
    setValues((): any => {
      return { ...values, ...data };
    });
  }

  function nextStep(stepValue: number, data: FieldValues) {
    if (stepValue <= 4) {
      increment(1);
      addValuesForm(data);
    }
  }

  function backStep(stepValue: number) {
    if (stepValue > 1) {
      decrement(1);
    }
  }

  async function verifyEmail(data: FieldValues) {
    try {
      const res = await axios.postForm(
        "http://localhost:3000/verifyEmail",
        {
          email: data.email,
        },
        { withCredentials: true },
      );
      nextStep(step, data);
      setErrorEmail(res.status);
      completeFirstStep();

      return true;
    } catch (error: any) {
      if (error?.response?.data == "Este mail no es válido") {
        setErrorEmail(error?.response?.status);
        console.error(error?.response);
        return true;
      } else {
        return false;
      }
    }
  }

  function skipSignUp(data: FieldValues) {
    addValuesForm(data);
  }

  async function sendData(data: SignUpData) {
    try {
      const res = await axios.postForm(
        "http://localhost:3000/signup",
        {
          company: data?.company,
          password: data?.password,
          confirmPassword: data?.confirmPassword,
          email: data?.email,
          phone: data?.phone,
          province: data?.province,
          city: data?.city,
          businessAddress: data?.businessAddress,
          openWeek: data?.openWeek,
          closedWeek: data?.closedWeek,
          openTime: data?.openTime,
          closedTime: data?.closedTime,
          logo: data?.logo,
        },
        { withCredentials: true },
      );
      skip();
      console.log(res);
    } catch (error: any) {
      setSkipState(false);
      console.error(error);
    }
  }

  return {
    step,
    nextStep,
    backStep,
    values,
    setValues,
    verifyEmail,
    errorEmail,
    sendData,
    skipSignUp,
    skipState,
    setSkipState,
    increment,
    addValuesForm,
  };
}
