import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BuyingComponent} from './buying/buying.component';
import {SellingComponent} from './selling/selling.component';
import {AccountComponent} from './account/account.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
    children: [{
      path: '',
      component: DashboardComponent,
      data: { title: 'Shmoozed' }
    }], },
  {
    path: 'account',
    component: AccountComponent,
    data: { title: 'Account' }
  }, {
    path: 'buying',
    component: BuyingComponent,
    data: { title: 'Buying' }
  }, {
    path: 'selling',
    component: SellingComponent,
    data: { title: 'Selling' }
  },
  {
  path: '**',
  redirectTo: 'session/404'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
