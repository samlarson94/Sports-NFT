import React from 'react';

//Import general styled components from Global Components
import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
//Import Hero-specific components from HeroStyles.js

const Hero = (props) => (

<Section row center>
   <SectionDivider />
     <SectionTitle id="more-info" main center>
      Interested in learning more? 
     </SectionTitle>
     <Section style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
     <SectionText style={{ fontWeight:'bold', justifyContent:"center"}}>
      Reach out to our team today!
     </SectionText>
     <Button onClick={() => window.location = "mailto:samlarson94@gmail.com"}>Request Info</Button>
     </Section>
 </Section>
);

export default Hero;