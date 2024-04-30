import { Routes } from "@/models/routers";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-3 capitalize">
        <li className="hover:font-bold hover:text-blue-700">
          <Link href={Routes.HOME}>home</Link>
        </li>
        <li className="hover:font-bold hover:text-blue-700">
          <Link href={Routes.POSTS}>posts</Link>
        </li>
        <li className="hover:font-bold hover:text-blue-700">
          <Link href={Routes.USERS}>users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
