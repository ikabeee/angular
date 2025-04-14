/**
 * Genéricos en TypeScript
 * 
 * Los genéricos permiten crear componentes reutilizables que pueden trabajar con una variedad de tipos
 * en lugar de un solo tipo. Esto permite escribir funciones, clases e interfaces que son flexibles y
 * pueden adaptarse a diferentes tipos de datos mientras se mantiene la seguridad de tipos.
 * 
 * Beneficios:
 * - Reutilización de código para diferentes tipos de datos
 * - Seguridad de tipos durante la compilación
 * - Evita el uso de "any" que elimina la verificación de tipos
 * - Permite crear estructuras de datos genéricas (como arrays, promesas, etc.)
 */

//Generic function
export function whatsMyType<T>(argument: T): T {
    return argument
}

const amIString = whatsMyType<string>('Hello world');
const amINumber = whatsMyType<number>(200);
const amIArray =  whatsMyType<number[]>([1,2,3,4]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'))