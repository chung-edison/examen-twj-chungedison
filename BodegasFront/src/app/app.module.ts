import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MasterURLService} from "./services/master-url.service";

import {AppComponent} from './app.component';
import {BodegaComponent} from './bodega/bodega.component';
import {ItemComponent} from './item/item.component';
import {HomeComponent} from './home/home.component';
import {routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    BodegaComponent,
    ItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MasterURLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
