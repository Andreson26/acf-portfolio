import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinks,
  FooterText,
} from "./Footer.styles";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="path/to/resume.pdf" target="_blank">
          <FaFileAlt /> Resume
        </FooterLink>
        <FooterLink href="mailto:your.andresonceide26@gmail.com">
          <FaEnvelope /> Send an Email
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/andreson-ceide"
          target="_blank"
        >
          <FaLinkedin /> My LinkedIn
        </FooterLink>
        <FooterLink href="https://github.com/Andreson26" target="_blank">
          <FaGithub /> My GitHub
        </FooterLink>
      </FooterLinks>
      <FooterText>© {currentYear} Andreson. All rights reserved.</FooterText>
    </FooterContainer>
  );
}
