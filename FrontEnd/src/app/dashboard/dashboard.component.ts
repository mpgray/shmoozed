import { RESTService } from '../rest.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: any = [];

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
}
