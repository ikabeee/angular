import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { catchError, delay, map, Observable, throwError } from 'rxjs';

import { CountryMapper } from '../mappers/country.mapper';
import { RESTCountry } from '../components/interfaces/rest-countries.interface';
import { Country } from '../components/interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase()
    return this.http
      .get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(map(CountryMapper.mapCountryToArray),
        delay(2000),
        catchError(error => {
          console.log(error)
          return throwError(() => new Error(`No se obtuvieron resultados de la búsqueda: ${query}`));
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase()
    return this.http
      .get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(CountryMapper.mapCountryToArray),
        delay(2000),
        catchError(error => {
          console.log(error)
          return throwError(() => new Error(`No se obtuvieron resultados de la búsqueda: ${query}`));
        })
      );
  }

  searchByCountryByAlphaCode(query: string) {
    query = query.toLowerCase()
    return this.http
      .get<RESTCountry[]>(`${API_URL}/alpha/${query}`)
      .pipe(
        map(CountryMapper.mapAlphaCountryToArray),
        map(countries => countries.at(0)),
        delay(2000),
        catchError(error => {
          console.log(error)
          return throwError(
            () => new Error(`No se obtuvo un pais con el código proporcionado: ${query}`)
          );
        })
      );
  }

}
