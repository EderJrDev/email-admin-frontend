// services/onSubmit.services.ts
"use client";
import { SubmitHandler } from "react-hook-form";
import { IFormInput } from "../models/signup.model";
import { useApi } from "@/hooks/useApi";

export const useCreateAccount = (
  replace: (url: string) => void,
): SubmitHandler<IFormInput> => {
  const { fetchData } = useApi();

  return async (data) => {
    console.log(data);

    const response = await fetchData({
      url: "user",
      method: "post",
      data: data,
    });
    console.log(response);
    // return createUser;

    // console.log(leads);
    // const result = await signIn("credentials", {
    //   email,
    //   password,
    //   redirect: false,
    // });

    if (response?.error) {
      console.error(response.error);
      return;
    }

    replace("/");
  };
};
