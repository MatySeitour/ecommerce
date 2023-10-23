import axios, { AxiosError } from "axios";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { stepsState, useStep } from "../store/stepsStore";

interface SignUpData {
  company?: string;
  confirmPassword?: string | number;
  email?: string;
  password?: string | number;
  phone?: number;
}

export default function useMultiForm() {
  // const [step, increment] = useState<number>(1);
  const [values, setValues] = useState<SignUpData>();
  const [errorEmail, setErrorEmail] = useState<number | undefined>(0);
  const [skipState, setSkipState] = useState<boolean | undefined>(false);

  const { firstStep, secondStep, thirdStep, completeFirstStep } = stepsState();

  const { step, increment, decrement, skip } = useStep();

  function addValuesForm(data: FieldValues | undefined) {
    setValues(() => {
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
        // console.log(error?.response?.data == "Este mail no es válido");
        setErrorEmail(error?.response?.status);
        console.error(error?.response);
        return true;
      } else {
        return false;
      }
    }
  }

  function skipSignUp(data: FieldValues | undefined) {
    addValuesForm(data);
  }

  async function sendData(data: SignUpData | undefined) {
    try {
      // const res = await axios.postForm(
      //   "http://localhost:3000/signup",
      //   {
      //     company: data?.company,
      //     password: data?.password,
      //     confirmPassword: data?.confirmPassword,
      //     email: data?.email,
      //     phone: data?.phone,
      //   },
      //   { withCredentials: true },
      // );
      skip();
      // console.log(res);
    } catch (error: any) {
      setSkipState(false);
      console.error(error);
    }
  }

  const isLastStep = step == 4 ? true : false;

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
    increment,
    addValuesForm,
  };
}
