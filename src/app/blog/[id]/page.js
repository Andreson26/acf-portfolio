"use client";
import Tags from "@/Component/Tags/Tags";
import { BlogsPageContainer, PageInnerContainer } from "@/styles";
import BlogPost from "@/Component/BlogPost/BlogPost";
import { blogData } from "@/data/blogData";

export default function BlogPostPage({ params }) {
  const { id } = params;

  // Find the post by `id`
  const post = blogData.find((p) => p.blogId === parseInt(id));

  if (!post) {
    return <p>Blog post not found. in id</p>;
  }

  return (
    <BlogsPageContainer noshadow>
      <PageInnerContainer>
        <BlogPost post={post} />
        <Tags />
      </PageInnerContainer>
    </BlogsPageContainer>
  );
}

// If using getStaticProps
// export async function getStaticPaths() {
//   // Generate paths based on your data
// }

// export async function getStaticProps({ params }) {
//   // Fetch the post data based on the slug
// }
