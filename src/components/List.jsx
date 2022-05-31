import React from 'react'
import styledComponents from 'styled-components'

const Wrapper = styledComponents.section`
    width: 100%;
    padding: 2rem 0;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 4rem;
    }
`;

const List = ({children}) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default List