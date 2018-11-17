import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatButtonToggleModule, MatProgressSpinnerModule
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AppRoutingModule} from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ChartsModule} from 'ng2-charts';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgxGalleryModule} from 'ngx-gallery';


import { AccountComponent } from './account/account.component';
import { SellingComponent } from './selling/selling.component';
import { BuyingComponent } from './buying/buying.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutComponent} from './shared/layout/layout.component';
import { TableComponent } from './shared/table/table.component';
import { ChartComponent } from './shared/chart/chart.component';
import { LoginComponent } from './account/login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DoughnutComponent } from './shared/chart/doughnut.component';
import { Notfound404Component } from './session/notfound404/notfound404.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HasClaimDirective } from './directives/has-claim.directive';
import { HttpInterceptorModule } from './services/http-request-interceptor.service';
import { UsersComponent } from './shared/table/users/users.component';
import { SelleritemsComponent } from './shared/table/selleritems/selleritems.component';
import { BuyeritemsComponent } from './shared/table/buyeritems/buyeritems.component';
import { AdminComponent } from './account/admin/admin.component';
import { GalleryComponent } from './shared/gallery/gallery.component';



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
    LoginComponent,
    ChartComponent,
    InventoryComponent,
    DoughnutComponent,
    Notfound404Component,
    DoughnutComponent,
    HomepageComponent,
    HasClaimDirective,
    GalleryComponent,
    HasClaimDirective,
    UsersComponent,
    SelleritemsComponent,
    BuyeritemsComponent,
    AdminComponent
  ],
  imports: [
    AlertModule.forRoot(),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatBadgeModule,
    NgxDatatableModule,
    AngularFontAwesomeModule,
    ChartsModule,
    HttpInterceptorModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
