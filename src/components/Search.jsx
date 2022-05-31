import React from 'react'
import { IoSearch } from "react-icons/io5";
import styledComponents from 'styled-components';

const InputContainer = styledComponents.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-radius:var(--radii);
    box-shadow: var(--shadow);
    width:100%;
    margin-bottom:0;

    @media (min-width:767px){
      margin-bottom:0;
      width:288px;
    }
`;

const Input = styledComponents.input.attrs({
  type: 'search',
  placeholder: 'Search for a country'
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

const Search = ({search, setSearch}) => {
  return (
    <InputContainer>
        <IoSearch/>
        <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
    </InputContainer>
  )
}

export default Search