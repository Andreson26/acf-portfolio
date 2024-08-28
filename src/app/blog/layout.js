"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/theme/theme";
import { GlobalStyles } from "@/styles/GlobalStyles";
import BlogHeader from "@/Component/BlogHeader/BlogHeader";
import BlogFooter from "@/Component/BlogFooter/BlogFooter";
import Loader from "@/Component/Loader/Loader";
import ScrollToTopButton from "@/Component/ScrollToTopButton/ScrollToTopButton";

export default function BlogLayout({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkTheme") === "true";
    setIsDarkTheme(savedTheme);
    setIsLoading(false); 
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("isDarkTheme", newTheme);
      return newTheme;
    });
  };

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <BlogHeader toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <div>{children}</div>
      <ScrollToTopButton />
      <BlogFooter />
    </ThemeProvider>
  );
}
