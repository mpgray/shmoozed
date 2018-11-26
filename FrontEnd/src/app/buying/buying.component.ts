import { Component, OnInit } from '@angular/core';
import { BuyerItem } from '../models/buyer-item';
import { BuyingService } from './buying.service';
import { MatTableDataSource, MatHeaderRowDef, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { ItemHistoryComponent } from './item-history/item-history.component';

@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {
  buyerItems: any[];
  displayedColumns: string[] = ['ItemId', 'Name', 'Actions'];
  dataSource: MatTableDataSource<any>;

  constructor(private buyingService: BuyingService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getTestBuyerItems();
  }

  private getBuyerItems() {
    this.buyingService.getBuyerItems()
      .subscribe(buyerItems => {
        this.buyerItems = buyerItems;
        this.dataSource = new MatTableDataSource(this.buyerItems);
      });
  }

  private getTestBuyerItems() {
    this.buyerItems = [{
      'id': 1,
      'name': 'Pampers Swaddlers Diapers',
      'quantity': 25
    },
    {
      'id': 2,
      'name': 'Great Value 18 oz Party Plastic Cups',
      'quantity': 20
    },
    {
      'id': 3,
      'name': 'Boys Long Sleeve Crew T-Shirt with Rib Cuffs',
      'quantity': 10
    },
    {
      'id': 4,
      'name': '(3 Pack) Great Value Cleaning Bleach, 128 fl oz',
      'quantity': 5
    },
    {
      'id': 5,
      'name': 'Trim Nailcare Fingernail & Toenail Clippers',
      'quantity': 189
    },
    {
      'id': 23,
      'name': 'Ted\'s Autographed Photo',
      'quantity': 1
    }];
    this.dataSource = new MatTableDataSource(this.buyerItems);
  }

  openPriceHistoryDialog(item: any) {
    this.dialog.open(ItemHistoryComponent, { data: item, height: '500px', width: '800px' });
  }
}
