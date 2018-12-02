import { Component, OnInit, ViewChild } from '@angular/core';
import { BuyerItem } from '../models/buyer-item';
import { BuyingService } from './buying.service';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { ItemHistoryComponent } from './item-history/item-history.component';
import {RESTService} from "../services/rest.service";

@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {
  buyerItems: BuyerItem[];
  displayedColumns: string[] = ['item.name', 'price', 'salePrice', 'Actions'];
  dataSource: MatTableDataSource<any>;

  walmartURL: string;
  walmartBuyerDetailURL: string;
  walmartBuyerDetailPrice: number;
  walmartBuyerDetailQuantity: number;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private buyingService: BuyingService, public rest: RESTService,
    public dialog: MatDialog) { }

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
  }

  openPriceHistoryDialog(item: any) {
    this.dialog.open(ItemHistoryComponent, { data: item, height: '500px', width: '800px' });
  }

  addWalmartItem(url){
    if (url != null){
      this.rest.addWalmartURL(url).subscribe((result) => {
        location.reload();
      }, (err) => {
        console.log(err);
      });
    }
  }

  addWalmartBuyerDetails(quantity, price, userid, url){
    if (url != null){
      this.rest.addWalmartBuyerDetails(quantity, price, userid, url).subscribe((result) => {
        location.reload();
      }, (err) => {
        console.log(err);
      });
    }
  }

}
