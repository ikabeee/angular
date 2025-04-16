import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces/Character';
import { NgClass } from '@angular/common';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

@Component({
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {

}
