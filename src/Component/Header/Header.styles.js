import styled from "styled-components";
import { Link } from "react-scroll";
import Image from "next/image";

export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: ${(props) =>
    props.scrolled
      ? props.theme.colors.background
      : props.theme.colors.navbarBackground};
  box-shadow: ${(props) => props.theme.colors.borderShadow};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
  transition: background-color 0.3s ease-in-out;

  @media (max-width: 768px) {
    height: 80px;
    font-size: 14px;
    padding: 0;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 0;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarLink = styled(Link)`
  line-height: 32px;
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  transition: background-color 0.4s ease;
  text-decoration: none;
  padding: 1px 15px; /* Consistent padding */
  border-radius: 10px;
  margin-left: ${(props) => (props.noHover ? "40px" : "0")};

  &:hover {
    background-color: ${(props) =>
      props.noHover ? "transparent" : props.theme.colors.hoverBackground};
    cursor: pointer;
  }

  &.active {
    background-color: ${(props) => props.theme.colors.activeBackground};
    /* Ensure padding or margin doesn't change */
  }

  &:focus {
    outline: none; /* Avoid outline changing layout */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BlogLink = styled.p`
  line-height: 32px;
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  transition: background-color 0.4s ease;
  text-decoration: none;
  padding: 1px 15px; /* Consistent padding */
  border-radius: 10px;
  margin-left: ${(props) => (props.noHover ? "40px" : "0")};

  &:hover {
    background-color: ${(props) =>
      props.noHover ? "transparent" : props.theme.colors.hoverBackground};
    cursor: pointer;
  }

  &.active {
    background-color: ${(props) => props.theme.colors.activeBackground};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  line-height: 32px;
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  transition: background-color 0.4s ease;
  text-decoration: none;
  padding: 10px 20px;
  margin-top: ${(props) => (props.noHover ? "20px" : "none")};

  &:hover {
    background-color: ${(props) =>
      props.noHover ? "none" : props.theme.colors.hoverBackground};
    opacity: 1;
    cursor: pointer;
  }
`;

export const BlogLinkExtended = styled.p`
  line-height: 32px;
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  transition: background-color 0.4s ease;
  text-decoration: none;
  padding: 10px 20px;
  margin-top: ${(props) => (props.noHover ? "20px" : "none")};

  &:hover {
    background-color: ${(props) =>
      props.noHover ? "none" : props.theme.colors.hoverBackground};
    opacity: 1;
    cursor: pointer;
  }
`;

export const Logo = styled(Image)`
  height: 40px;

  @media (min-width: 768px) {
    height: 50px;
  }
`;

export const OpenLinksButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: ${(props) => (props.extendNavbar ? "flex" : "none")};
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.navbarBackground};
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: opacity 0.4s ease;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;
