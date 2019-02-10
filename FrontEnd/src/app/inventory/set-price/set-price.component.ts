import {Component, Input, OnInit} from '@angular/core';
import {RESTService} from '../../services/rest.service';

@Component({
  selector: 'app-set-price',
  templateUrl: './set-price.component.html',
  styleUrls: ['./set-price.component.css']
})
export class SetPriceComponent implements OnInit {

  @Input() itemId: number;
  // TODO use a real userID once authentication is setup
  @Input() setPriceTargetData = {itemId: 1, price: 1, userId: 2};

  constructor(public rest: RESTService) { }

  ngOnInit() {
  }

  setPriceTarget() {
    if (this.setPriceTargetData.price != null ) {
      this.setPriceTargetData.itemId = this.itemId;
      this.rest.addSellerItem(this.setPriceTargetData).subscribe((result) => {
        // location.reload();
      }, (err) => {
        console.log(err);
      });
    }
  }

}
