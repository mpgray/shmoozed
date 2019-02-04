import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { SellerInsightsService } from './seller-insights.service';
import { SellerInsightDatapoint } from 'src/app/models/seller-insight-datapoint';
import { DetailedSellerItem } from 'src/app/models/detailed-seller-item';
import { SellerItem } from 'src/app/models/seller-item';

@Component({
  selector: 'app-seller-insights',
  templateUrl: './seller-insights.component.html',
  styleUrls: ['./seller-insights.component.css']
})
export class SellerInsightsComponent implements OnInit, AfterViewInit, OnChanges {
  chart: Chart = [];
  sellerInsights: SellerInsightDatapoint[];
  chartLabels = [];
  chartData = [];
  sellerItems: SellerItem[];

  @Input() itemId: number;
  @ViewChild('canvas') canvas: ElementRef;

  constructor(private service: SellerInsightsService) { }

  ngOnInit() {
    this.service.getDetailedSellerItems(2)
    .subscribe(items => {
      this.sellerItems = items;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.itemId) {
      const item = this.getSellerItem(this.itemId);
      if (item !== undefined && item.sellerCost) {
        console.log(item.sellerCost);
      }
      this.getSellerInsightData();
    }
  }

  ngAfterViewInit(): void {
    this.createChart();
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
        this.updateChart();
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

  getSellerItem(itemId: number) {
    if (this.sellerItems === undefined) {
      return;
    }
    return this.sellerItems.find(x => x.itemId === itemId);
  }

  updateChart() {
    this.chart.data = {
      labels: this.chartLabels,
      datasets: [
        {
          data: this.chartData,
          borderColor: '#3cba9f',
          fill: false,
          label: 'Revenue'
        }
      ]
    };
    this.chart.update();
  }

  createChart() {
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
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return '$' + Number(tooltipItem.yLabel).toFixed(2).replace(/./g, function (c, i, a) {
                return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c;
              });
            }
          }
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
                const twoPlacedFloat = parseFloat(value).toFixed(0);
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
