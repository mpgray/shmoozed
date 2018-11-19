import { Component, OnInit } from '@angular/core';
import {RESTService} from '../../../services/rest.service';


@Component({
  selector: 'app-table-buyeritems',
  templateUrl: './buyeritems.component.html',
  styleUrls: ['./buyeritems.component.css']
})
export class BuyeritemsComponent implements OnInit {

  buyeritems: any = [];
  temp: any = [];

  columns = [
    { prop: 'id' }
  ];

  constructor(public rest: RESTService) { }

  ngOnInit() {
    this.getItems();
  }


  getItems() {
    this.buyeritems = [];
    this.rest.getBuyerItems().subscribe((data: {}) => {
      console.log(data);
      this.buyeritems = data;
      this.temp = [...this.buyeritems];
    });

  }

  public updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const tmp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.buyeritems = tmp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }
}
