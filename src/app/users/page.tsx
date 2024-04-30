import Title from "@/components/Title.components";
import { fetchFindUsers } from "./services/fetchFindUsers.services";
import CardUser from "./components/CardUser.components";
import { User } from "./models/user.model";
import GridCard from "./components/GridCard.component";

const Users = async () => {
  const users = await fetchFindUsers();

  return (
    <main>
      <Title title="Page Users" />

      <GridCard>
        {users.data.map((user: User) => (
          <>
            <CardUser key={user.id} data={user} />
          </>
        ))}
      </GridCard>
    </main>
  );
};

export default Users;
