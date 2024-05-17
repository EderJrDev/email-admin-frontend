"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Table from "./components/table";

export default function Users() {
  function handleSave() {
    console.log("hi");
  }
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Usuários cadastrados" />
        <div className="flex flex-col gap-10">
          <Table handleSave={handleSave} />
        </div>
      </DefaultLayout>
    </>
  );
}
