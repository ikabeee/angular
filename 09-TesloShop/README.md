# RESUMEN DE ACTIVIDADES 12 - 16 MAYO

Finalización del curso de Angular 19 de Fernando Herrera.

## Pipes

Los pipes nos permitirá transformar datos en nuestra plantilla HTML. Se usa con el operador "|", y se adapta al lenguaje que esté establecido en el index de nuestra página.

```
import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  template: `
    <main>
<!-- Transform the company name to title-case and transform the purchasedOn date to a locale-formatted string -->
	<h1>Purchases from {{ company | titlecase }} on {{ purchasedOn | date }}</h1>
<!-- Transform the amount to a currency-formatted string -->
      <p>Total: {{ amount | currency }}</p>
    </main>
  `,
})
export class ShoppingCartComponent {
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
}
```

## Pipes personalizados

También podemos generar nuestros propios pipes, con el siguiente comando de Angular CLI.

```
ng generate pipe <nombre-pipe>
```

Dentro de nuestro pipe deberá tener la siguiente nomenclatura "DescripciónPipe" y, al momento de declarar la clase debemos implementar la interfaz "PipeTransform" que esperará de contrato una función transform, donde aquí implemetaremos toda la lógica del pipe.

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Puede volar' | 'No puede volar' {
    return value ? 'Puede volar' : 'No puede volar';

  }
}

```

## Formularios reactivos

Los formularios reactivos nos ayudan a manejar las entradas (inputs) donde los valores estén cambiando constantemente, para esto se necesitará implementar un archivo exclusivo donde se manejen los errores del formulario. Este se encontrará en la carpeta Utils, y será compartido entre los formularios que se vayan desarrollando.

De igual manera, es importante recalcar que para poder manipular los formularios dentro del template de HTML debemos inyectar en el componente el servicio "FormBuilder" de @angular/forms

```
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

```

En este bloque de código estamos accediendo a nuestro objeto formUtils que contiene el manejo de errores, la función a la que estamos accediendo espera la instancia del formulario y el campo que se va a manejar.

@if (formUtils.isValidField( myForm, 'name') ) {

    <spanclass="form-text text-danger">

    {{ formUtils.getFieldError(myForm, "name") }}

    }

## Lifecycle Hook (Ciclo de vida de los componentes)}

El ciclo de vida de un componente en angular es la secuencia de pasos que ocurren entre la creación del componente hasta su destrucción

### Creación

Se intancia el componente

```
constructor
```

### Change detection

```
ngOnInit: Se ejecuta depués que Angular haya inicializado todas las entradas del componente
ngOnchanges: Se ejecuta cada vez que las entradas del componente han cambiado
ngDoCheck: Se ejecuta cada vez que se comprueba este componente para los cambios.
ngAfterContentInit: Se ejecuta una vez después de la del componente contenido ha sido inicializado
ngAfterContentChecked: Se ejecuta cada vez que se ha verificado el contenido de este componente para detectar cambios.
ngAfterViewInit: Se ejecuta una vez después de la del componente ver ha sido inicializado.
ngAfterViewChecked: Se ejecuta cada vez que la vista del componente se ha verificado para los cambios.
```

### Renderizado

```
afterNextRender: Corre una vez la próxima vez que todo los componentes se han representado en el DOM.
afterRender: 	Corre cada vez todo los componentes se han representado en el DOM.
```

### Destrucción

```
ngOnDestroy: Se ejecuta una vez antes de que el componente se destruya.
```

## Consumo del API de mapbox

Se realizó una aplicación web que consume el API de mapbox, utilizando los conceptos de l ciclo de vida de los componentes. Donde al momento de iniciar nuestra vista del mapa, se construirá el mismo (mapa) a través del API.

El mapa tiene listeners, el cual escucha los siguientes eventos:

1. Zoomend: El mapa escucha cuando hay zoom
2. Moveend: El mapa escucha cuando hay zoom
3. Load: El mapa escucha cuando se ha cargado por completo

Igual forma con mapbox podemos agregar al componente distintos controles.

## Paginación

En esta sección se consumión un API realizada en NestJS, que administraba los productos de un ECommerce donde la misma tenía una páginación a través de los parámetros.

Se realizó un componente que permita obtener la página actual convirtiendolo en una señal gracias a @angular/router. Dentro del componente de paginación se obtenían la lista de las páginas a través de una señal computada

## Angular 19 features

## Nuevo flujo

#### @for

Nos sirve para iterar el contenido de una colección que habremos mandado desde el componente.

#### @if

Es un bloque que mostrará el contenido siempre y cuando sea la función sea verdadera

#### @switch

Los bloques swtch muestra el contenido seleccionado por uno de los casos que coinciden en la expresión

#### @input

Este decorador marca un campo de clase como una propiedad de entrada, la cual está vinculada a una propiedad del DOM en la plantilla
