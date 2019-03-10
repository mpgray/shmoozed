import { Component, OnInit } from '@angular/core';
import { BuyingService } from '../../../../buying/buying.service';

@Component({
  selector: 'app-compareprice',
  templateUrl: './compareprice.component.html',
  styleUrls: ['./compareprice.component.css']
})
export class ComparepriceComponent implements OnInit {
  itemName: string;
  constructor(public buyingService: BuyingService) { }

  ngOnInit() {
    this.itemName = this.buyingService.itemName;
  }

}
