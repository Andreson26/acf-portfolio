import React, { useState, useEffect } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
  Logo,
  BlogLink,
  BlogLinkExtended,
} from "./Header.styles";

function Header({ toggleTheme, isDarkTheme }) {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleBodyClass = () => {
      if (extendNavbar) {
        document.body.classList.add("navbar-extended");
      } else {
        document.body.classList.remove("navbar-extended");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleBodyClass();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [extendNavbar]);

  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <NavbarInnerContainer>
          <LeftContainer>
            <Logo src="/img/acf-logo.png" alt="logo" width={100} height={100} />
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavbarLink
                activeclass="active"
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </NavbarLink>
              <NavbarLink to="about" spy={true} smooth={true} duration={500}>
                About
              </NavbarLink>
              <NavbarLink to="projects" spy={true} smooth={true} duration={500}>
                Projects
              </NavbarLink>
              <NavbarLink to="tech" spy={true} smooth={true} duration={500}>
                Technologies
              </NavbarLink>
              <Link href="/blog" passHref>
                <BlogLink>Blog</BlogLink>
              </Link>
              <NavbarLink noHover>
                <ThemeToggler
                  toggleTheme={toggleTheme}
                  isDarkTheme={isDarkTheme}
                />
              </NavbarLink>
              <OpenLinksButton onClick={() => setExtendNavbar(!extendNavbar)}>
                {extendNavbar ? (
                  <RxCross2 size={25} />
                ) : (
                  <DragHandleIcon fontSize="large" />
                )}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>

      <NavbarExtendedContainer extendNavbar={extendNavbar}>
        <NavbarLinkExtended activeClass="active" to="hero">
          Home
        </NavbarLinkExtended>
        <NavbarLinkExtended
          to="about"
          onClick={() => setExtendNavbar(!extendNavbar)}
        >
          About
        </NavbarLinkExtended>
        <NavbarLinkExtended
          to="projects"
          onClick={() => setExtendNavbar(!extendNavbar)}
        >
          Projects
        </NavbarLinkExtended>
        <NavbarLinkExtended
          to="tech"
          onClick={() => setExtendNavbar(!extendNavbar)}
        >
          Technologies
        </NavbarLinkExtended>
        <Link href="/blog" passHref>
          <BlogLinkExtended onClick={() => setExtendNavbar(false)}>
            Blog
          </BlogLinkExtended>
        </Link>

        <NavbarLinkExtended noHover>
          <ThemeToggler toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </NavbarLinkExtended>
      </NavbarExtendedContainer>
    </>
  );
}

export default Header;
