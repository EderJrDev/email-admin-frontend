import Title from "@/components/Title.components";
import Head from "@/components/Head";
import CardPost from "./components/CardPost.component";
import { Post } from "./models/Post.model";
import { fetchFindPost } from "./services/fetchFindPost.services";

const PostPage = async () => {
  const posts = await fetchFindPost();

  return (
    <main>
      <Head />
      <Title title={"estos son los post"} />
      <section>
        {posts.map((post: Post) => (
          <>
            <CardPost key={post.id} data={post} />
          </>
        ))}
      </section>
    </main>
  );
};

export default PostPage;
