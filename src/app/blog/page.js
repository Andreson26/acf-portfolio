"use client";
import { BlogsPageContainer, BlogsTitle, PageInnerContainer } from "@/styles";
import BlogList from "@/Component/BlogList/BlogList";
import Tags from "@/Component/Tags/Tags";
import { blogData } from "@/data/blogData";

export default function BlogPage() {
  return (
    <BlogsPageContainer>
      <BlogsTitle>
        Designing for the Future: <span>Web Development Trends to read</span>
      </BlogsTitle>
      <PageInnerContainer>
        <BlogList posts={blogData}/>
        <Tags blogData={blogData}/>
      </PageInnerContainer>
    </BlogsPageContainer>
  );
}
