import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {PhonesListComponent} from './phones-list/phones-list.component';
import {PhoneAddComponent} from './phone-add/phone-add.component';
const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'list', component: PhonesListComponent},
  {path: 'add', component: PhoneAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
