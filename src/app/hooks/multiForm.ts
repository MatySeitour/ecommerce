import axios, { AxiosError } from "axios";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

interface SignUpData {
  company?: string;
  confirmPassword?: string | number;
  email?: string;
  password?: string | number;
  phone?: number;
}

export default function multiForm() {
  const [step, setStep] = useState<number>(1);
  const [values, setValues] = useState<SignUpData>();
  const [errorEmail, setErrorEmail] = useState<number | undefined>(0);
  const [skipState, setSkipState] = useState<boolean | undefined>(false);

  function addValuesForm(data: FieldValues | undefined) {
    setValues(() => {
      return { ...values, ...data };
    });
  }

  function nextStep(stepValue: number, data: FieldValues) {
    if (stepValue <= 4) {
      setStep(stepValue + 1);
      addValuesForm(data);
    }
  }

  function backStep(stepValue: number) {
    if (stepValue > 1) {
      setStep(stepValue - 1);
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
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorEmail(error?.response?.status);
        console.error(error?.response?.status);
      } else {
        throw new Error("estamos teniendo problemas");
      }
    }
  }

  function skipSignUp(data: FieldValues | undefined) {
    addValuesForm(data);
    setStep(3);
  }

  async function sendData(data: SignUpData | undefined) {
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
      console.error(error);
    }
  }

  const isLastStep = step == 3 ? true : false;

  return {
    step,
    nextStep,
    backStep,
    isLastStep,
    values,
    setValues,
    verifyEmail,
    errorEmail,
    sendData,
    skipSignUp,
    skipState,
    setSkipState,
    setStep,
  };
}
