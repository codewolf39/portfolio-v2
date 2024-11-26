import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Software Developer</SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/codewolf39")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
