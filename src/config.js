const BASE_URL = 'https://restcountries.com/v3.1/';


export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,flags,continents,languages,population,maps,translations,region,capital';

export const searchByCountry = (name) => BASE_URL + '/name/' + name;


export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');