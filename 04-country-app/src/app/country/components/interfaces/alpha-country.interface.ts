import {Languages } from './rest-alpha-country.interface';

export interface AlphaCountry {
  //
  officialName: string;
  //
  commonName: string;
  //
  capital: string[];
  region: string;
  subregion: string;
  borders: string[];
  flag: string;
  flagSvg: string;
  flagAlt: string;
  population: number;
  timezones:  string[];
  continents: string[];
}

export interface Currency {
  symbol: string;
  name: string;
}
