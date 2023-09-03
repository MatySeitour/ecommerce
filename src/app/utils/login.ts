"use client";

import axios from "axios";
import { FormEvent } from "react";

export const loginFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("username"));
    const res = await axios.postForm(
      "http://localhost:3000/login",
      {
        username: formData.get("username"),
        password: formData.get("password"),
      },
      { withCredentials: true }
    );

    console.log(res);
    window.location.pathname = "/";
  } catch (e) {
    console.error(e);
  }
};
