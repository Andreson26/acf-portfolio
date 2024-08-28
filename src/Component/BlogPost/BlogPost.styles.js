import styled from "styled-components";
import Image from "next/image";

export const BlogContent = styled.div`
  flex: 0 0 75%;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    order: 2;
    margin: 30px 0;
  }
    h4 {
     @media ${(props) => props.theme.breakpoints.sm} {
     font-size: 14px;
     text-align: center;
     }
    }
`;

export const BlogImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border-radius: 15px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.navbarBackground};
  box-shadow: ${(props) => props.theme.colors.borderShadow};

  @media ${(props) => props.theme.breakpoints.md} {
  }
`;

export const BlogImage = styled(Image)`
  object-fit: cover;
  width: 100%;
`;

export const ContentContainer = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
  }
`;

export const AuthorSection = styled.p`
  text-align: center;
  background: ${(props) => props.theme.colors.sectionTitle};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  margin: 10px;
`;

export const Content = styled.div`
  margin: 20px;
`;
export const SubContent = styled.div`
  margin: 15px 0;
`;
