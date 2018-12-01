import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SellerInsightsService } from './seller-insights.service';
import { SellerInsightDatapoint } from 'src/app/models/seller-insight-datapoint';

@Component({
  selector: 'app-seller-insights',
  templateUrl: './seller-insights.component.html',
  styleUrls: ['./seller-insights.component.css']
})
export class SellerInsightsComponent implements OnInit, AfterViewInit {
  chart = [];
  sellerInsights: SellerInsightDatapoint[];
  chartLabels = [];
  chartData = [];

  @Input() itemId: number;
  @ViewChild('canvas') canvas: ElementRef;

  constructor(private service: SellerInsightsService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.getSellerInsightData();
  }

  getSellerInsightData() {
    this.service.getSellerInsightData(this.itemId)
      .subscribe(datapoints => {
        this.sortDataPointsByPrice(datapoints);
        this.sellerInsights.forEach(element => {
          this.chartLabels.push(element.demandPrice.toString());
          this.chartData.push(element.revenue.toString());
        });
        this.getRevenueForecast();
      });
  }

  sortDataPointsByPrice(datapoints: SellerInsightDatapoint[]) {
    function compare(a, b) {
      if (a.last_nom < b.last_nom) {
        return -1;
      }
      if (a.last_nom > b.last_nom) {
        return 1;
      }
      return 0;
    }
    this.sellerInsights = datapoints.sort(compare);
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
            fill: false,
            label: 'Revenue'
          }
        ]
      },
      options: {
        hover: {
          mode: 'index',
          intersect: false
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function (value, index, values) {
                const twoPlacedFloat = parseFloat(value).toFixed(2);
                // tslint:disable-next-line:radix
                if (parseFloat(twoPlacedFloat) >= 1000) {
                  return '$' + twoPlacedFloat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                } else {
                  return '$' + twoPlacedFloat;
                }
              }
            }, scaleLabel: {
              display: true,
              labelString: 'Sale Price'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function (value, index, values) {
                const twoPlacedFloat = parseFloat(value).toFixed(2);
                // tslint:disable-next-line:radix
                if (parseFloat(twoPlacedFloat) >= 1000) {
                  return '$' + twoPlacedFloat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                } else {
                  return '$' + twoPlacedFloat;
                }
              }
            }, scaleLabel: {
              display: true,
              labelString: 'Revenue'
            }
          }],
        }
      }
    });
  }

}
