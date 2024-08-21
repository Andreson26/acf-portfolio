
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const BlogHeaderContainer = styled.nav`
  width: 100%;
  background-color: ${(props) =>
    props.scrolled
      ? props.theme.colors.background
      : props.theme.colors.navbarBackground};
  box-shadow: ${(props) => props.theme.colors.borderShadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  transition: background-color 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 15px;
  }
`;

export const BlogNav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`

export const ImageContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
`
export const BlogLogo = styled(Image)`
  height: 40px;

  @media (min-width: 768px) {
    height: 50px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const NavBlogLinks = styled(Link)`
  line-height: 32px;
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  transition: background-color 0.4s ease;
  text-decoration: none;
  padding: 1px 15px; 
  border-radius: 10px;

  &:hover {
    background-color: ${(props) =>
      props.noHover ? "transparent" : props.theme.colors.hoverBackground};
    cursor: pointer;
  }
    @media (max-width: 768px) {
    display: none;
  }
`;

export const ToggleContainer = styled.div`
  
    @media (max-width: 768px) {
    display: ${props => props.display ? "block" : "none"};
    padding: ${props => props.display ? "1px 15px " : ""}
  }
`

export const BlogOpenLinksButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BlogExtendedNavbar = styled.div`
  display: ${(props) => (props.extendNavbar ? "flex" : "none")};
  flex-direction: column;
  gap: 30px;
  background-color: ${(props) => props.theme.colors.navbarBackground};
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: opacity 0.4s ease;
  z-index: 1000;
  padding: 30px;

    @media (min-width: 768px) {
    display: none;
  }
`;
export const ExtendedNavBlogLinks = styled(Link)`
line-height: 32px;
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  transition: background-color 0.4s ease;
  text-decoration: none;
  padding: 1px 15px; 
  border-radius: 10px;

  
  &:hover {
    background-color: ${(props) =>
      props.noHover ? "transparent" : props.theme.colors.hoverBackground};
    cursor: pointer;
  }
`;
