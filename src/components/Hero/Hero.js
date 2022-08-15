import React from 'react';

//Import general styled components from Global Components
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
//Import Hero-specific components from HeroStyles.js
import { LeftSection } from './HeroStyles';

import waitlist from '@zootools/waitlist-js';
import { useCallback } from 'react';

const Hero = (props) => {
  const joinWaitlist = useCallback((event) => {
    event.preventDefault();
  
    // Pass your waitlist ID
    waitlist.openPopup("UrCfHiKOtIhPs5hiDrCd")
  }, [])

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Reward Fans, Boost Attendance, Create a Winning Culture.
        </SectionTitle>
        <SectionText>
          We help sports team deliver special offerings to their loyal fans through NFT's. 
        </SectionText>
        <Button onClick={joinWaitlist}>Let's Connect</Button>
      </LeftSection>
    </Section>
  )
}

export default Hero;