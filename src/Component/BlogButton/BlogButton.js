import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function BlogButton() {
  return <ButtonLink href="/blog">Back to Blogs</ButtonLink>;
}

const ButtonLink = styled(Link)`
  margin: 20px auto;
  text-align:center;
  border-radius: 15px;
  color: #d4c0c0;
  font-size: 1.8rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;
