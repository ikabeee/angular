# APUNTES DE CLASE: ANGULAR - Aplicación Gifs App

## 1. COMPONENTES STANDALONE (Nueva arquitectura de Angular)

* Los componentes standalone no necesitan declararse en módulos
* Importación directa de dependencias en cada componente
* Ejemplo:

```typescript
@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent], // Importación directa
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  gifs = input.required<Gif[]>(); // Nueva API de inputs
}
```

## 2. API DE SEÑALES (SIGNALS)

La nueva API reactiva de Angular (>16) proporciona una alternativa a los Observables para estados reactivos:

* **signal()**: Estado reactivo que notifica a los consumidores cuando cambia

```typescript
trendingGifs = signal<Gif[]>([])
```

* **computed()**: Valor derivado que se recalcula automáticamente

```typescript
searchHistoryKeys = computed(() => Object.keys(this.searchHistory()))
```

* **effect()**: Efectos secundarios que se ejecutan automáticamente cuando cambian las dependencias

```typescript
saveGifsToLocalStorage = effect(() => {
  localStorage.setItem('gifs', JSON.stringify(this.searchHistory()));
})
```

* **input()**: Propiedades de entrada de componentes (reemplaza @Input())

```typescript
imageUrl = input.required<String>()
```

## 3. NUEVO CONTROL DE FLUJO

* **@for**: Reemplaza a *ngFor

```html
@for(gif of gifs(); track gif) {
  <gif-list-item [imageUrl]="gif.url"/>
}
```

* **@if**: Reemplaza a *ngIf (no utilizado explícitamente en el código)

## 4. ENRUTAMIENTO Y LAZY LOADING

* Definición de rutas con carga perezosa:

```typescript
{
  path: 'dashboard',
  loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'), 
  children: [...]
}
```

* Rutas anidadas (children) para organizar la navegación
* Parámetros de ruta para vistas dinámicas

```typescript
path: 'history/:query'
```

* Redirección con redirectTo para manejar rutas no encontradas

## 5. INYECCIÓN DE DEPENDENCIAS

* Uso de la función `inject()` en lugar del constructor:

```typescript
private http = inject(HttpClient);
```

* Servicios singleton con `providedIn: 'root'`:

```typescript
@Injectable({
  providedIn: 'root'
})
```

## 6. HTTP Y OBSERVABLES (RXJS)

* HttpClient para peticiones a APIs:

```typescript
this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {...})
```

* Operadores RxJS para transformar datos:

```typescript
.pipe(
  map(({data}) => data),
  map((items) => GifMapper.mapGiphyItemsToArray(items)),
  tap(items => { ... })
)
```

* Conversión de Observables a Signals:

```typescript
query = toSignal(inject(ActivatedRoute).params.pipe(map(params => params['query'])));
```

## 7. ESTRUCTURAS DE DATOS Y MODELOS

* Interfaces para tipar datos:

```typescript
export interface Gif {
  id: string,
  title: string,
  url: string
}
```

* Mappers para transformar respuestas de API:

```typescript
export class GifMapper {
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    }
  }
}
```

## 8. PERSISTENCIA DE DATOS

* LocalStorage para guardar el historial de búsquedas:

```typescript
const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  return JSON.parse(gifsFromLocalStorage);
}
```

* Sincronización automática con effect():

```typescript
saveGifsToLocalStorage = effect(() => {
  localStorage.setItem('gifs', JSON.stringify(this.searchHistory()));
})
```

## 9. BINDING Y DIRECTIVAS

* Property binding: `[routerLink]="item.route"`
* Event binding: `(keyup.enter)="onSearch(txtSearch.value)"`
* Directivas de enrutador: `routerLinkActive="bg-blue-800"`

## 10. VIEWPORT

El Viewport representa el área visible del navegador donde se muestra el contenido de la página web:

* **Definición**: Es la porción de la ventana del navegador donde se renderiza el contenido web
* **Meta tag viewport**: Controla cómo se escala y dimensiona la página en dispositivos móviles

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

* **Unidades relativas al viewport**:
  * `vw` (viewport width): 1% del ancho del viewport
  * `vh` (viewport height): 1% de la altura del viewport
  * `vmin`: 1% de la dimensión más pequeña
  * `vmax`: 1% de la dimensión más grande

* **Detección del viewport en Angular**:
  * Se puede usar `IntersectionObserver` para detectar cuando un elemento entra o sale del viewport
  * Útil para implementar carga perezosa de imágenes (lazy loading) o infinite scroll

* **Optimización para distintos viewports**:
  * Diseño responsive con media queries
  * Tailwind facilita esto con sus clases por breakpoints (`sm:`, `md:`, `lg:`)

## 11. INTEGRACIÓN CON TAILWINDCSS

* Clases utilitarias para diseño responsive:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
```

* Transiciones y efectos:

```html
<a class="... hover:bg-white/5 transition ease-linear duration-150">
```

## 12. VARIABLES DE ENTORNO

* Configuración en ambiente.ts:

```typescript
export const environment = {
  production: true,
  giphyApiKey: 'wa1lqDlmY7Rbl3HhEXAChbe7Dj2GCEOl',
  giphyUrl: 'https://api.giphy.com/v1'
};
```

## 13. ARQUITECTURA DE LA APLICACIÓN

### Estructura por características:

```
/src
  /app
    /gifs              # Módulo funcional principal
      /components      # Componentes reutilizables
      /interfaces      # Contratos de datos
      /mapper          # Transformación de datos
      /pages           # Vistas principales
      /services        # Lógica de negocio
```

### Patrones de componentes:

* Componentes contenedores (pages): Manejan lógica y estado
* Componentes de presentación: Reciben datos y emiten eventos

## Conceptos avanzados aplicados:

1. Diseño reactivo con Signals
2. Transformación de datos con mappers
3. Gestión de estado con servicios singleton
4. Segmentación de responsabilidades (SRP)
5. Lazy loading para optimización
