// src/components/ScrollToTopButton/ScrollToTopButton.js
"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${(props) => (props.visible ? "block" : "none")};
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    bottom: 15px;
    right: 15px;
  }
`;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton visible={isVisible} onClick={scrollToTop}>
      ↑
    </ScrollButton>
  );
}
