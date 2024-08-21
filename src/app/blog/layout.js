"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/theme/theme";
import { GlobalStyles } from "@/styles/GlobalStyles";
import BlogHeader from "@/Component/BlogHeader/BlogHeader";
import BlogFooter from "@/Component/BlogFooter/BlogFooter";
import BlogBanner from "@/Component/BlogBanner/BlogBanner";

export default function BlogLayout({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkTheme") === "true";
    setIsDarkTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("isDarkTheme", newTheme);
      return newTheme;
    });
  };

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <BlogHeader toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <BlogBanner isDarkTheme={isDarkTheme} />
      <div>
        {children}
      </div>
      <BlogFooter />
    </ThemeProvider>
  );
}


