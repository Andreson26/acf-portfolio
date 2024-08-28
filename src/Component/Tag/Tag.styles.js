import styled from "styled-components";

export const BlogTagsContainer = styled.div`
  flex: 0 0 25%;

    @media ${(props) => props.theme.breakpoints.md} {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const BlogTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;
export const BlogTag = styled.li`
  border: 1px solid ${(props) => props.theme.colors.blogTitle};
  padding: 5px;
  border-radius: 10px;
  margin: 5px;
`;

export const LinkTag = styled.a`
  text-align: center;
  color: ${(props) => props.theme.colors.blogTitle};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 1px;
  word-spacing: 4px;
`;
