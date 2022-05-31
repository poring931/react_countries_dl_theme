import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { filterByCode } from '../config';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
  & > a {
    color: var(--colors-text);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  color: var(--colors-text);
  cursor: pointer;
`;

export const Info = (props) => {
  const {
    name,
    nativeName,
    flags,
    capital,
    area,
    population,
    maps,
    region,
    coatOfArms,
    subregion,
    translations,
    tld,
    currencies = [],
    languages = [],
    borders = [],
    push,
  } = props;
  console.log(props)
//   console.log(Object.keys(currencies))
//   console.log(Object.values(languages))
  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c) => c.name)));
  }, [borders]);

  return (
    <Wrapper>
      <InfoImage src={flags.svg} alt={name.common} />
      
    <div>
        <InfoTitle>{name.common} | {translations.rus.common}</InfoTitle>
         <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population</b> {population}
            </ListItem>
            <ListItem>
              <b>Area</b> {area}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
            <ListItem>
              <a href={maps.googleMaps} target="_blank" rel="noopener noreferrer"><b>Map link:</b> </a>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain</b>{' '}
              {tld.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency</b>{' '}
              {Object.values(currencies).map((c) => (
                <span key={c.symbol}>{c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages</b>{' '}
              {Object.values(languages).map((language) => (
                <span key={language}>{language + ' | '}</span>
              ))}
            </ListItem>
            {
                coatOfArms.svg ? (<ListItem>
                <img width="90" src={coatOfArms.svg} alt="coatOfArms" />
            </ListItem>) : (' ')
            }
            
          </List>
          
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((b) => (
                <Link key={b.common} to={`/country/${b.common}`}>
                 <Tag>
                      {b.common}
                 </Tag>
                </Link>
              ))}
            </TagGroup>
          )}
        </Meta>
   
        
      </div>
  
    </Wrapper>
  );
};
