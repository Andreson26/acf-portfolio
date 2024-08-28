import React from "react";
import { BlogTags, BlogTag, BlogTagsContainer, LinkTag } from "./Tag.styles";
import BlogButton from "../BlogButton/BlogButton";

export default function Tag({ post }) {
  console.log(post.tags);
  return (
    <BlogTagsContainer>
      <BlogTags>
        {post.tags.map((tagObj, index) => (
          <BlogTag key={index}>
            <LinkTag
              href={tagObj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tagObj.tag}
            </LinkTag>
          </BlogTag>
        ))}
      </BlogTags >
    </BlogTagsContainer>
  );
}
