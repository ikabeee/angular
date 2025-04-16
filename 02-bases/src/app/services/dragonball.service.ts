import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/Character';

//DI = Dependency Injection
/*
  * Cuando inicialices el service tendrás acceso a los métodos y propiedades del service es decir, una instancia del service
  * y no una copia de los métodos y propiedades.
  * Por lo tanto, si cambias el valor de una propiedad en el service, se reflejara en todos los componentes que usen ese service.
  * Esto es lo que se conoce como "singleton" en Angular.
*/

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9000,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8500,
    },
  ]);

  addCharacter(character: Character){
    this.characters.update((current)=> [...current, character]);
  }

  constructor() { }
}


