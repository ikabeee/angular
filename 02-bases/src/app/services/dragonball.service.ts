import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/Character';

//DI = Dependency Injection
/*
  * Cuando inicialices el service tendrás acceso a los métodos y propiedades del service es decir, una instancia del service
  * y no una copia de los métodos y propiedades.
  * Por lo tanto, si cambias el valor de una propiedad en el service, se reflejara en todos los componentes que usen ese service.
  * Esto es lo que se conoce como "singleton" en Angular.
*/

function loadFromLocalStorage() {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' }) //Nivel global de la aplicación
// @Injectable({ providedIn: 'any' }) //Nivel de cada módulo
// @Injectable({ providedIn: 'platform' }) //Nivel de la plataforma
export class DragonballService {
  characters = signal<Character[]>([loadFromLocalStorage()]);

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })
  addCharacter(character: Character) {
    this.characters.update((current) => [...current, character]);
  }

  /*
  *Los efectos son funciones que se ejecutan cuando una señal cambia
  *En este caso, se ejecuta cuando la señal characters cambia
  * Se ejecuta una vez al cargar la aplicación
  * y cada vez que se añade un nuevo personaje
  * y se guarda en el localStorage
  */
}


