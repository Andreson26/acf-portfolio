import { PortableWifiOffSharp } from "@mui/icons-material";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ItemsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.navbarBackground};
  box-shadow: ${(props) => props.theme.colors.borderShadow};
  width: 30%;
  padding: 20px;

   @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
  }
`;

export const CarouselTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  background: ${(props) => props.theme.colors.sectionTitle};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CarouselParagraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 2px;
  word-spacing: 4px;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const RadioButton = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#333" : "#ddd")};
  border: none;
  cursor: pointer;
  margin: 0 5px;
`;
