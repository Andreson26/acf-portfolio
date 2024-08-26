import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const BlogsContainer = styled.div`
  flex: 0 0 80%;
`;

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const List = styled.li`
  width: 350px;
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  border-radius: 10%;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.navbarBackground};
  box-shadow: ${(props) => props.theme.colors.borderShadow};

  @media only screen and (max-width: 768px) {
  }
`;
export const Img = styled(Image)`
  object-fit: cover;
  width: auto;
  height: auto;
`;

export const TitleContainer = styled.div`
  margin-top: 10px;
  padding: 5px 30px;
`;

export const TitleLink = styled(Link)`
  text-align: center;
  color: ${(props) => props.theme.colors.blogTitle};
  font-weight: 500;
  font-size: 16px;
`;

export const BlogContent = styled.div`
  margin: 10px 0;
  padding: 5px 30px;
  font-size: 14px;
`;

export const AuthorSection = styled(Link)`
  text-align: center;
  background: ${(props) => props.theme.colors.sectionTitle};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
`;

export const ContentLink = styled(Link)`
  color: ${(props) => props.theme.colors.blogTitle};
`;
