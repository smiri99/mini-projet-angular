import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NavComponent} from './nav/nav.component';
import {ListeComponent} from './liste/liste.component';
import {AddComponent} from './liste/add/add.component';
import {ModifyComponent} from './liste/modify/modify.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: 'nav',
  component: NavComponent,
  children: [{
    path: '', component: ListeComponent
  }, {
    path: 'add',
    component: AddComponent

  }, {
    path: 'modify',
    component: ModifyComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
