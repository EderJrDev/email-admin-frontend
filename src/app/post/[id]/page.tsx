import Title from "@/components/Title.components";
import { fetchFindOnePost } from "./services/fetchFindOnePost.services";
import CardDetail from "./components/CardDetail.components";

const PostId = async ({ params }: any) => {
  const { id } = params;

  const post = await fetchFindOnePost(id);

  return (
    <article>
      <Title title={`post ${id} detail`} />
      <div className="my-5">
        <CardDetail data={post} />
      </div>
    </article>
  );
};

export default PostId;
