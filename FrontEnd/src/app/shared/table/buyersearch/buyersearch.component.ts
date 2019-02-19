import {Component, OnInit, ViewChild} from '@angular/core';
import { BuyingService } from '../../../buying/buying.service';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import {BuyerItem} from '../../../models/buyer-item';
import {BuyerSearchItem} from '../../../models/Searched-Items';


@Component({
  selector: 'app-table-buyersearch',
  templateUrl: './buyersearch.component.html',
  styleUrls: ['./buyersearch.component.css']
})
export class BuyersearchComponent implements OnInit {
  buyerSearchItems: BuyerSearchItem[];
  displayedColumns: string[] = ['name', 'thumbnail', 'price', 'salePrice', 'Actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private buyingService: BuyingService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getBuyerSearchItems();
  }

  private getBuyerSearchItems() {
    this.buyingService.getSearchItems('tv')
      .subscribe(buyerSearchItems => {
        this.buyerSearchItems = buyerSearchItems;
        this.dataSource = new MatTableDataSource(this.buyerSearchItems);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log("hi");
        console.log(this.dataSource);
      });

  }
}
