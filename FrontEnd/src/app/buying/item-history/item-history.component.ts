import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemHistory } from 'src/app/models/item-history';

@Component({
  selector: 'app-item-history',
  templateUrl: './item-history.component.html',
  styleUrls: ['./item-history.component.css']
})
export class ItemHistoryComponent {
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [10.51, 13.34, 15.41, 14.87, 15.51, 13.74, 15.91, 16.87], label: 'Seller 1' },
    { data: [10.99, 12.24, 14.35, 13.29, 13.51, 12.34, 16.41, 13.87], label: 'Seller 2' }
  ];

  chartLabels = ['9/1/2018', '9/15/2018', '10/1/2018', '10/15/2018', '11/1/2018', '11/15/2018', '12/1/2018', '12/15/2018'];


  constructor() { }
}
