import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [{
  path: 'dashboard',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
    children: [{
      path: 'dashboard',
      component: DashboardComponent
    }], },
  {
  path: '**',
  redirectTo: 'session/404'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
