import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html', //Relative path to the HTML file
  styleUrl:'./counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush //You can't use zone.js with signals
  //This means that Angular will not automatically check for changes in this component.
})
export class CounterPageComponent{
  counter = 10;
  //Define a signal to track the counter value.
  counterSignal = signal(10);
  constructor(){
    setInterval(()=>{
      this.counter += 1;
      this.counterSignal.update((prev)=> prev + 1);
      //This will update the signal value every 2 seconds.
      console.log('Tick');
    }, 2000)
  }


  increaseBy(value: number){
    this.counter += value;
    //Counter signal is updated
    this.counterSignal.update((prev)=> prev + value);
  }
  decreaseBy(value: number){
    if(this.counter <= 0 && this.counterSignal() <= 0){
      throw new Error('Value must be positive');
    }
    //Counter signal is updated
    this.counterSignal.update((prev)=> prev - value);
    this.counter -= value;
  }
  resetCounter(){
    this.counter = 0;
    //Counter signal is updated
    this.counterSignal.set(0);
  }
}
