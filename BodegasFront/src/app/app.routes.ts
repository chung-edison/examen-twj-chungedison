import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders}  from '@angular/core';
import {BodegaComponent} from "./bodega/bodega.component";
import {ItemComponent} from "./item/item.component";
import {HomeComponent} from "./home/home.component";


export const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: HomeComponent},
  {path: 'bodegas', component: BodegaComponent},
  {path: 'bodegas/:idBodega/items', component: ItemComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
