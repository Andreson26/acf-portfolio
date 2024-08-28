import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const BlogsContainer = styled.div`
  flex: 0 0 80%;
    @media ${(props) => props.theme.breakpoints.md} {
    order: 2;
    margin: 30px 0;
    display: flex;
    justify-content: center;
  }
`;

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
    align-content: center;
   @media ${(props) => props.theme.breakpoints.md} {
    gap: 20px;     
   }

   @media ${(props) => props.theme.breakpoints.sm} {
   grid-template-columns: none;
   }
`;

export const List = styled.li`
  width: 350px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 300px;
   }
      @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
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

  @media ${(props) => props.theme.breakpoints.md} {
    height: 180px;
    width: 100%;
   }

    @media ${(props) => props.theme.breakpoints.sm} {
    height: 200px;
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
   @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    margin-top: 20px;
   }
`;

export const TitleLink = styled(Link)`
  text-align: center;
  color: ${(props) => props.theme.colors.blogTitle};
  font-weight: 500;
  font-size: 16px;

   @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
   }
`;

export const BlogContent = styled.div`
  margin: 10px 0;
  padding: 5px 30px;
  font-size: 14px;
   @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;    
   }
`;

export const AuthorSection = styled(Link)`
  text-align: center;
  background: ${(props) => props.theme.colors.sectionTitle};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;

   @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
   }
`;

export const ContentLink = styled(Link)`
  color: ${(props) => props.theme.colors.blogTitle};
`;
