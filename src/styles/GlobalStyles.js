import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize};

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
    body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.main};
     font-size: 1.6rem;
     cursor: default;
  }
     
    h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }


body.navbar-extended {
  margin-top: 200px; 
}

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.5rem;
  }
 

  /* Responsive adjustments */
  @media (max-width: 1200px) {
    h1 {
      font-size: 2.25rem;
    }
    h2 {
      font-size: 1.85rem;
    }
    h3 {
      font-size: 1.6rem;
    }
    h4 {
      font-size: 1.4rem;
    }
 
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.3rem;
    }
  
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.75rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    h4 {
      font-size: 1.1rem;
    }

  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.25rem;
    }
    h3 {
      font-size: 1.1rem;
    }
    h4 {
      font-size: 1rem;
    }
    
  }

`;
