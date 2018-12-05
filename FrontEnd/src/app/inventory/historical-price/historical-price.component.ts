import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {RESTService} from "../../services/rest.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-historical-price',
  templateUrl: './historical-price.component.html',
  styleUrls: ['./historical-price.component.css']
})
export class HistoricalPriceComponent implements OnInit {

  @Input() itemId: number;
  priceData: any = [];
  thisYearPrices: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
  date = new Date();

  constructor(public rest: RESTService) { }

  ngOnInit() {
    this.setChartLabels()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.itemId) {
      this.updateChartData();
    }
  }

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [33, 60, 26, 70], label: 'Last Year' },
    { data: [0,0,0,0], label: 'This Year' },
    { data: [, , , 34, 46], label: 'Forecast' }
  ];

  chartLabels = [];

  updateChartData() {
    this.getItemPrices();
  }

  getItemPrices() {
    this.rest.getItemPriceHistory(this.itemId).subscribe((data: {}) =>{
      this.priceData = data;
      this.computeMonthlyAvg();
    });
  }

  setChartLabels(){

    let month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    this.chartLabels[0] = month[this.date.getMonth()-3]
    this.chartLabels[1] = month[this.date.getMonth()-2]
    this.chartLabels[2] = month[this.date.getMonth()-1]
    this.chartLabels[3] = month[this.date.getMonth()]

    if (this.date.getMonth() == 11) {
      this.chartLabels[4] = month[0]
    }else{
      this.chartLabels[4] = month[this.date.getMonth()+1]
    }

  }

  computeMonthlyAvg(){

    // denominator for each monthly average, counts the number of prices in each month
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
    let count7 = 0;
    let count8 = 0;
    let count9 = 0;
    let count10 = 0;
    let count11 = 0;
    let oldTotal = 0;

    //parse the priceData and calculate average price for each month
    for (let entry of this.priceData){
      let dateString = entry.date
      let dateSubString = new Date(dateString.substring(0,10))
      //console.log(dateSubString.getMonth())

      switch (dateSubString.getMonth()) {
        case 0:
          oldTotal = this.thisYearPrices[0] * count0;
          count0++;
          this.thisYearPrices[0] = (oldTotal + entry.price)/count0;
          break;
        case 1:
          oldTotal = this.thisYearPrices[1] * count1;
          count1++;
          this.thisYearPrices[1] = (oldTotal + entry.price)/count1;
          break;
        case 2:
          oldTotal = this.thisYearPrices[2] * count2;
          count2++;
          this.thisYearPrices[2] = (oldTotal + entry.price)/count2;
          break;
        case 3:
          oldTotal = this.thisYearPrices[3] * count3;
          count3++;
          this.thisYearPrices[3] = (oldTotal + entry.price)/count3;
          break;
        case 4:
          oldTotal = this.thisYearPrices[4] * count4;
          count4++;
          this.thisYearPrices[4] = (oldTotal + entry.price)/count4;
          break;
        case 5:
          oldTotal = this.thisYearPrices[5] * count5;
          count5++;
          this.thisYearPrices[5] = (oldTotal + entry.price)/count5;
          break;
        case 6:
          oldTotal = this.thisYearPrices[6] * count6;
          count6++;
          this.thisYearPrices[6] = (oldTotal + entry.price)/count6;
          break;
        case 7:
          oldTotal = this.thisYearPrices[7] * count7;
          count7++;
          this.thisYearPrices[7] = (oldTotal + entry.price)/count7;
          break;
        case 8:
          oldTotal = this.thisYearPrices[8] * count8;
          count8++;
          this.thisYearPrices[8] = (oldTotal + entry.price)/count8;
          break;
        case 9:
          oldTotal = this.thisYearPrices[9] * count9;
          count9++;
          this.thisYearPrices[9] = (oldTotal + entry.price)/count9;
          break;
        case 10:
          oldTotal = this.thisYearPrices[10] * count10;
          count10++;
          this.thisYearPrices[10] = (oldTotal + entry.price)/count10;
          break;
        case 11:
          oldTotal = this.thisYearPrices[11] * count11;
          count11++;
          this.thisYearPrices[11] = (oldTotal + entry.price)/count11;
          break;
      }
    }

    this.chartData = [
      { data: [33, 60, 26, 70], label: 'Last Year' },
      { data: [this.thisYearPrices[this.date.getMonth()-3], this.thisYearPrices[this.date.getMonth()-2], this.thisYearPrices[this.date.getMonth()-1], this.thisYearPrices[this.date.getMonth()]], label: 'This Year' },
      { data: [, , , this.thisYearPrices[this.date.getMonth()], 46], label: 'Forecast' }
    ];

  }


}
