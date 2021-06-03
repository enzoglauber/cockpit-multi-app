# CockpitMultiApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

`ng serve --projet="app1"`
`ng serve --project="app2" --port 4201`

<!-- --app 1 -->
`ng g m view1 --project=app1 --routing`
`ng g c /view1 --project=app1`
`ng g c /view1/view1-add --project=app1`
`ng g c /view1/view1-edit --project=app1`
`ng g c /view1/view1-remove --project=app1`

<!-- --app 2 -->
`ng g m view1 --project=app2 --routing`
`ng g c /view1 --project=app2`
`ng g c /view1/view1-add --project=app2`
`ng g c /view1/view1-edit --project=app2`
`ng g c /view1/view1-remove --project=app2`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
