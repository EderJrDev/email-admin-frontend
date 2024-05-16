import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/TableThree";

export default function Leads() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Clientes cadastrados" />
        <div className="flex flex-col gap-10">
          
          <TableThree />
        </div>
      </DefaultLayout>
    </>
  );
}
