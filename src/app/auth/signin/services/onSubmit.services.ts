// services/onSubmit.services.ts
"use client";

import { SubmitHandler } from "react-hook-form";
import { IFormInput } from "../models/signin.model";
import { signIn } from "next-auth/react";

export const createOnSubmitHandler = (
  replace: (url: string) => void,
  setLoading: (loading: boolean) => void,
): SubmitHandler<IFormInput> => {
  return async ({ email, password }) => {
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        console.error(result.error);
        return;
      }

      replace("/leads");
    } catch (error) {
      console.error(error);
      return;
    } finally {
      setLoading(false);
    }
  };
};
