# J2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.25.5.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##Comments

1/ Definition des modules
2/ Angular utilise le DOM pour injecter ses composants

angular-cli.json: 
apps
    root: src à compiler
    outDir: src compilées

e2e:
    test unitaire end2end automatiquement générés à la compilation angular

tsconfig:
    typescript configuration

index.html:
    chargement de app-root(l'app angular)

##Decorateurs

@NgModule
declarations:

imports:


providers:
    service dont on a besoin pour le module

bootstrap:
    désigne le composant principal de l'app. Qui lie ts les composants entre eux

##Components
contient le template html + la class qui définit ce qu il va se passer ds letemplate

@Components
selector:
    sur quel element du DOM je vais appliquer le template

{{}}: 
[]: bind d'une propriété
(click): gestion des évenements onClick...
#:
*: utilisation de template angular

##
EventEmitter: gestion async des evenements

##Debug with webpack:
Map files in webpack//./src/app