import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-seller-insights',
  templateUrl: './seller-insights.component.html',
  styleUrls: ['./seller-insights.component.css']
})
export class SellerInsightsComponent implements OnInit, AfterViewInit {
  chart = [];
  chartLabels = ['10', '15', '20', '25', '30', '35'];
  chartData = [1136.59, 1765.34, 2365.84, 3496.43, 3094.54, 2743.69];

  @Input() itemId: number;
  @ViewChild('canvas') canvas: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.getRevenueForecast();
  }

  getRevenueForecast() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
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
            ticks: {
              beginAtZero: true,
              callback: function(value, index, values) {
                const twoPlacedFloat = parseFloat(value).toFixed(2);
                // tslint:disable-next-line:radix
                if (parseFloat(twoPlacedFloat) >= 1000) {
                  return '$' + twoPlacedFloat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                } else {
                  return '$' + twoPlacedFloat;
                }
              }
            }
          }],
        }
      }
    });
  }

}
