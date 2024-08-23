'use client';
import { BlogsPageContainer, BlogsTitle, PageInnerContainer } from '@/styles';
import Blogs from '@/Component/Blogs/Blogs';

export default function BlogPage() {
  return (
    <BlogsPageContainer>
      <BlogsTitle>Designing for the Future: <span>Web Development Trends to read</span></BlogsTitle>
      <PageInnerContainer>
        <Blogs />

        <div style={{ flex: "2", display:"flex", flexDirection: "column", alignItems: "center",}}>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
        </div>
      </PageInnerContainer>
    </BlogsPageContainer>
  );
}


