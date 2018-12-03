import { Component, OnInit, ViewChild } from '@angular/core';
import { BuyerItem } from '../../../models/buyer-item';
import { BuyingService } from '../../../buying/buying.service';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { ItemHistoryComponent } from '../../../buying/item-history/item-history.component';


@Component({
  selector: 'app-table-buyeritems',
  templateUrl: './buyeritems.component.html',
  styleUrls: ['./buyeritems.component.css']
})
export class BuyeritemsComponent implements OnInit {
  buyerItems: BuyerItem[];
  displayedColumns: string[] = ['item.name', 'price', 'salePrice', 'Actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  openPriceHistoryDialog(item: any) {
    this.dialog.open(ItemHistoryComponent, { data: item, height: '500px', width: '800px' });
  }
}
