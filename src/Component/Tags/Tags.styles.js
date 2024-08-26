import styled from "styled-components";

export const TagsSectionContainer = styled.div`
    flex: 0 0 20%;

    @media ${(props) => props.theme.breakpoints.md} {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TagTitle = styled.h3`
  color: ${(props) => props.theme.colors.blogTitle};
  margin-bottom: 10px;
`;

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap; 
  list-style-type: none; 
  padding: 0;
  margin-bottom: 20px;
`;

export const TagList = styled.li`
  border: 1px solid ${(props) => props.theme.colors.blogTitle};
  padding: 5px;
  border-radius: 10px;
  margin: 5px;
`;
export const LinkList = styled.a`
  text-align: center;
  color: ${(props) => props.theme.colors.blogTitle};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 1px;
  word-spacing: 4px;
`;
