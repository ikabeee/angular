import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";


@Component({
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe]
})

export class HeroPageComponent {
  name = signal('IronMan');
  age = signal(45);
  // Computed signals are only used to compute values based on other signals
  // and are not used to store values.
  heroDescription = computed(() =>{
    const description = `${this.name()} is ${this.age()} years old`;
    return description;
    }
  );

  // Computed signals with dependencies
  capitalizedName = computed(()=> {
    const name = this.name();
    return name.toUpperCase();
  })

  getHeroDescription() {
    return `My name is ${this.name()} and I'am ${this.age()} years old`;
  }

  changeHero(){
    this.name.set('SpiderMan');
    this.age.set(30);
  }

  resetForm(){
    this.name.set('IronMan');
    this.age.set(45);
  }

  changeAge(){
    this.age.update((prev)=> prev = 60);
  }
}
