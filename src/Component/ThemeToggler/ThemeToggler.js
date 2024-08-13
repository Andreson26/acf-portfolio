import React from "react";
import styled, { useTheme } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
`;

export default function ThemeToggler({ toggleTheme, isDarkTheme }) {
  const theme = useTheme();

  return (
    <ToggleContainer onClick={() => toggleTheme()}>
      {isDarkTheme ? <FaMoon size={20}/> : <FaSun size={20} /> }
    </ToggleContainer>
  );
}