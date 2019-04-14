import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importamos el http
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
// Importamos las rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
// Importar ReactiveFormsModule para los formularios
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
