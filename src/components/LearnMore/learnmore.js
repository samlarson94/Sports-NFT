import React from 'react';

//Import general styled components from Global Components
import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
//Import Hero-specific components from HeroStyles.js

const Hero = (props) => (

<Section row nopadding>
   <Section>
   <SectionDivider />
     <SectionTitle main center>
      Interested in learning more? 
     </SectionTitle>
     <SectionText>
      Reach out to our team today!
     </SectionText>
     <Button onClick={() => window.location = "mailto:samlarson94@gmail.com"}>Find Out More</Button>
   </Section>
 </Section>
);

export default Hero;