"use client";

import { useRouter } from "next/navigation";

interface Props {
  id: number;
  path: string;
}

const Button = ({ id, path }: Props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/${path}/${id}`)}
      className="w-[3rem] h-[3rem] bg-gray-200 border rounded-[100%] hover:shadow-lg text-[1.5rem] "
    >
      +
    </button>
  );
};

export default Button;
