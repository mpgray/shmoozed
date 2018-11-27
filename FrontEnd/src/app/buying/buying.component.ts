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
  displayedColumns: string[] = ['Name', 'RequestedPrice', 'CurrentPrice', 'Actions', ];
  dataSource: MatTableDataSource<any>;

  constructor(private buyingService: BuyingService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getBuyerItems();
  }

  private getBuyerItems() {
    this.buyingService.getBuyerItems(2)
      .subscribe(buyerItems => {
        this.buyerItems = buyerItems;
        this.dataSource = new MatTableDataSource(this.buyerItems);
        console.log(this.buyerItems);
      });
  }

  openPriceHistoryDialog(item: any) {
    this.dialog.open(ItemHistoryComponent, { data: item, height: '500px', width: '800px' });
  }
}
