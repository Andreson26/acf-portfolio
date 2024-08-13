import React, { useState, useEffect } from "react";
import {
  CarouselContainer,
  CarouselItem,
  CarouselContent,
  CarouselTitle,
  CarouselParagraph,
  RadioButtonContainer,
  RadioButton,
  ItemsContainer,
} from "./About.styles";
import {
  BodySection,
  SectionTitle,
  SectionText,
  SectionDivider,
} from "@/styles";
import { info } from "@/data/data";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalItems = info.timeLineData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 30000);
    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <BodySection id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hello! I'm Andreson, a full stack developer based in Charlotte, NC, with
        a focus on the MERN stack. Over the past three years, I've enhanced my
        skills in web development, and I'm currently diving deeper into
        PostgreSQL and Docker . As I continue to build my expertise in my
        preferred technologies, I'm eager to expand my knowledge into Java, with
        plans to explore Python in the future. Beyond coding, I have a passion
        for staying active 🏋️‍♂️ and value quality time with family and friends 👨‍👩‍👧‍👦.
        I'm currently seeking new opportunities to leverage my skills and
        contribute to a dynamic team.
      </SectionText>

      <CarouselContainer>
        <CarouselContent activeIndex={activeIndex}>
          {info.timeLineData.map((item, index) => (
            <CarouselItem key={index}>
              <ItemsContainer>
                <CarouselTitle>{item.year}</CarouselTitle>
                <CarouselParagraph>{item.text}</CarouselParagraph>
              </ItemsContainer>
            </CarouselItem>
          ))}
        </CarouselContent>
        <RadioButtonContainer>
          {info.timeLineData.map((_, index) => (
            <RadioButton
              key={index}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </RadioButtonContainer>
      </CarouselContainer>

      <SectionDivider divider />
    </BodySection>
  );
};

export default About;
