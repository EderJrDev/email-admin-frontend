"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getSession } from "next-auth/react";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    async function fethSession() {
      const session = await getSession();
      console.log(session);
      // return session;
      const response = fethSession();
      console.log(response);
      if (!response) {
        return <div>You need to be authenticated to view this page.</div>;
      }
    }
  }, []);
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Clientes cadastrados" />
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
