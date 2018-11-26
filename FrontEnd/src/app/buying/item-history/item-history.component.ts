import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemHistory } from '../../models/item-history';
import { environment } from '../../../environments/environment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-item-history',
  templateUrl: './item-history.component.html',
  styleUrls: ['./item-history.component.css']
})
export class ItemHistoryComponent implements OnInit {
  itemHistories: ItemHistory[];
  baseUrl = environment.baseUrl;
  chartData = [];
  chartLabels = [];
  chartOptions = {
    responsive: true
  };
  chart = [];

  constructor(private http: HttpClient,
  public dialogRef: MatDialogRef<ItemHistoryComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.getItemHistories();
  }

  getItemHistories() {
    const apiLocation = this.baseUrl + 'itemhistory/' + this.data.id;
    this.http.get<ItemHistory[]>(apiLocation)
    .subscribe(histories => {
      this.itemHistories = histories;
      this.populateChartArrays();
    });
  }

  populateChartArrays() {
    this.chartData = [this.itemHistories.length];
    this.chartLabels = [this.itemHistories.length];
    for (let i = 0; i < this.itemHistories.length; i++) {
      this.chartData[i] = this.itemHistories[i].price;
      const date = new Date(this.itemHistories[i].date);
      const dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
      this.chartLabels[i] = dateString;
    }

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            data: this.chartData,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
