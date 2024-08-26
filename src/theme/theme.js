let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const darkTheme = {
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  },
  colors: {
    text: "#c9c9c9",
    navbarBackground: "#1f1f1f",
    background: "rgba(31, 31, 31, 0.98)",
    borderShadow: "0 2px 4px rgba(45, 45, 45, 0.5)",
    topShadow: "0 -2px 4px rgba(45, 45, 45, 0.5)",
    rightShadow: "4px 0px 4px rgba(45, 45, 45, 0.5)",
    hoverBackground: "rgba(128, 128, 128, 0.1)",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    sectionTitle:
      "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
    baseColor: colors[0],
    tagColor: "#d8bfbf",
    borderColor: "#141414",
    blogTitle: " #d4c0c0",
  },
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1440px)",
  },
};

export const lightTheme = {
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  },
  colors: {
    text: "#1f1f1f",
    navbarBackground: "#f8f8f8",
    background: "rgba(248, 248, 248, 0.99)",
    borderShadow: " 0px 2px 4px rgba(0, 0, 0, 0.1)",
    topShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
    rightShadow: "4px 0px 4px rgba(0, 0, 0, 0.1)",
    hoverBackground: "rgba(128, 128, 128, 0.1)",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    sectionTitle: "linear-gradient(121.57deg, #8C8C8C 18.77%, #6E6E6E 60.15%)",
    baseColor: colors[0],
    tagColor: "#6c757d",
    borderColor: "#ebebeb",
    blogTitle: "#801414",
  },
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1440px)",
  },
};

//
