"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Clientes cadastrados" />
        <ECommerce />
      </DefaultLayout>
    </>
  );
}