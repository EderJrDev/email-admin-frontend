import { User, Suport } from "../../models/user.model";

interface Props {
  data: User;
  Suport: Suport;
}

const UserDetail = ({ data, Suport }: Props) => {
  return (
    <>
      <img src={data.avatar} width={300} height={300} alt={data.avatar} />
      <div>
        <p>
          <span className="text-lg font-semibold uppercase">name:</span>
          {data.first_name} {data.last_name}
        </p>
        <p>
          <span className="text-lg font-semibold uppercase">email:</span>
          {data.email}
        </p>
        <p className="mt-3">{Suport.text}</p>
      </div>
    </>
  );
};

export default UserDetail;
