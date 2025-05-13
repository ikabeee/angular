import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 25,
  address: '123 Main St, Cityville',
}

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 30,
  address: '456 Elm St, Townsville',
}
@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export default class UncommonPageComponent {
  //i18nSelect
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }
  client = signal(client1);
  changeClient() {
    if (this.client() == client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }


  //i18nPlural
  clients = signal([
    'Maria',
    'Pedro',
    'Juan',
    'Luis',
    'Ana',
    'Laura',
    'Javier',
    'Sofia',
  ]);
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  })
  deleteClient() {
    this.clients.update(prev => prev.slice(1))
  }

  //KeyValue Pipe
  profile = signal({
    name: 'Fernando',
    age: 35,
    address: '123 Main St, Cityville',
    email: 'example@example.com',
    phone: '123-456-7890',
    occupation: 'Software Engineer',
    hobbies: ['reading', 'gaming', 'hiking'],
    isActive: true,
  });

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise data');
      // reject('Promise error');
      console.log('Promise resolved');
    }, 2000);
  });

    myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap:', value))
  );
  
};
