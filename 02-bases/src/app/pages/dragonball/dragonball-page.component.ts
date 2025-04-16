import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces/Character';
import { NgClass } from '@angular/common';

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  name = signal(`Goku`);
  power = signal(100);
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
    {
      id: 3,
      name: 'Gohan',
      power: 8000,
    },
    {
      id: 4,
      name: 'Piccolo',
      power: 7000,
    },
    {
      id: 5,
      name: 'Yamcha',
      power: 500,
    },
  ]);
  powerClasses = computed(() => {
    return {
      'bg-red-500': true,
    }
  });

  addCharacter() {
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }
    this.characters.update((prev) => [...prev, newCharacter]);
  }

}
