import { Address } from "./Address";

export interface Superhero{
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}