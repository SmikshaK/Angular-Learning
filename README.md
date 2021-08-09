# AngularLearning

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Angular-Learning

Angular is a development platform, built on TypeScript. As a platform, Angular includes:

A component-based framework for building scalable web applications
A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more
A suite of developer tools to help you develop, build, test, and update your code.

Components
Components are the building blocks that compose an application. A component includes a TypeScript class with a @Component() decorator, an HTML template, and styles. The @Component() decorator specifies the following Angular-specific information:

A CSS selector that defines how the component is used in a template. HTML elements in your template that match this selector become instances of the component.
An HTML template that instructs Angular how to render the component.
An optional set of CSS styles that define the appearance of the template's HTML elements.
The following is a minimal Angular component.


import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
    `,
})
export class HelloWorldComponent {}


To use this component, you write the following in a template:

<hello-world></hello-world>
When Angular renders this component, the resulting DOM looks like this:

<hello-world>
    <h2>Hello World</h2>
    <p>This is my first component!</p>
</hello-world>


Angular's component model offers strong encapsulation and an intuitive application structure. Components also make your application painless to unit test and can improve the overall readability of your code.

Few important commands:
ng build	             - Compiles an Angular app into an output directory.
ng serve	             - Builds and serves your application, rebuilding on file changes.
ng generate	           - Generates or modifies files based on a schematic.
ng test	               - Runs unit tests on a given project.
ng e2e	               - Builds and serves an Angular application, then runs end-to-end tests.

Steps to follow to get started:
1. Installing IDE(VS Code), angular, node js.
2. Install Angular cli by typing in cmd- npm install -g @angular/cli
3. Creating a new ng project- ng new AngularLearning
4. Go into directory- cd AngularLearning
5. And to get started- ng serve (Find the app on http://localhost:4200/ on your local browser)

See the default code in first commit "initial commit"

Let's learn to create new components: by maually, and by using "ng generate component third" / "ng g c third".
Also how we can inline define the html and css using 'template' and 'styles'. 

Follow the commit with message "Implementing new components"

Now we shall see whats DATA BINDING: Data binding automatically keeps your page up-to-date based on your application's state. You use data binding to specify things such as the source of an image, the state of a button, or data for a particular user.

Types of data binding:
1.Interpolation
                {{ data }}
2.Property binding:
                   {{expression}}
                   [target]="expression"
                   bind-target="expression"
3.Event binding:
                   (target)="statement"
                   on-target="statement"
4.Two way binding:
                   [(target)]="expression"
                   bindon-target="expression"
                  
You can see changes reflected in the commit with message "Implementing data binding" 
where I have implemented a input which updates a property via two way binding. Out the username using string Interpolation. Added a button which may only be clicked if the username is NOT an empty string. 

Various directives like ngIf /else, ngfor, ngStyle, ngClass uses different funcionalities that have implemented in toogle button creation.

