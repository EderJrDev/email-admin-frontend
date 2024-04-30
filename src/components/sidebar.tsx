import { Routes } from "@/models/routers";
import { Notebook, Settings, Users } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex-none w-64 bg-gray-200">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href={Routes.HOME}
              className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
            >
              <Users size={32} />
              Leads
            </Link>
          </li>
          <li>
            <Link
              href={Routes.POSTS}
              className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
            >
              <Notebook size={32} />
              Últimos Cadastros
            </Link>
          </li>
          <li>
            <Link
              href={Routes.USERS}
              className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
            >
              <Settings />
              Configurações
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
