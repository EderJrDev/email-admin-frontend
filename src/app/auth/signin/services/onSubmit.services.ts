"use client";
import { SubmitHandler } from "react-hook-form";
import { IFormInput } from "../models/signin.model";
import { signIn } from "next-auth/react";

export const createOnSubmitHandler = (
  replace: (url: string) => void,
): SubmitHandler<IFormInput> => {
  return async ({ email, password }) => {
    const result = await signIn("credentials", {
      email,
      password,
      url: "https://nestjs-backend-livid.vercel.app/api/auth/signin",
      redirect: false,
    });
    console.log(result);
    if (result?.error) {
      console.log(result);
      return;
    }

    replace("/dashboard");
  };
};
