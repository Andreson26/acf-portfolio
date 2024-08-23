import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;

export const List = styled.li`
  width: 380px;
`;

export const ImageContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.navbarBackground};
  height: 220px;
  border-radius: 20px;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
