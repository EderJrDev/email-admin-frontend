import Button from "@/components/Button.componentes";
import { Post } from "../models/Post.model";

interface Props {
  data: Post;
}

const CardPost = ({ data }: Props) => {
  return (
    <article className="my-3 p-2 border rounded-md hover:bg-gray-100 hover:cursor-pointer hover:shadow-lg">
      <h2 className="font-bold capitalize">
        {data.id}. {data.title}
      </h2>
      <p>{data.body}</p>
      <div className="w-full flex justify-end">
        <Button id={data.id} path="post" />
      </div>
    </article>
  );
};

export default CardPost;
