import React from "react";
import { BodySection, SectionDivider, SectionTitle } from "@/styles";
import { projects } from "@/data/data";
import {
  ImageContainer,
  BlogCard,
  GridContainer,
  Hr,
  Tag,
  TagList,
  Img,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  TitleContent,
  UtilityList,
} from "./Projects.styles";
import { info } from "@/data/data";

export default function Projects() {
  return (
    <BodySection id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {info.projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <ImageContainer>
                <Img src={p.image} />
              </ImageContainer>

              <TitleContent title>
                <HeaderThree>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack and Tools</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.visit} target="_blank">
                  Visit
                </ExternalLinks>
                <ExternalLinks href={p.source} target="_blank">
                  Source
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
      <SectionDivider divider />
    </BodySection>
  );
}
