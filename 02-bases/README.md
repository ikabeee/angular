# Angular Fundamentals

This project demonstrates the core concepts of Angular, providing practical examples of its main features.

## Project Overview

This Angular application showcases:
- Component architecture
- Data binding
- Angular directives
- Services
- Signals and computed signals

## Angular Core Concepts

### Components

Components are the building blocks of Angular applications. Each component consists of:
- A TypeScript class (logic)
- An HTML template (view)
- Optional CSS styles

Components follow a hierarchical structure, with a root component that hosts child components.

### Modules

Modules group related components, directives, services, and other code into functional units. Every Angular application has at least one module: the AppModule.

### Data Binding

Angular offers several ways to share data:
- **Interpolation**: `{{ value }}` - Displays component data in the view
- **Property Binding**: `[property]="value"` - Sets element properties to component values
- **Event Binding**: `(event)="handler()"` - Responds to user events
- **Two-way Binding**: `[(ngModel)]="value"` - Synchronizes data in both directions

## Data Binding Syntax in Angular

Angular uses different syntax elements for different types of data binding:

### {{ }} - Interpolation

- Syntax: `{{ expression }}`
- Direction: One-way, from component to view (DOM)
- Purpose: Displays text values from component properties in the template
- Example: `<h1>Hello, {{ username }}</h1>`
- Use when: You need to embed expressions directly into HTML text content

Interpolation evaluates the expression inside the curly braces and converts the result to a string. It's essentially shorthand for property binding to the text content of an element.

### [] - Property Binding

- Syntax: `[property]="expression"`
- Direction: One-way, from component to view (DOM)
- Purpose: Binds a property of a DOM element, component, or directive to a component property
- Example: `<img [src]="imageUrl">` or `<button [disabled]="isDisabled">`
- Use when: You need to set an element property to a non-string data value

Property binding lets you bind to properties of DOM elements rather than just setting attributes. It can handle complex data types (objects, arrays) not just strings.

### () - Event Binding

- Syntax: `(event)="statement"`
- Direction: One-way, from view (DOM) to component
- Purpose: Responds to DOM events like clicks, inputs, or custom events
- Example: `<button (click)="onSave()">Save</button>`
- Use when: You need to execute component methods in response to user interactions

Event binding allows your components to respond to user events. When the specified event occurs, the statement in the binding is executed.

### Comparison Table

| Syntax | Name | Direction | Usage |
|--------|------|-----------|-------|
| `{{ }}` | Interpolation | Component → View | Display text values |
| `[ ]` | Property Binding | Component → View | Set element properties |
| `( )` | Event Binding | View → Component | Respond to user events |
| `[( )]` | Two-way Binding | Both directions | Form controls with ngModel |

**Note:** Two-way binding combines property and event binding, making it perfect for form controls where you need to both display a value and update it based on user input.

### Directives

Angular directives extend HTML with new behaviors:
- **Structural Directives**: Modify DOM layout (e.g., `*ngIf`, `*ngFor`)
- **Attribute Directives**: Alter element appearance or behavior (e.g., `ngClass`, `ngStyle`)

### Services & Dependency Injection

Services provide shared functionality and data across components. Dependency injection makes services available where needed without tight coupling.

#### What is an Angular Service?

Services in Angular are singleton classes that encapsulate non-component logic and data that can be shared across the application. They serve several key purposes:

- **Data sharing**: Share data between components that aren't directly connected
- **Business logic**: Centralize application logic outside of components
- **External interactions**: Handle API calls, local storage, and other external resources
- **State management**: Maintain application state across different views
- **Code reusability**: Avoid duplicating the same functionality in multiple components

#### Key Characteristics of Services

- **Singleton pattern**: By default, services are singleton objects - only one instance exists throughout the application
- **Injectable**: Services use Angular's dependency injection system
- **Specialized functionality**: Services often focus on specific concerns like HTTP communication, logging, or data validation
- **Testing**: Services are easier to test in isolation from components

#### Understanding the Singleton Pattern

A Singleton is a design pattern that ensures a class has only one instance throughout the entire application, while providing a global point of access to this instance. In Angular, services are implemented as singletons by default when provided at the root level.

**Key aspects of the Singleton pattern:**

1. **Single Instance**: Only one object of the class exists in memory
2. **Global Access**: The instance can be accessed from anywhere in the application
3. **Lazy Initialization**: The instance is typically created only when first requested

**Why Singletons matter in Angular services:**

- **Shared State**: All components using the service work with the same data
- **Resource Efficiency**: Prevents creating multiple instances of resource-intensive objects
- **Coordination**: Facilitates communication between different parts of the application

**Example of a Singleton service in Angular:**

