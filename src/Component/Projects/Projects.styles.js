import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ImageContainer = styled.div`
  height: 210px;
  width: 400px;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    height: auto;
    width: auto;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  place-items: center;
  column-gap: 8rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  height: 600px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 20px;
  color: ${(props) => props.theme.colors.text};
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;

  @media ${(props) => props.theme.breakpoints.md} {

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  border: 1px solid yellow;
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: ${(props) => props.theme.colors.tagColor};
  font-size: 1.5rem;
`;
