import { Post } from "../../models/Post.model";

export const fetchFindOnePost = async (id: number): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
};
