"use client";
import { useState, useEffect } from "react";
import Loader from "@/Component/Loader/Loader";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/theme/theme";
import { GlobalStyles } from "@/styles/GlobalStyles";
import Header from "@/Component/Header/Header";
import RootLayout from "./layout";
import { BodySection } from "@/styles";
import Hero from "@/Component/Home/Home";
import BackgroundAnimation from "@/Component/backgroundAnimation/BackgroundAnimation";
import About from "@/Component/About/About";
import Projects from "@/Component/Projects/Projects";
import Technologies from "@/Component/Tech/Tech";
import Footer from "@/Component/Footer/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <RootLayout>
        <BodySection grid>
          <Hero />
          <BackgroundAnimation />
        </BodySection>
        <About />
        <Projects />
        <Technologies />
      </RootLayout>
      <Footer />
    </ThemeProvider>
  );
}
