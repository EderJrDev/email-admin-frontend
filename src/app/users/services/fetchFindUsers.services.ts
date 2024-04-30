import { Users } from "../models/user.model";

export const fetchFindUsers = async (): Promise<Users> => {
  const res = await fetch("https://reqres.in/api/users", { cache: "no-store" });
  const data = res.json();
  return data;
};
