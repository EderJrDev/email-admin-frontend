import { UserDetal } from "../app/users/models/user.model";

export const fetchFindOneUser = async (id: number): Promise<UserDetal> => {
  const res = await fetch(`https://reqres.in/api/users/${id}`, {
    cache: "no-cache",
  });
  const data = res.json();
  return data;
};
