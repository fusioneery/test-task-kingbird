import React from "react";
import "./style.sass";
import MarsImg from "../../components/MarsImage/MarsImagePresentational";
import Section from "../../components/Section/SectionPresentational";
import Title from "../../components/Title/TitlePresentational";
import Features from "../../components/Features/FeaturesPresentational";
import ArticleHeading from "../../components/ArticleHeading/ArticleHeadingPresentational";
import ArticleText from "../../components/ArticleText/ArticleTextPresentational";

export const IndexPresentational = () => {
  return (
    <main className="main">
      <MarsImg />
      <Section>
        <Title>Mars</Title>
        <Features />
      </Section>
      <Section textSection>
        <ArticleHeading>Curiosity Rover</ArticleHeading>
        <ArticleText offset>
          With its rover named Curiosity, Mars Science Laboratory mission is
          part of NASA's Mars Exploration Program, a long-term effort of robotic
          exploration of the red planet. Curiosity was designed to assess
          whether Mars ever had an environment able to support small life forms
          called microbes. In other words, its mission is to determine the
          planet's "habitability."
        </ArticleText>
      </Section>
      <Section textSection>
        <ArticleHeading small>
          Mars Science Laboratory will study Mars' habitability
        </ArticleHeading>
        <ArticleText>
          To find out, the rover carries the biggest, most advanced suite of
          instruments for scientific studies ever sent to the martian surface.
          The rover will analyze samples scooped from the soil and drilled from
          rocks. The record of the planet's climate and geology is essentially
          "written in the rocks and soil" -- in their formation, structure, and
          chemical composition. The rover's onboard laboratory will study rocks,
          soils, and the local geologic setting in order to detect chemical
          building blocks of life (e.g., forms of carbon) on Mars and will
          assess what the martian environment was like in the past.
        </ArticleText>
      </Section>
    </main>
  );
};
