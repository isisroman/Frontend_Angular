# ClientesREST - Consumiendo Servicios Web con Angular hacia Backend en LUMEN

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## Empezar desde aquí


# Empezar desde aquí
1. Es necesario tener instalado NodeJs, Angular y un Editor como Visual Studio Code.

En una carpeta de nuestro sistema donde vamos a crear el proyecto escribimos lo siguiente:

>ng new clientesREST

2. El proceso puede tardar unos minutos.

Abrimos Visual Studio Code, clic en *File > Open Folder* y escogemos la carpeta donde creamos el proyecto.

Abrimos la terminal de Visual Studio Code y escribimos los siguientes comandos:

#  Empezar desde aquí

1. Es necesario tener instalado NodeJs, Angular y un Editor como Visual Studio Code.

2. En una carpeta de nuestro sistema donde vamos a crear el proyecto escribimos lo siguiente:

 * `ng new wclientAngular`

Este proceso puede tardar unos minutos.

3. Abrimos Visual Studio Code, clic en  **File > Open Folder** y escogemos la carpeta donde creamos el proyecto.

4. Abrir la terminal de Visual Studio Code y escribimos los siguientes comandos:

* ` ng generate component cargo/list-cargo --spec=false -is`
* ` ng generate component cargo/add-cargo --spec=false -is`
* ` ng generate component cargo/edit-cargo --spec=false -is`

***

* `ng generate component operativo/list-operativo --spec=false -is`
* `ng generate component operativo/add-operativo --spec=false -is`
* `ng generate component operativo/edit-operativo --spec=false -is`

5. Al finalizar tendremos una estructura similar a esta:

![](https://github.com/isisroman/github/blob/master/esquema_angular.JPG)


6. Visitar la página web [Sweet Alert 2](https://sweetalert2.github.io/#download) o escribir el siguiente comando:

* `$ npm install sweetalert2`

7. En la carpeta app vamos a dar **clic derecho > new file** y lo vamos a llamar `app.routes.ts`, como se ve a continuación:

![](https://github.com/isisroman/github/blob/master/approutes.JPG)

![](https://github.com/isisroman/github/blob/master/approutes_02.JPG)

 7.1. Agregamos el siguiente código en el archivo **app.routes.ts**:

>
import {Routes} from '@angular/router';

import { ListCargoComponent } from './cargo/list-cargo/list-cargo.component';

import { EditCargoComponent } from './cargo/edit-cargo/edit-cargo.component';

import { AddCargoComponent } from './cargo/add-cargo/add-cargo.component';

import { ListOperativoComponent} from './operativo/list-operativo/list-operativo.component';

import { AddOperativoComponent} from './operativo/add-operativo/add-operativo.component';

import { EditOperativoComponent} from './operativo/edit-operativo/edit-operativo.component';


export const ROUTES: Routes = [

    { path: 'add-cargo', component: AddCargoComponent},

    { path: 'list-cargo', component: ListCargoComponent},

    { path: 'edit-cargo', component: EditCargoComponent},


    { path: 'list-operativo', component: ListOperativoComponent},

    { path: 'add-operativo', component: AddOperativoComponent},

    { path: 'edit-operativo', component: EditOperativoComponent},

    { path: '', pathMatch:'full', redirectTo:'list-operativo'},

    { path: '**', pathMatch: 'full', redirectTo: 'list-operativo'},

];

8. Vamos a modificar el archivo `app.module.ts` y lo vamos a dejar de la siguiente manera:
>> >  
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ListCargoComponent } from './cargo/list-cargo/list-cargo.component';

import { AddCargoComponent } from './cargo/add-cargo/add-cargo.component';

import { EditCargoComponent } from './cargo/edit-cargo/edit-cargo.component';

import { ListOperativoComponent } from './operativo/list-operativo/list-operativo.component';

import { AddOperativoComponent } from './operativo/add-operativo/add-operativo.component';

import { EditOperativoComponent } from './operativo/edit-operativo/edit-operativo.component';

import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import {ReactiveFormsModule} from '@angular/forms';

@NgModule({

  declarations: [

    AppComponent,

    ListCargoComponent,

    AddCargoComponent,

    EditCargoComponent,

    ListOperativoComponent,

    AddOperativoComponent,

    EditOperativoComponent

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    HttpModule,

    HttpClientModule,

    RouterModule.forRoot(ROUTES, {useHash:true}),

    ReactiveFormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

9. Vamos a modificar el archivo `app.component.html `y lo vamos a dejar de la siguiente manera:

`<div class="container mt-5">`
    `<router-outlet></router-outlet>`
`</div>`

10. Vamos a modificar el archivo` index.html` y lo vamos a dejar de la siguiente manera:

`<!doctype html>`

`<html lang="en">`

`<head>`

 ` <meta charset="utf-8">`

  `<title>Cliente Web</title>`

  `<base href="/">`

  `<meta name="viewport" content="width=device-width, initial-scale=1">`

  `<link rel="icon" type="image/x-icon" href="favicon.ico">`

`  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">`

`</head>`

`<body>`

`  <app-root></app-root>`

  `<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"`
    `crossorigin="anonymous"></script>`

`  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"`
    `crossorigin="anonymous"></script>`

`  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"`
    `crossorigin="anonymous"></script>`

`</body>`
`</html>`

11. Dentro de app > model > cargo.ts vamos a escribir el siguiente código:

export class Cargo {

    id: number;
    
    carnombre: string;
    
    carestado: number;
    
    created_at: Date;
    
    updated_at: Date;
}

Puede ver el codigo descargando del repositorio. Finalmente quedaría asi: 

![](https://github.com/isisroman/github/blob/master/operativo.JPG)

![](https://github.com/isisroman/github/blob/master/cargo.JPG)
