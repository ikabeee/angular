function addNumbers(a:number, b: number): number {
    return a + b;
}

//Arrow functions
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

// Function with default parameters
// The default value for base is 2
function multiplyNumbers(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}

const result = addNumbers(5, 10);
const resultArrow = addNumbersArrow(5, 10);
const resultMultiply = multiplyNumbers(5);
console.log({result, resultArrow, resultMultiply});


interface Character {
    name: string;
    hp: number;
    //Declare a function type
    showHp : () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    },
}

healCharacter(strider, 10);
healCharacter(strider, 20);
strider.showHp();

export {}