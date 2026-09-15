## Angular Practice topic by topics
This is for the 30 days to practice each topics particularly.

# Explain Folder Structure

components/: Houses individual components, each with its own .ts, .html, .css, and .spec.ts files.
services/: Contains reusable services for handling business logic and API calls.
models/: Stores TypeScript classes or interfaces for defining data structures.
directives/: Includes custom directives for DOM manipulation.
pipes/: Contains custom pipes for data transformation.
core/: Centralized services, guards, and interceptors used across the application.
shared/: Shared components, directives, and modules used in multiple features.
pages/: Organizes views and pages, grouping related components and templates.

Sample:
src/
├── app/
│ ├── components/
│ │ ├── header/
│ │ ├── footer/
│ │ └── main/
│ ├── services/
│ │ ├── product.service.ts
│ │ └── customer.service.ts
│ ├── models/
│ │ └── user.model.ts
│ ├── directives/
│ │ └── my-directive.directive.ts
│ ├── pipes/
│ │ └── custom.pipe.ts
│ ├── core/
│ │ ├── guards/
│ │ ├── interceptors/
│ │ └── services/
│ ├── shared/
│ │ ├── components/
│ │ ├── directives/
│ │ └── pipes/
│ ├── pages/
│ │ ├── home/
│ │ └── about/
│ ├── app.module.ts
│ └── app.component.ts
├── assets/
│ ├── images/
│ ├── fonts/
│ └── i18n/
├── environments/
│ ├── environment.ts
│ └── environment.prod.ts

# Project Planning Days
1. Components
2. Data Binding
3. Component Communications
4. Directives - TodoApp
5. Custom Directives

# Day03DirectivesTodoApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

## Development server

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

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
