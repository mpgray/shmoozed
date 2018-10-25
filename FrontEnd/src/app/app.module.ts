import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material';
import {AppRoutingModule} from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

import { AccountComponent } from './account/account.component';
import { SellingComponent } from './selling/selling.component';
import { BuyingComponent } from './buying/buying.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutComponent} from './shared/layout/layout.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AccountComponent,
    SellingComponent,
    BuyingComponent,
    DashboardComponent
  ],
  imports: [
    AlertModule.forRoot(),
    MatIconModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
