import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule, MatBadgeModule, MatNativeDateModule} from '@angular/material';
import {AppRoutingModule} from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ChartsModule} from 'ng2-charts';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { AccountComponent } from './account/account.component';
import { SellingComponent } from './selling/selling.component';
import { BuyingComponent } from './buying/buying.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutComponent} from './shared/layout/layout.component';
import { TableComponent } from './shared/table/table.component';
import { ChartComponent } from './shared/chart/chart.component';
import { InventoryComponent } from './inventory/inventory.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AccountComponent,
    SellingComponent,
    BuyingComponent,
    DashboardComponent,
    TableComponent,
    ChartComponent,
    InventoryComponent
  ],
  imports: [
    AlertModule.forRoot(),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatBadgeModule,
    NgxDatatableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
