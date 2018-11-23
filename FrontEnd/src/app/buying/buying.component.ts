import { Component, OnInit } from '@angular/core';
import { BuyerItem } from '../models/buyer-item';
import { BuyingService } from './buying.service';
import { MatTableDataSource, MatHeaderRowDef } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {
  buyerItems: BuyerItem[];
  displayedColumns: string[] = ['ItemId', 'RequestedPrice'];
  dataSource: MatTableDataSource<BuyerItem>;

  constructor(private buyingService: BuyingService) { }

  ngOnInit() {
    this.getBuyerItems();
  }

  private getBuyerItems() {
    this.buyingService.getBuyerItems()
      .subscribe(buyerItems => {
        this.buyerItems = buyerItems;
        this.dataSource = new MatTableDataSource(this.buyerItems);
      });
  }

}
