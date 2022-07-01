import React from 'react';

//Import general styled components from Global Components
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
//Import Hero-specific components from HeroStyles.js
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
      Reward Fans, Boost Attendence, Create a Culture.
     </SectionTitle>
     <SectionText>
       We help sports team deliver special offerings to their loyal fans through NFT's. 
     </SectionText>
     <Button onClick={() => window.location = "mailto:samlarson94@gmail.com"}>Let's Connect</Button>
   </LeftSection>
 </Section>
);

export default Hero;