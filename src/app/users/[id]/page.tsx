import Title from "@/components/Title.components";
import { fetchFindOneUser } from "@/services/fetchFindOneUser.services";
import UserDetail from "./components/UserDetail";

const UserDetailPage = async ({ params }: any) => {
  const { id } = params;
  const { support, data } = await fetchFindOneUser(id);

  return (
    <main>
      <Title title={`user ${id} details`} />

      <div className="my-8">
        <UserDetail Suport={support} data={data} />
      </div>
    </main>
  );
};

export default UserDetailPage;
