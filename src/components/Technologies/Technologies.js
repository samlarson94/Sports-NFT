import React from 'react';
import { FaFootballBall, FaHandsHelping, FaBox } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    < br />
    <SectionTitle>The Process</SectionTitle>
    <SectionText>
      Be on the cutting edge of technology and marketing without the headaches involved.  Our team tackles the technical side and logistics so you can focus on putting on a great event.
    </SectionText>
    <List>
      <ListItem>
        <FaFootballBall size="3rem" />
        <ListContainer>
          <ListTitle>Reward Live Attendance</ListTitle>
          <ListParagraph>
            All NFT's are rewarded to people AT THE GAME. It is not tied to ticket sales and therefore cuts out resellers. <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaBox size="3rem" />
        <ListContainer>
          <ListTitle>Simplified Tech</ListTitle>
          <ListParagraph>
            Fans simply need to scan a QR code at the game to claim their NFT.  No technical expertise required. <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaHandsHelping size="3rem" />
        <ListContainer>
          <ListTitle>Reward Loyalty</ListTitle>
          <ListParagraph>
            Our team partners with your front office to create an exclusive shop for loyal fans.  Only fans that have made it to a number of live events can access the exclusive merchandise.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </Section>
);

export default Technologies;
