import React, { useState, useEffect } from "react";
import Link from "next/link";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { RxCross2 } from "react-icons/rx";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import {
  BlogHeaderContainer,
  BlogNav,
  ImageContainer,
  BlogLogo,
  LinksContainer,
  NavBlogLinks,
  BlogOpenLinksButton,
  ToggleContainer,
  BlogExtendedNavbar,
  ExtendedNavBlogLinks,
} from "./BlogHeader.styles";

function BlogHeader({ toggleTheme, isDarkTheme }) {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /*useEffect(() => {
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
  }, [extendNavbar]);*/

  return (
    <BlogHeaderContainer>
      <BlogNav>
        <ImageContainer>
          <Link href="/">
          <BlogLogo
            src="/img/acf-logo.png"
            alt="logo"
            width={100}
            height={100}
          /></Link>
    
        </ImageContainer>
        <LinksContainer>
          <NavBlogLinks href="/" activeclass="active">
            Home
          </NavBlogLinks>
          <ToggleContainer>
          <ThemeToggler toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          </ToggleContainer>
          <BlogOpenLinksButton onClick={() => setExtendNavbar(!extendNavbar)}>
            {extendNavbar ? (
              <RxCross2 size={25} />
            ) : (
              <DragHandleIcon fontSize="large" />
            )}
          </BlogOpenLinksButton>
        </LinksContainer>
      </BlogNav>
      <BlogExtendedNavbar extendnavbar={extendNavbar}>
        <ExtendedNavBlogLinks href='/'>
            Home
        </ExtendedNavBlogLinks>
        <ToggleContainer display>
          <ThemeToggler toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </ToggleContainer>
      </BlogExtendedNavbar>
    </BlogHeaderContainer>
  );
}

export default BlogHeader;
