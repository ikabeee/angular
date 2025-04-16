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

### Directives

Angular directives extend HTML with new behaviors:
- **Structural Directives**: Modify DOM layout (e.g., `*ngIf`, `*ngFor`)
- **Attribute Directives**: Alter element appearance or behavior (e.g., `ngClass`, `ngStyle`)

### Services & Dependency Injection

Services provide shared functionality and data across components. Dependency injection makes services available where needed without tight coupling.

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
