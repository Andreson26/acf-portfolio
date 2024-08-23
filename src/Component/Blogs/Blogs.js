import React, { useState, useEffect } from "react";
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
} from "./Blog.styles";
import { blogData } from "@/data/blogData";

export default function Blogs() {

  return (
    <ListContainer>
      {blogData.map((post) => (
        <List key={post.blogId}>
          <Link href={`/blog/${post.blogId}`}>
            <ImageContainer>
              <Img src={post.image} width={100} height={100} alt="image-blog" />
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
              <ContentLink href={`/blog/${post.blogId}`}>read more</ContentLink>
            </p>
          </BlogContent>
        </List>
      ))}
    </ListContainer>
  );
}
