# Shmoozed Front-end

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Deployment Procedure

Ideally, this would be automated through a DevOps / Delivery Tool such as Jenkins, etc. but due to
time constraints these manual build and deploy instructions should be followed when a new version
of the application is ready to be released into Production.

1. Build things...
2. Deploy things...
3. Sanity change things...

## Resources
When adding a module, put it here.
  - [Angular 6](https://angular.io/) Application builder
  - [TypeScript](https://www.typescriptlang.org/) Programming Language
  - [Bootstrap 4](http://getbootstrap.com/) Styles, Mobile
  - [Angular Materials](https://material.angular.io/) - icons, menus, text assets.

## Code Structure
**tslint.json** - gives a list of rules governing typescript

**package.json** - is an automatically generated list of modules used by the app

**src/styles.css** - contains the template css files - should be overwritten not modified.

**src/app/app.component.css** - Write global css for the app. Overwrite **styles.css** behavior here as well

**src/app/(name)/(name).component.css** - Write component specific css. Overwrite other behavior here as well

**src/app/share/template** - contains the templated dashboard main page 

**src/app/(name)/(name).component.html** - contains the body of each component

Each component contains a .ts file for typescript, including **app.component**. 

**assets/** should contain **assets/img, assets/vid** etc. Additional **CSS** files can be put in **src/assets/css/**

 - **If anyone has a different set up in mind, feel free to change and document.**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Note: After cloning you may may need to run 'npm install" from the /FrontEnd directory to build the modules.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

