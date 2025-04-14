export class Person {
    constructor(public name: string, public lastName: string, public address: string = 'No address' ) { }
}


// export class Hero extends Person {
//     constructor(public alterEgo: string, public age: number, public realName: string) {
//         super(realName, 'New York');
//     }
// }

//Composition over inheritance
export class Hero {
    constructor(public alterEgo: string, public age: number, public realName: string, public person: Person) {}
}
const tony = new Person('Tony', 'Stark', 'New York')
const ironman = new Hero('Iron Man ', 45, 'Tony', tony);
console.log(ironman);

