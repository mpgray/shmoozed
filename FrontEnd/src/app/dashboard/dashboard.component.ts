import { RESTService } from '../rest.service';
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: any = [];
  @Input() addProductData = { id: 0, name: '', quantity: 0 };

  constructor(public rest: RESTService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.rest.getExampleItems().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }

  addProduct() {
    this.rest.addExampleItem (this.addProductData).subscribe((result) => {
      location.reload();
    }, (err) => {
      console.log(err);
    });
  }
}
