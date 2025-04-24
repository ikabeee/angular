import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gifs.mapper';
import { map, Observable, tap } from 'rxjs';

const GIF_KEY = 'gifs'

const loadFromLocalStorage = () =>{
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}'; //Record, <string, gifs []
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs
}

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private http = inject(HttpClient);
  private trendingPage = signal(0);

  trendingGifs = signal<Gif[]>([])
  isTrendingGifsLoading = signal(false);

  trendingGifGroup = computed<Gif[][]>(()=>{
    const groups = [];
    for(let i = 0; i<this.trendingGifs().length; i+=3){
      groups.push(this.trendingGifs().slice(i,i+3));
    }
    console.log(groups)
    return groups;
  })

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(()=> Object.keys(this.searchHistory()))

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect(() =>{
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', historyString)
  })

  loadTrendingGifs(){
    if(this.isTrendingGifsLoading()) return;
    this.isTrendingGifsLoading.set(false)
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        offset: this.trendingPage()*20
      }
    }).subscribe((res)=>{
      const gifs = GifMapper.mapGiphyItemsToArray(res.data);
      this.trendingPage.update(currentPage => currentPage+1)
      this.trendingGifs.update(currentGifs => [
        ...currentGifs,
        ...gifs
      ]);
      this.isTrendingGifsLoading.set(false);
    });
  }
  //Regresa un observable
  searchGifs(query:string): Observable<Gif[]>{
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query
      }
    }).pipe(
      //Encadena los elementos de los observables, efectos secundarios
      map(({data}) => data),
      map((items) => GifMapper.mapGiphyItemsToArray(items)),
      // TODO Historial
      //maneja los efectos secundarios
      tap(items=>{
        this.searchHistory.update(history=>({
          ...history,
          [query.toLowerCase()]: items
        }))
      })
    );
    // .subscribe((res)=>{
    //   const gifs = GifMapper.mapGiphyItemsToArray(res.data);
    //   console.log({search: gifs})
    // });
  }

  getHistoryGifs(query: string): Gif[]{
    return this.searchHistory()[query] ?? []
  }

}
