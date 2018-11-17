import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemHistory } from 'src/app/models/item-history';

@Component({
  selector: 'app-item-history',
  templateUrl: './item-history.component.html',
  styleUrls: ['./item-history.component.css']
})
export class ItemHistoryComponent {
  public lineChartData = [9.99, 10.41];
  public lineChartLabels = ['09/01/2018', '10/01/2018'];
  public lineChartType = 'line';


  constructor() { }
}
