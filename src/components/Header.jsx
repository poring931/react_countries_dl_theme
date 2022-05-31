import React, { useEffect, useState } from 'react'
import { IoMoonOutline,IoMoon } from "react-icons/io5";
import styledComponents from 'styled-components';
import Container from './Container';

const HeaderEl = styledComponents.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styledComponents.a.attrs({
    href: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styledComponents.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
  user-select: none;
`;


const Header = () => {

    const[theme, setTheme] = useState('light')

    const toggelTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    

  return (
    <HeaderEl>
        <Container>
           <Wrapper>
                <Title>Where is the world?</Title>
                <ModeSwitcher onClick={toggelTheme}>
                    {theme === 'light' ? (
                        <IoMoonOutline size="14px" />
                        ) : (
                        <IoMoon size="14px" />
                    )}{' '}
                        <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
                </ModeSwitcher>
            </Wrapper> 
        </Container>
    </HeaderEl>
  )
}

export default Header