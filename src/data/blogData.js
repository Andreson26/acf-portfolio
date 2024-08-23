import { v4 as uuidv4 } from "uuid";
const blogId = uuidv4();

export const blogData = [
  {
    blogId,
    image: "/img/blog1Images/imgTitle.jpg",
    title: "React Best Practices: A Mini Crash Course",
    author: "Andreson Ceide",
    date: "8/22/2024",
    description:
      "React is a powerful library for building user interfaces, but to make the most out of it, following best practices is essential. Here's a quick guide to help you write clean, maintainable, and efficient React code.",
    tags: ["useState, useEffect", "protoTypes", "Testing", "CSS"],
    contents: [
      {
        subtitle: " Keep Components Small and Focused",
        subContents: [
          {
            title: "Principle",
            text: "Each component should do one thing well. If a component is growing too large, consider splitting it into smaller, more manageable pieces.",
          },
          {
            title: "Benefit",
            text: "Small components are easier to understand, test, and reuse",
          },
          {
            codeExample: "/img/blog1Images/image1.jpg",
          },
        ],
      },
      {
        subtitle: "Use Functional Components and Hooks",
        subContents: [
          {
            title: "Principle",
            text: "Prefer functional components with hooks over class components. They are simpler, more concise, and avoid many common pitfalls.",
          },
          {
            title: "Benefit",
            text: " Hooks like useState, useEffect, and useContext make it easier to manage state and lifecycle events in functional components.",
          },
          {
            codeExample: "/img/blog1Images/image2.jpg",
          },
        ],
      },
      {
        subtitle: " Lift State Up When Necessary",
        subContents: [
          {
            title: "Principle",
            text: "If multiple components need access to the same piece of state, move the state to the nearest common ancestor.",
          },
          {
            title: "Benefit",
            text: " This approach prevents redundant state and makes it easier to manage data flow in your app.",
          },
          {
            codeExample: "/img/blog1Images/image3.jpg",
          },
        ],
      },
      {
        subtitle: "Avoid Inline Styles and Use CSS-in-JS or CSS Modules",
        subContents: [
          {
            title: "Principle",
            text: "Avoid inline styles and global CSS to prevent conflicts and promote consistency.",
          },
          {
            title: "Benefit",
            text: " CSS-in-JS (like styled-components) or CSS Modules ensure styles are scoped to specific components.",
          },
          {
            codeExample: "/img/blog1Images/image4.jpg",
          },
        ],
      },
      {
        subtitle: "Use PropTypes or TypeScript",
        subContents: [
          {
            title: "Principle",
            text: "Validate your component props with PropTypes or TypeScript to catch potential issues early.",
          },
          {
            title: "Benefit",
            text: "This ensures that your components receive the correct data types, reducing bugs.",
          },
          {
            codeExample: "/img/blog1Images/image5.jpg",
          },
        ],
      },
      {
        subtitle: "Optimize Performance with React.memo and useMemo",
        subContents: [
          {
            title: "Principle",
            text: "Use React.memo to prevent unnecessary re-renders and useMemo to memoize expensive calculations.",
          },
          {
            title: "Benefit",
            text: "TThis can improve the performance of your app, especially in larger applications.",
          },
          {
            codeExample: "/img/blog1Images/image6.jpg",
          },
        ],
      },
      {
        subtitle: "Use useEffect Wisely",
        subContents: [
          {
            title: "Principle",
            text: "Avoid unnecessary side effects by using useEffect only when needed, and clean up effects when appropriate.",
          },
          {
            title: "Benefit",
            text: " Prevents memory leaks and unintended behavior in your components.",
          },
          {
            codeExample: "/img/blog1Images/image7.jpg",
          },
        ],
      },
      {
        subtitle: "Organize Your Project Structure",
        subContents: [
          {
            title: "Principle",
            text: "Keep a well-organized folder structure to manage your components, assets, and other files.",
          },
          {
            title: "Benefit",
            text: "Makes it easier to find, manage, and scale your codebase.",
          },
          {
            codeExample: "/img/blog1Images/image8.jpg",
          },
        ],
      },
    ],
  },

  {
    blogId1: blogId,
    image: "/img/blog1Images/imgTitle.jpg",
    title: "React Best Practices: A Mini Crash Course",
    author: "Andreson Ceide",
    description:
      "React is a powerful library for building user interfaces, but to make the most out of it, following best practices is essential. Here's a quick guide to help you write clean, maintainable, and efficient React code.",
    tags: ["useState, useEffect", "protoTypes", "Testing", "CSS"],
    contents: [
      {
        subtitle: " Keep Components Small and Focused",
        subContents: [
          {
            title: "Principle",
            text: "Each component should do one thing well. If a component is growing too large, consider splitting it into smaller, more manageable pieces.",
          },
          {
            title: "Benefit",
            text: "Small components are easier to understand, test, and reuse",
          },
          {
            codeExample: "/img/blog1Images/image1.jpg",
          },
        ],
      },
      {
        subtitle: "Use Functional Components and Hooks",
        subContents: [
          {
            title: "Principle",
            text: "Prefer functional components with hooks over class components. They are simpler, more concise, and avoid many common pitfalls.",
          },
          {
            title: "Benefit",
            text: " Hooks like useState, useEffect, and useContext make it easier to manage state and lifecycle events in functional components.",
          },
          {
            codeExample: "/img/blog1Images/image2.jpg",
          },
        ],
      },
      {
        subtitle: " Lift State Up When Necessary",
        subContents: [
          {
            title: "Principle",
            text: "If multiple components need access to the same piece of state, move the state to the nearest common ancestor.",
          },
          {
            title: "Benefit",
            text: " This approach prevents redundant state and makes it easier to manage data flow in your app.",
          },
          {
            codeExample: "/img/blog1Images/image3.jpg",
          },
        ],
      },
      {
        subtitle: "Avoid Inline Styles and Use CSS-in-JS or CSS Modules",
        subContents: [
          {
            title: "Principle",
            text: "Avoid inline styles and global CSS to prevent conflicts and promote consistency.",
          },
          {
            title: "Benefit",
            text: " CSS-in-JS (like styled-components) or CSS Modules ensure styles are scoped to specific components.",
          },
          {
            codeExample: "/img/blog1Images/image4.jpg",
          },
        ],
      },
      {
        subtitle: "Use PropTypes or TypeScript",
        subContents: [
          {
            title: "Principle",
            text: "Validate your component props with PropTypes or TypeScript to catch potential issues early.",
          },
          {
            title: "Benefit",
            text: "This ensures that your components receive the correct data types, reducing bugs.",
          },
          {
            codeExample: "/img/blog1Images/image5.jpg",
          },
        ],
      },
      {
        subtitle: "Optimize Performance with React.memo and useMemo",
        subContents: [
          {
            title: "Principle",
            text: "Use React.memo to prevent unnecessary re-renders and useMemo to memoize expensive calculations.",
          },
          {
            title: "Benefit",
            text: "TThis can improve the performance of your app, especially in larger applications.",
          },
          {
            codeExample: "/img/blog1Images/image6.jpg",
          },
        ],
      },
      {
        subtitle: "Use useEffect Wisely",
        subContents: [
          {
            title: "Principle",
            text: "Avoid unnecessary side effects by using useEffect only when needed, and clean up effects when appropriate.",
          },
          {
            title: "Benefit",
            text: " Prevents memory leaks and unintended behavior in your components.",
          },
          {
            codeExample: "/img/blog1Images/image7.jpg",
          },
        ],
      },
      {
        subtitle: "Organize Your Project Structure",
        subContents: [
          {
            title: "Principle",
            text: "Keep a well-organized folder structure to manage your components, assets, and other files.",
          },
          {
            title: "Benefit",
            text: "Makes it easier to find, manage, and scale your codebase.",
          },
          {
            codeExample: "/img/blog1Images/image8.jpg",
          },
        ],
      },
    ],
  },
];
