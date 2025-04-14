export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Carlos',
}
const passenger2: Passenger = {
    name: 'Celeste',
    children: ['Maria', 'Pedro']
}


const returnChildrenNumber = (passenger: Passenger) => {
    // Optional chaining
    // const howManyChildren = passenger.children?.length || 0;
    // Not null assertion operator
    const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren);
}

returnChildrenNumber(passenger1);