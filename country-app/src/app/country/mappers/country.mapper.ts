import { AlphaCountry } from "../components/interfaces/alpha-country.interface";
import type { Country } from "../components/interfaces/country.interface";
import { RESTAlphaCountry, Currencies } from '../components/interfaces/rest-alpha-country.interface';
import type { RESTCountry } from "../components/interfaces/rest-countries.interface";

export class CountryMapper {
  static mapRestCountryToCountry(item: RESTCountry): Country {
    return {
      cca2: item.cca2,
      name: item.translations['spa'].common ?? 'No name',
      flag: item.flag,
      flagSvg: item.flags.svg,
      capital: item.capital.join(' '),
      population: item.population,
    };
  }
  static mapCountryToArray(items: RESTCountry[]): Country[] {
    return items.map((res) => CountryMapper.mapRestCountryToCountry(res));
  }

  static mapRestCountryAlphaToCountryAlpha(item: RESTAlphaCountry): AlphaCountry {
    return {
      officialName: item.name.official,
      commonName: item.name.common,
      capital: item.capital,
      region: item.region,
      subregion: item.subregion,
      borders: item.borders,
      flag: item.flag,
      flagSvg: item.flags.svg,
      flagAlt: item.flags.alt,
      population: item.population,
      timezones: item.timezones,
      continents: item.continents
    }
  }

  static mapAlphaCountryToArray(items: RESTCountry[]): AlphaCountry[] {
    return items.map((res) => CountryMapper.mapRestCountryAlphaToCountryAlpha(res));
  }
}
