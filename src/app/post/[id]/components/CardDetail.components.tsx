import { fetchFindOneUser } from "@/services/fetchFindOneUser.services";
import { Post } from "../../models/Post.model";
import UserDetailPost from "./UserDetailPost";

interface Props {
  data: Post;
}

const CardDetail = async ({ data }: Props) => {
  const user = await fetchFindOneUser(data.id);
  return (
    <div>
      <h2 className="font-bold text-lg mb-3">{data.title}</h2>
      <p>{data.body}</p>

      <div className="w-full flex justify-end my-6">
        <UserDetailPost user={user} />
      </div>
    </div>
  );
};

export default CardDetail;
