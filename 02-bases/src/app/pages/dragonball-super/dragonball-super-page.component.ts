import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  // constructor(public dragonballService: DragonballService) { }
  // addCharacter(character: Character) {
  //   this.dragonballService.addCharacter(character);
  // } //Inyección de dependencias
  public dragonBallService = inject(DragonballService); //Inyección de dependencias recomendada
}
