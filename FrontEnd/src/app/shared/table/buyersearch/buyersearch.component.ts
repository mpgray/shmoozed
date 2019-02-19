import {Component, OnInit, ViewChild} from '@angular/core';
import { BuyingService } from '../../../buying/buying.service';
import {MatTableDataSource, MatDialog, MatPaginator, MatSort, MatBottomSheet} from '@angular/material';
import {BuyerItem} from '../../../models/buyer-item';
import {BuyerSearchItem} from '../../../models/Searched-Items';
import {LargeimgComponent} from './largeimg/largeimg.component';


@Component({
  selector: 'app-table-buyersearch',
  templateUrl: './buyersearch.component.html',
  styleUrls: ['./buyersearch.component.css']
})
export class BuyersearchComponent implements OnInit {
  buyerSearchItems: BuyerSearchItem[];
  displayedColumns: string[] = ['name', 'thumbnail', 'price', 'salePrice', 'Actions'];
  dataSource: MatTableDataSource<any>;
  searchTerm: 'Enter Your Search...';
  searchedItems = Array('TVs', 'Books', 'TShirts', 'Dresses', 'Video Games');
  searchedItem = this.searchedItems[Math.floor(Math.random() * this.searchedItems.length)];
  searchStarted = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private buyingService: BuyingService,
              public dialog: MatDialog, private bottomSheet: MatBottomSheet) {
  }

  ngOnInit() {
    this.getBuyerSearchItems(this.searchedItem);
  }

  public getBuyerSearchItems(searchterm) {
    this.buyingService.getSearchItems(searchterm)
      .subscribe(buyerSearchItems => {
        this.buyerSearchItems = buyerSearchItems;
        this.dataSource = new MatTableDataSource(this.buyerSearchItems);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

  }

  openBottomSheet(largeimg): void {
    this.bottomSheet.open(LargeimgComponent);
  }
}
