import React from 'react'
import styledComponents from 'styled-components'
import Container from './Container';


const Wrapper = styledComponents.main`
    padding: 2rem 0;

    @media (max-width:767px){
        padding: 4rem 0;
    }
`;

const Main = ({children}) => {
  return (
    <Wrapper>
        <Container>
           {children}
        </Container>
    </Wrapper>
  )
}

export default Main