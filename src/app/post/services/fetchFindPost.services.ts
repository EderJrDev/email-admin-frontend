import { Post } from "../models/Post.model";

export const fetchFindPost = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();

  return data;
};
