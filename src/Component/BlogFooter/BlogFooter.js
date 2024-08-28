import React from "react";
import { FaEnvelope, FaLinkedin, } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinks,
  FooterText,
} from "../Footer/Footer.styles";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="mailto:your.andresonceide26@gmail.com">
          <FaEnvelope /> Send an Email
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/andreson-ceide"
          target="_blank"
        >
          <FaLinkedin /> My LinkedIn
        </FooterLink>
      </FooterLinks>
      <FooterText>© {currentYear} Andreson. All rights reserved.</FooterText>
    </FooterContainer>
  );
}
