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

We shall learn the default component structure and the create our own component as well. 
