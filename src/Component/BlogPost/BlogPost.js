import React from "react";
import Image from "next/image";
import BlogButton from "../BlogButton/BlogButton";
import {
  BlogContent,
  BlogImage,
  BlogImageContainer,
  Content,
  AuthorSection,
  ContentContainer,
  SubContent,
  Description,
} from "./BlogPost.styles";

export default function BlogPost({ post }) {
  return (
    <BlogContent>
      <h4>{post.title.toUpperCase()}</h4>
      <BlogImageContainer>
        <BlogImage src={post.image} width={400} height={300} alt="image-blog" />
      </BlogImageContainer>

      <ContentContainer>
        <AuthorSection>
          by {post.author} | <span>{post.date}</span>
        </AuthorSection>
        <Description>{post.description} </Description>

        {post.contents.map((section, index) => (
          <Content key={index}>
            <h3>{section.subtitle}</h3>
            {section.subContents.map((subContent, subIndex) => (
              <SubContent key={subIndex}>
                <h4>{subContent.title}</h4>
                <p>{subContent.text}</p>
              </SubContent>
            ))}
            <div>
              <Image
                src={section.codeExample}
                width={300}
                height={250}
                alt="code-example for each lesson"
              />
            </div>
          </Content>
        ))}
      </ContentContainer>
      <BlogButton />
    </BlogContent>
  );
}
