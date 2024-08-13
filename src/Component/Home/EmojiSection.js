import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  font-size: 1.7rem;
  line-height: 1.5;
  cursor: default;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
  justify-content: center;
}
`;

const Emoji = styled.span`
  margin-right: 0.5rem; /* Adjust for small screens */
  font-size: 2.5rem;

  @media (min-width: 768px) {
    margin-right: 1rem; /* Adjust for medium screens and up */
  }
`;

const EmailLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 550;

  &:hover {
    text-decoration: underline;
  }
`;

function EmojiSection({ emoji, text, isEmail }) {
    return (
        <ListItem>
          <Emoji role="img" aria-label="emoji">
            {emoji}
          </Emoji>
          {isEmail ? (
            <EmailLink href={`mailto:${text}`}>Let&apos;s get in touch</EmailLink>
          ) : (
            text
          )}
        </ListItem>
      );
    
}

export default EmojiSection;