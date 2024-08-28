"use client";
import { BlogsPageContainer, PageInnerContainer } from "@/styles";
import BlogPost from "@/Component/BlogPost/BlogPost";
import Tag from "@/Component/Tag/Tag";
import { blogData } from "@/data/blogData";

export default function BlogPostPage({ params }) {
  const { id } = params;

  // Find the post by `id`
  const post = blogData.find((p) => p.blogId === parseInt(id));

  if (!post) {
    return <p>Blog post not found. in id</p>;
  }

  return (
    <BlogsPageContainer noshadow="true">
      <PageInnerContainer>
        <BlogPost post={post} />
        <Tag post={post} />
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
