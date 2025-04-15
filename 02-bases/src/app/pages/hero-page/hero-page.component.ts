import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeroPageComponent {
  name = signal('IronMan');
  age = signal(45);
  upperName = signal(this.name().toUpperCase());

  getHeroDescription() {
    return `My name is ${this.name()} and I'am ${this.age()} years old`;
  }
  changeHero(){
    this.name.update((prev)=> prev = 'SpiderMan');
    this.upperName.update((prev)=> prev = this.name().toUpperCase());
    this.age.update((prev)=> prev = 22);
  }
  resetForm(){
    this.name.set('IronMan');
    this.upperName.set(this.name().toUpperCase());
    this.age.set(45);
  }
  changeAge(){
    this.age.update((prev)=> prev = 60);
  }
}
