import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BuyingComponent} from './buying/buying.component';
import {SellingComponent} from './selling/selling.component';
import {AccountComponent} from './account/account.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
    children: [{
      path: '',
      component: DashboardComponent
    }], },
  {
    path: 'account',
    component: AccountComponent
  }, {
    path: 'buying',
    component: BuyingComponent
  }, {
    path: 'selling',
    component: SellingComponent
  },
  {
  path: '**',
  redirectTo: 'session/404'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
