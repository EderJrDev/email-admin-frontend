import { UserDetal } from "@/app/users/models/user.model";

interface Props {
  user: UserDetal;
}

const UserDetailPost = ({ user }: Props) => {
  const { data } = user;

  return (
    <div>
      <p className="font-bold text-right mb-1">
        {data?.first_name} {data?.last_name}
      </p>
      <img src={data?.avatar} alt="" />
    </div>
  );
};

export default UserDetailPost;
