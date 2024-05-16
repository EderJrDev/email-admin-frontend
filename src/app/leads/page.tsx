"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Table from "./components/table";

export default function Leads() {
  function handleSave() {
    console.log("hi");
  }
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Clientes cadastrados" />
        <div className="flex flex-col gap-10">
          <Table handleSave={handleSave} />
        </div>
      </DefaultLayout>
    </>
  );
}
