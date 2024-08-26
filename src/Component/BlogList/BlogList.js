import React from "react";
import Link from "next/link";
import {
  List,
  ImageContainer,
  ListContainer,
  Img,
  TitleContainer,
  TitleLink,
  BlogContent,
  AuthorSection,
  ContentLink,
  BlogsContainer,
} from "./BlogList.styles";

export default function BlogList({ posts }) {
  return (
    <BlogsContainer>
      <ListContainer>
        {posts.map((post) => (
          <List key={post.blogId}>
            <Link href={`/blog/${post.blogId}`}>
              <ImageContainer>
                <Img
                  src={post.image}
                  width={350}
                  height={220}
                  alt="image-blog"
                />
              </ImageContainer>
            </Link>

            <TitleContainer>
              <TitleLink href={`/blog/${post.blogId}`}>
                {post.title.toUpperCase()}
              </TitleLink>
            </TitleContainer>
            <BlogContent>
              <AuthorSection href={`/blog/${post.blogId}`}>
                by {post.author} | <span>{post.date}</span>
              </AuthorSection>
              <p>
                {post.description}...{" "}
                <ContentLink href={`/blog/${post.blogId}`}>
                  read more
                </ContentLink>
              </p>
            </BlogContent>
          </List>
        ))}
      </ListContainer>
    </BlogsContainer>
  );
}
