import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillVideoCamera } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

//Import styled components from HeaderStyles.js
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size="3rem" /> <Span> Home Team Heroes </Span>
        </a>
      </Link>
    </Div1>

    <Div2> 
      <li>
      <Link href="#tech">
          <NavLink>Benefits</NavLink>
        </Link>
      </li>
      <li>
      <Link href="#about">
          <NavLink>How it Works</NavLink>
        </Link>
      </li>
      </Div2>

      <Div3>
        <SocialIcons href="https://github.com/samlarson94">
          <AiFillGithub size="3rem" />
        </SocialIcons>
      </Div3>
  
  </Container>
);

export default Header;
