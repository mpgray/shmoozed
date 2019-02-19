import { Component, OnInit, ViewChild } from '@angular/core';
import { BuyerItem } from '../models/buyer-item';
import { BuyingService } from './buying.service';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ItemHistoryComponent } from './item-history/item-history.component';
import { RESTService } from '../services/rest.service';
import { AddBuyItemComponent } from './add-buy-item/add-buy-item.component';
import {BuyerSearchItem} from '../models/Searched-Items';

@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {
  buyerItems: BuyerItem[];
  buyerSearchItems: BuyerSearchItem[];
  displayedColumns: string[] = ['item.name', 'price', 'salePrice', 'Actions'];
  dataSource: MatTableDataSource<any>;

  walmartURL: string;
  walmartBuyerDetailURL: string;
  walmartBuyerDetailPrice: number;
  walmartBuyerDetailQuantity: number;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private buyingService: BuyingService,
    public rest: RESTService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getBuyerItems();
  }

  private getBuyerItems() {
    this.buyingService.getBuyerItems(2)
      .subscribe(buyerItems => {
        this.buyerItems = buyerItems;
        this.dataSource = new MatTableDataSource(this.buyerItems);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    this.buyingService.getSearchItems(2)
      .subscribe(buyerSearchItems => {
        this.buyerSearchItems = buyerSearchItems;
        this.dataSource = new MatTableDataSource(this.buyerItems);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }

  openAddWalmartItemDialog() {
    const dialog = this.dialog.open(AddBuyItemComponent, {width: '500px', height: '300px'});

    dialog.afterClosed()
    .subscribe(result => {
      if (result) {
        location.reload();
        this.openSnackBar('New Item Added Successfully');
      }
    });
  }

  openSnackBar(message: string) {
    const config = new MatSnackBarConfig();
    config.duration = 1500;
    this.snackBar.open(message, '', config);
  }


  addWalmartItem(url) {
    if (url != null) {
      this.rest.addWalmartURL(url).subscribe((result) => {
        location.reload();
      }, (err) => {
        console.log(err);
      });
    }
  }

  addWalmartBuyerDetails(quantity, price, userid, url) {
    if (url != null) {
      this.rest.addWalmartBuyerDetails(quantity, price, userid, url).subscribe((result) => {
        location.reload();
      }, (err) => {
        console.log(err);
      });
    }
  }

}
