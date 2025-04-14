import { Product, taxCalculation } from "./06-functions-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia 3310',
        price: 100,
    },
    {
        description: 'Samsung Galaxy S20',
        price: 200,
    },
];

const [total, tax] = taxCalculation({products: shoppingCart, tax: 0.15});
console.log(`Total: ${total}`);
console.log(`Tax: ${tax}`);