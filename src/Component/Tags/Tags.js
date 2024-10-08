import React from "react";
import {
  TagList,
  TagsList,
  TagsSectionContainer,
  TagTitle,
  LinkList,
} from "./Tags.styles";

export default function Tags({ blogData} ) {
  return (
    <TagsSectionContainer>
      <TagTitle>Tags for Recent Posts</TagTitle>
      <div>
        {blogData.map((post) => (
          <TagsList key={post.blogId}>
            {post.tags.map((tagObj, index) => (
              <TagList key={index}>
                
                  <LinkList
                    href={tagObj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tagObj.tag}
                  </LinkList>
                
              </TagList>
            ))}
          </TagsList>
        ))}
      </div>
    </TagsSectionContainer>
  );
}
