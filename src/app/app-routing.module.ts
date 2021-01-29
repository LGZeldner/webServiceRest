import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductAddComponent} from './product-add/product-add.component';
const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'list', component: ProductsListComponent},
  {path: 'add', component: ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
