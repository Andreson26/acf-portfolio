import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.navbarBackground};
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${(props) => props.theme.colors.topShadow};
  margin-top: 40px;
  @media (min-width: 768px) {
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0.5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.tagColor};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.primary};
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export const FooterText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
`;
