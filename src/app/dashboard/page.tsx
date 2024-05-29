"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function Dashboard() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Clientes cadastrados" />
        {/* <ECommerce /> */}
      </DefaultLayout>
    </>
  );
}
