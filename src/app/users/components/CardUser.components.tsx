import Button from "@/components/Button.componentes";
import { User } from "../models/user.model";
import Link from "next/link";

interface Props {
  data: User;
}

const CardUser = ({ data }: Props) => {
  return (
    <div className="flex gap-2 shadow-lg hover:bg-gray-100 w-[22rem] rounded-lg">
      <img src={data.avatar} width="150" height="150" alt={data.avatar} />
      <div className="w-full">
        <h2 className="text-xl mt-3">
          {data.first_name} {data.last_name}
        </h2>
        <p className="text-slate-400">{data.email}</p>
        <div className="w-full flex justify-end  p-2 mt-5 hover:cursor-pointer align-top">
          <Button id={data.id} path="users" />
        </div>
      </div>
    </div>
  );
};

export default CardUser;

{
  /* <Link
          href={`/users/${data.id}`}
          className="w-full flex justify-end  p-2 mt-5 hover:cursor-pointer align-top"
        >
          <i className="w-[3rem] h-[3rem] bg-gray-200 border rounded-[100%] hover:shadow-lg text-[1.5rem] text-center">
            +
          </i>
        </Link> */
}
