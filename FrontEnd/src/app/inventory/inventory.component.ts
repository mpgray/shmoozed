import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TableComponent} from '../shared/table/table.component';
import {isNumeric} from 'rxjs/internal-compatibility';
import {RESTService} from '../services/rest.service';
import { MatDialog } from '@angular/material';
import { AddSellerItemComponent } from './add-seller-item/add-seller-item.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @ViewChild(TableComponent) list: TableComponent;
  @Input() addProductData = {id: 0, name: '', quantity: 0};
  // item selector
  selectedItem: number;
  products: any = [];
  temp: any = [];

  constructor(public rest: RESTService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getProducts();
  }

  public openAddItemDialog() {
    this.dialog.open(AddSellerItemComponent, { width: '500px' });
  }

  addProduct() {
    if (this.addProductData.name.length !== 0 && isNumeric(this.addProductData.quantity)) {
      this.rest.addExampleItem(this.addProductData).subscribe((result) => {
        location.reload();
      }, (err) => {
        console.log(err);
      });
    }
  }

  // item selection tool
  getProducts() {
    this.products = [];
    this.rest.getExampleItems().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
      this.temp = [...this.products];
      this.selectedItem = this.products[0].id;
    });
  }

}
