import React from "react";
import {
  ImageContainer,
  Img,
  Title,
  SpanName,
  SpanHand,
  UnderTitle,
  ProfileContainer,
  ListContainer,
} from "./Home.styles";
import { BodySection, SectionDivider } from "@/styles";
import { info } from "@/data/data";
import EmojiSection from "./EmojiSection";

export default function Home(props) {
  return (
    <BodySection id="hero">
      <ProfileContainer>
        <ImageContainer>
          <Img
            src="/img/portrait-review.jpg"
            alt="Portrait"
            width={300}
            height={250}
          />
        </ImageContainer>

        <div>
          <Title>
            Hi, I&apos;m <SpanName>{info.firstName}</SpanName>{" "}
            <SpanHand>🤚</SpanHand>{" "}
          </Title>
          <UnderTitle>I&apos;m {info.position}.</UnderTitle>
          <ListContainer>
            {info.miniBio.map((bio, index) => (
              <EmojiSection
                key={index}
                emoji={bio.emoji}
                text={bio.text}
                isEmail={bio.emoji === "📧"}
              />
            ))}
          </ListContainer>
        </div>
      </ProfileContainer>
      <SectionDivider />
    </BodySection>
  );
}
