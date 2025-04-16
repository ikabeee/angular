import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces/Character';
import { NgClass } from '@angular/common';

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  name = signal(``);
  power = signal(0);
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9000,
    },
  ]);
  powerClasses = computed(() => {
    return {
      'bg-red-500': true,
    }
  });

  addCharacter() {
    if(!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }
    this.characters.update((prev) => [...prev, newCharacter]);
    this.resetFields();
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
