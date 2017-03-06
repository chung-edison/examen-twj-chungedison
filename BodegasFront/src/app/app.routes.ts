import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders}  from '@angular/core';
import {BodegaComponent} from "./bodega/bodega.component";
import {ItemComponent} from "./item/item.component";
import {HomeComponent} from "./home/home.component";


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'bodega', component: BodegaComponent},
  {path: 'bodega/:idBodega/item', component: ItemComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
