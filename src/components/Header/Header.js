import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillVideoCamera } from 'react-icons/ai';
// import { DiCssdeck } from 'react-icons/di';
import { HiOutlineViewGridAdd } from 'react-icons/hi';

//Import styled components from HeaderStyles.js
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: "center", color: 'white', marginBottom: '20px'}}>
          {/* <DiCssdeck size="3rem" /> <Span> Home Team Heroes </Span> */}
          < HiOutlineViewGridAdd size="5rem" /> <Span> Home Team Heroes </Span>
        </a>
      </Link>
    </Div1>

    <Div2> 
      <li>
      <Link href="#process">
          <NavLink>Process</NavLink>
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
        {/* INSERT ADDITIONAL SOCIALS AND ICONS HERE  */}
      </Div3>
  
  </Container>
);

export default Header;
