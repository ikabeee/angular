/**
 * Decoradores en TypeScript
 * 
 * Los decoradores son un patrón de diseño y una característica experimental de TypeScript
 * que permite añadir metadatos a clases, métodos, propiedades y parámetros.
 * 
 * Características principales:
 * - Son funciones que pueden modificar o extender el comportamiento del elemento decorado
 * - Se ejecutan durante la definición de la clase (no en tiempo de ejecución)
 * - Se indican con el símbolo @ seguido del nombre de la función decoradora
 * - Son muy utilizados en Angular para definir componentes, servicios, etc.
 * 
 * Tipos de decoradores:
 * - Decoradores de clase: @Component, @Injectable
 * - Decoradores de método: @HostListener
 * - Decoradores de propiedad: @Input, @Output
 * - Decoradores de parámetro: @Inject
 * 
 * Ejemplo simple de un decorador de clase:
 * function LogClass(target: any) {
 *   console.log(`Clase decorada: ${target.name}`);
 * }
 * 
 * @LogClass
 * class MiClase { }
 */

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    };
}

@classDecorator
class SuperClass {
    public myProperty: string = 'Abc123';
    print() {
        console.log('Hello world');
    }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);