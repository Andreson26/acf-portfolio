import styled, { keyframes } from "styled-components";
import Image from "next/image";

const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const ProfileInfoContainer = styled.div``;

export const ListContainer = styled.ul`
  margin: 10px 15px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vh;
  height: 40vh;
  padding-top: 30px;
  background: ${(props) => props.theme.colors.gradient};
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid white;

  @media only screen and (max-width: 768px) {
  width: 30vh;
  height: 30vh;
    
}
`;
export const Img = styled(Image)`
  object-fit: cover;
`;
export const Title = styled.p`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 10px;
  @media only screen and (min-width: 940px) {
    font-size: 4rem;
    text-align: left;
}
`;

export const SpanName = styled.span`
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SpanHand = styled.span`
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

export const UnderTitle = styled.p`
  text-align: center;
  @media only screen and (min-width: 940px) {
    font-size: 2.5rem;
    text-align: left;
  
`;
