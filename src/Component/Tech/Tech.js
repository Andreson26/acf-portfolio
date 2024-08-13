import React from "react";
import { DiReact, DiFirebase, DiZend } from "react-icons/di";
import {
  BodySection,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "@/styles";
import { List, ListItem, ListContainer, ListTitle, ListParagraph } from "./Tech.styles";

export default function Technologies() {
  return (
    <BodySection id="tech">
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have worked with a range of tools and technologies in the web
        development World from Front-End to Back-End.
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
                Experience with <br/>
                React.js and NextJs
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
            <picture>
                <DiFirebase size="3rem" />
            </picture>
            <ListContainer>
                <ListTitle>Back-End</ListTitle>
                <ListParagraph>
                    Experience with <br />
                    Node and Database such as MongoDB
                </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <picture>
                <DiZend size="3rem" />
            </picture>
            <ListContainer>
                <ListTitle>UI/UX</ListTitle>
                <ListParagraph>
                    Experience with <br />
                    tools like Figma and YouTrack
                </ListParagraph>
            </ListContainer>
        </ListItem>
      </List>
      <div>
        <p></p>
      </div>
    </BodySection>
  );
}