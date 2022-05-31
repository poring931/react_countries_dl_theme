import React from 'react'
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components'


const Wrapper = styledComponents.article`
  border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styledComponents.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styledComponents.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styledComponents.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styledComponents.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styledComponents.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;



const Card = ({ img, name, info = [], onClick }) => {
    return (
        <Wrapper onClick={onClick}>
          <Link to={`/country/${name.common}`}>
            <CardImage src={img} alt={name.common} />
            <CardBody>
            <CardTitle>{name.common}</CardTitle>
            <CardList>
                {info.map((el) => (
                    <CardListItem key={el.title  + '1'}>
                        <b>{el.title}:</b> {el.description}
                    </CardListItem>
                ))}
            </CardList>
            </CardBody>
          </Link>
        </Wrapper>
    );
}

export default Card