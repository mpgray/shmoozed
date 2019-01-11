import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {RESTService} from "../../services/rest.service";
import {forEach} from "@angular/router/src/utils/collection";
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-historical-price',
  templateUrl: './historical-price.component.html',
  styleUrls: ['./historical-price.component.css']
})
export class HistoricalPriceComponent implements OnInit {

  @Input() itemId: number;
  priceData: any = [];
  thisYearPrices: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  date = new Date();
  monthArray: any = [];

  // tensorflow vars
  linearModel: tf.Sequential;
  prediction: any;
  predictionDates: any = [];
  predictionPrices: any = [];
  start = new Date(2018, 7, 1);
  oneDay = 1000 * 60 * 60 * 24;

  constructor(public rest: RESTService) {
  }

  ngOnInit() {
    this.setMonthArray();
    this.setChartLabels();

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
    {data: [33, 60, 26, 70], label: 'Last Year'},
    {data: [0, 0, 0, 0], label: 'This Year'},
    {data: [, , , 34, 46], label: 'Forecast'}
  ];

  chartLabels = [];

  updateChartData() {
    this.getItemPrices();
  }

  getItemPrices() {
    this.rest.getItemPriceHistory(this.itemId).subscribe((data: {}) => {
      this.priceData = data;
      this.computeMonthlyAvg();
    });
  }

  setMonthArray() {
    let currentMonth = this.date.getMonth();

    switch (currentMonth) {

      case 0:
        this.monthArray[0] = 9;
        this.monthArray[1] = 10;
        this.monthArray[2] = 11;
        this.monthArray[3] = 0;
        this.monthArray[4] = 1;
        break

      case 1:
        this.monthArray[0] = 10;
        this.monthArray[1] = 11;
        this.monthArray[2] = 0;
        this.monthArray[3] = 1;
        this.monthArray[4] = 2;
        break

      case 2:
        this.monthArray[0] = 11;
        this.monthArray[1] = 0;
        this.monthArray[2] = 1;
        this.monthArray[3] = 2;
        this.monthArray[4] = 3;
        break

      case 3:
        this.monthArray[0] = 0;
        this.monthArray[1] = 1;
        this.monthArray[2] = 2;
        this.monthArray[3] = 3;
        this.monthArray[4] = 4;
        break

      case 11:
        this.monthArray[0] = currentMonth - 3;
        this.monthArray[1] = currentMonth - 2;
        this.monthArray[2] = currentMonth - 1;
        this.monthArray[3] = currentMonth;
        this.monthArray[4] = 0;
        break

      default:
        this.monthArray[0] = currentMonth - 3;
        this.monthArray[1] = currentMonth - 2;
        this.monthArray[2] = currentMonth - 1;
        this.monthArray[3] = currentMonth;
        this.monthArray[4] = currentMonth + 1;
        break;

    }

  }

  setChartLabels() {

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

    this.chartLabels[0] = month[this.monthArray[0]];
    this.chartLabels[1] = month[this.monthArray[1]];
    this.chartLabels[2] = month[this.monthArray[2]];
    this.chartLabels[3] = month[this.monthArray[3]];
    this.chartLabels[4] = month[this.monthArray[4]];

  }

  computeMonthlyAvg() {

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

    // clear the prices array
    for (var i = 0; i < 11; i++) {
      this.thisYearPrices[i] = 0;
    }

    // clear the tensorflow data arrays
    this.predictionDates = [];
    this.predictionPrices = [];

    //parse the priceData and calculate average price for each month
    for (let entry of this.priceData) {
      let dateString = entry.date
      let dateSubString = new Date(dateString.substring(0, 10))
      //console.log(dateString.substring(0,10));

      // get data for tensorflow
      let timeSinceStart = dateSubString.getTime() - this.start.getTime();
      this.predictionDates.push(timeSinceStart / this.oneDay);
      this.predictionPrices.push(entry.price);

      switch (dateSubString.getMonth()) {
        case 0:
          oldTotal = this.thisYearPrices[0] * count0;
          count0++;
          this.thisYearPrices[0] = (oldTotal + entry.price) / count0;
          break;
        case 1:
          oldTotal = this.thisYearPrices[1] * count1;
          count1++;
          this.thisYearPrices[1] = (oldTotal + entry.price) / count1;
          break;
        case 2:
          oldTotal = this.thisYearPrices[2] * count2;
          count2++;
          this.thisYearPrices[2] = (oldTotal + entry.price) / count2;
          break;
        case 3:
          oldTotal = this.thisYearPrices[3] * count3;
          count3++;
          this.thisYearPrices[3] = (oldTotal + entry.price) / count3;
          break;
        case 4:
          oldTotal = this.thisYearPrices[4] * count4;
          count4++;
          this.thisYearPrices[4] = (oldTotal + entry.price) / count4;
          break;
        case 5:
          oldTotal = this.thisYearPrices[5] * count5;
          count5++;
          this.thisYearPrices[5] = (oldTotal + entry.price) / count5;
          break;
        case 6:
          oldTotal = this.thisYearPrices[6] * count6;
          count6++;
          this.thisYearPrices[6] = (oldTotal + entry.price) / count6;
          break;
        case 7:
          oldTotal = this.thisYearPrices[7] * count7;
          count7++;
          this.thisYearPrices[7] = (oldTotal + entry.price) / count7;
          break;
        case 8:
          oldTotal = this.thisYearPrices[8] * count8;
          count8++;
          this.thisYearPrices[8] = (oldTotal + entry.price) / count8;
          break;
        case 9:
          oldTotal = this.thisYearPrices[9] * count9;
          count9++;
          this.thisYearPrices[9] = (oldTotal + entry.price) / count9;
          break;
        case 10:
          oldTotal = this.thisYearPrices[10] * count10;
          count10++;
          this.thisYearPrices[10] = (oldTotal + entry.price) / count10;
          break;
        case 11:
          oldTotal = this.thisYearPrices[11] * count11;
          count11++;
          this.thisYearPrices[11] = (oldTotal + entry.price) / count11;
          break;
      }
    }
    this.trainNewModel().then(() => {
      this.chartData = [
        {data: [33, 60, 26, 70], label: 'Last Year'},
        {
          data: [this.thisYearPrices[this.monthArray[0]], this.thisYearPrices[this.monthArray[1]], this.thisYearPrices[this.monthArray[2]], this.thisYearPrices[this.monthArray[3]]],
          label: 'This Year'
        },
        {data: [, , , this.thisYearPrices[this.monthArray[3]], this.prediction], label: 'Forecast'}
      ];
    });
  }

  async trainNewModel(): Promise<any> {
    const learningRate = 0.00001;
    const optimizerVar = tf.train.sgd(learningRate);

    // Define a model for linear regression.
    // TODO define a model that fits the data better
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1], activation: "relu", kernelInitializer: 'ones'}));

    // Prepare the model for training: Specify the loss and the optimizer.
    this.linearModel.compile({loss: 'meanSquaredError', optimizer: optimizerVar});


    // Training data
    const xs = tf.tensor1d(this.predictionDates);
    const ys = tf.tensor1d(this.predictionPrices);

    // Train
    await this.linearModel.fit(xs, ys, {epochs: 10});
    console.log('model trained!');
    let dateToPredict = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + 31);
    this.predict((dateToPredict.getTime() - this.start.getTime()) / this.oneDay);
  }

  predict(val) {
    val = parseFloat(val);
    const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
    this.prediction = Array.from(output.dataSync())[0];
    console.log(output.toString());
    this.linearModel.dispose();
    tf.disposeVariables();
  }

}
