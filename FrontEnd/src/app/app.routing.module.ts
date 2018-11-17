import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {BuyingComponent} from './buying/buying.component';
import {SellingComponent} from './selling/selling.component';
import {AccountComponent} from './account/account.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {LayoutComponent} from './shared/layout/layout.component';
import {LoginComponent} from './account/login/login.component';
import {InventoryComponent} from './inventory/inventory.component';
import {Notfound404Component} from './session/notfound404/notfound404.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'homepage',
  pathMatch: 'full'
}, {
  path: '',
  component: LayoutComponent,
    children: [{
      path: 'dashboard',
      component: DashboardComponent,
      data: { title: 'Dashboard' }
    },
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
    }, {
        path: 'inventory',
        component: InventoryComponent,
        data: { title: 'Inventory' }
      }],
  },
  {
    path: 'account/login',
    component: LoginComponent,
    data: { title: 'Login' }
  }, {
    path: 'homepage',
    component: HomepageComponent,
    data: { title: 'Shmoozed' }
  }, {
  path: '**',
    component: Notfound404Component,
    data: { title: 'Not Found 404'}
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
