import axios from 'axios';
import { useState, useEffect } from 'react';


import { ALL_COUNTRIES } from '../config';
import Controls from '../components/Controls';
import  List  from '../components/List';
import  Card  from '../components/Card';

const HomePage = ({ setCountries, countries }) => {
  const [filtredCountries, setFilteredCountries] = useState(countries);


  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filtredCountries.map((country) => {
          const countyInfo = {
                img: country.flags.svg,
                name: country.name,
                map: country.maps.googleMaps,
                info: [
                  {
                    title: "Population",
                    description: country.population.toLocaleString() ?? 'unknown'
                  },
                  {
                    title: "Region",
                    description: country.region
                  },
                  {
                    title: "Continents",
                    description: country.continents[0] ?? ''
                  },
                ],
              };
              return (
                <Card 
                  key={country.name.common}
                  {...countyInfo}
                />
              )
        })}
      </List>
    </>
  );
};


export default HomePage
