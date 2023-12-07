import axios from "axios";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { useStep } from "../store/stepsStore";
import { DataUserAccount } from "../types";
import { useRouter } from "next/navigation";
import { InfoCompany } from "../types";

export default function useMultiForm() {
  const [values, setValues] = useState<DataUserAccount>();
  const [errorEmail, setErrorEmail] = useState<number>(0);
  const [errorPhone, setErrorPhone] = useState<number>(0);
  const [skipState, setSkipState] = useState<boolean>(false);

  const { increment, decrement } = useStep();

  const router = useRouter();

  function addValuesForm(data: FieldValues) {
    setValues((): any => {
      return { ...values, ...data };
    });
  }

  function nextStep(stepValue: number, data: FieldValues) {
    if (stepValue <= 4) {
      increment(stepValue);
      addValuesForm(data);
    }
  }

  function backStep(stepValue: number) {
    if (stepValue > 1) {
      decrement(1);
    }
  }

  async function verifyPhone(data: FieldValues) {
    try {
      const res = await axios.postForm(
        "http://localhost:3000/verifyPhone",
        {
          phone: data.phone,
        },
        { withCredentials: true },
      );
      setErrorPhone(res.status);
      return true;
    } catch (error: any) {
      if (error?.response?.data == "Número de telefono en uso") {
        setErrorPhone(error?.response?.status);
        console.error(error?.response);
        return false;
      } else {
        return false;
      }
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
      console.log("esta es la respuesta", res);
      // nextStep(step, data);
      setErrorEmail(res.status);
      return true;
    } catch (error: any) {
      if (error?.response?.data == "Este mail no es válido") {
        setErrorEmail(error?.response?.status);
        console.error(error?.response);
        return false;
      } else {
        return false;
      }
    }
  }

  function skipSignUp(data: FieldValues) {
    addValuesForm(data);
  }

  async function sendData(data: any) {
    try {
      const res = await axios.postForm(
        "http://localhost:3000/signup",
        {
          company: data?.company,
          password: data?.password,
          confirmPassword: data?.confirmPassword,
          email: data?.email,
          phone: data?.phone,
        },
        { withCredentials: true },
      );
      console.log(res);
    } catch (error: any) {
      setSkipState(false);
      console.error(error);
    }
  }

  async function sendFirstStepData(data: InfoCompany) {
    try {
      const res = await axios.postForm(
        "http://localhost:3000/send-first-step",
        {
          province: data?.province,
          city: data?.city,
          businessAddress: data?.businessAddress,
          openWeek: data?.openWeek,
          closedWeek: data?.closedWeek,
          openTime: data?.openTime,
          closedTime: data?.closedTime,
          logoCompany: data?.logoCompany,
        },
        { withCredentials: true },
      );

      console.log(res);
    } catch (error: any) {
      setSkipState(false);
      console.error(error);
    }
  }

  return {
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
    verifyPhone,
    errorPhone,
    sendFirstStepData,
  };
}