```typescript
@Injectable({
  providedIn: 'root'  // This makes it a singleton at the application level
})
export class UserService {
  private currentUser: User | null = null;
  
  login(user: User): void {
    this.currentUser = user;
    // All components using this service will now see the logged-in user
  }
  
  logout(): void {
    this.currentUser = null;
    // All components using this service will see the user is logged out
  }
  
  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
```

In this example, any component that injects `UserService` will get the same instance, ensuring that all parts of the application have a consistent view of the current user's state.

#### Creating and Using Services

Services are created using the `@Injectable()` decorator and can be injected into components, directives, or other services:

```typescript
// Service definition
@Injectable({
  providedIn: 'root'  // Makes the service available throughout the app
})
export class DataService {
  private items: string[] = [];
  
  addItem(item: string): void {
    this.items.push(item);
  }
  
  getItems(): string[] {
    return [...this.items]; // Return a copy to prevent direct mutation
  }
}

// Using the service in a component
@Component({...})
export class ExampleComponent {
  constructor(private dataService: DataService) {}
  
  displayItems(): void {
    this.itemsList = this.dataService.getItems();
  }
  
  addNewItem(item: string): void {
    this.dataService.addItem(item);
  }
}
```

#### Service Providers

Services can be provided at different levels:

- **Root level** (`providedIn: 'root'`): Available application-wide
- **Module level**: Available to all components within a specific module
- **Component level**: Creates a new instance for the component and its children

#### Common Types of Angular Services

1. **Data Services**: Manage application data and state
2. **API Services**: Handle HTTP requests to backend services
3. **Utility Services**: Provide helper methods and common functionality
4. **Feature Services**: Support specific application features
5. **Authentication Services**: Handle user authentication and authorization

#### Benefits of Using Services

- **Separation of concerns**: Keep components focused on presentation logic
- **Code organization**: Maintain cleaner, more maintainable code
- **Reusability**: Write logic once, use it anywhere in the application
- **Testability**: More easily create isolated unit tests
- **Lifecycle management**: Services persist across component creation/destruction cycles

### Signals

Signals are Angular's reactive primitives for state management:

- **Basic Signals**: Reactive containers that notify consumers when values change
  ```typescript
  const count = signal(0);
  count.set(5);  // Set value directly
  count.update(c => c + 1);  // Update based on current value
  ```

- **Computed Signals**: Automatically derive values from other signals
  ```typescript
  const count = signal(0);
  const doubleCount = computed(() => count() * 2);
  ```

## Development Environment

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

- [Angular Official Documentation](https://angular.io/docs)
- [Angular Developer Guide](https://angular.io/guide/developer-guide-overview)
- [Angular API Reference](https://angular.io/api)

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Project Structure

# Angular: Inputs and Signals

## Inputs

Inputs in Angular are decorators that allow passing data from a parent component to a child component. They are fundamental for communication between components.

### Characteristics of Inputs:

- Allow a parent component to send data to its children
- Defined with the `@Input()` decorator
- Facilitate component reuse
- Enable creating dynamic components that respond to external data

### Basic Example:

```typescript
// Child component
@Component({
  selector: 'app-child',
  template: '<p>{{ childData }}</p>'
})
export class ChildComponent {
  @Input() childData: string;
}

// Parent component
@Component({
  selector: 'app-parent',
  template: '<app-child [childData]="parentData"></app-child>'
})
export class ParentComponent {
  parentData = 'Data from parent to child';
}
```

## Signals

Signals are a feature introduced in Angular 16 that provide reactive and efficient state management in Angular applications.

### Characteristics of Signals:

- Provide a more efficient reactivity system
- Have better performance than RxJS for many common operations
- Automatically track dependencies
- Are simpler to understand and use than Observables

### Types of Signals:

1. **Read-only Signal**: For accessing values
2. **Writable Signal**: For accessing and modifying values
3. **Computed Signal**: For calculating derived values

### Basic Example:

```typescript
// Create signal
const count = signal(0);

// Read value
console.log(count()); // 0

// Update value
count.set(1);
count.update(value => value + 1);

// Computed signal
const doubledCount = computed(() => count() * 2);
```

### Advantages over other solutions:

- Better performance than Observables for simple operations
- Simpler and more intuitive API
- Perfect integration with Angular's change detection cycle
- Better support for unidirectional architecture pattern

## Combining Inputs and Signals

Inputs and Signals can be combined to create reactive user experiences and reusable components:

```typescript
@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `
})
export class CounterComponent {
  // Traditional Input
  @Input() initialValue = 0;
  
  // Signal
  count = signal(this.initialValue);
  
  // OnInit to synchronize the input with the signal
  ngOnInit() {
    this.count.set(this.initialValue);
  }
  
  increment() {
    this.count.update(value => value + 1);
  }
}
```
