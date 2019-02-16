import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {RESTService} from '../../services/rest.service';

@Component({
  selector: 'app-set-price',
  templateUrl: './set-price.component.html',
  styleUrls: ['./set-price.component.css']
})
export class SetPriceComponent implements OnInit {

  @Input() itemId: number;
  // TODO use a real userID once authentication is setup
  @Input() setPriceTargetData = {itemId: this.itemId, price: 1, userId: 2, sellerCost: 1};

  constructor(public rest: RESTService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.itemId) {
      
    }
  }

  setPriceTarget() {
    if (this.setPriceTargetData.price != null && this.setPriceTargetData.sellerCost != null) {
      this.setPriceTargetData.itemId = this.itemId;
      this.rest.updateSellerItem(this.itemId, this.setPriceTargetData).subscribe((result) => {
        // location.reload();
      }, (err) => {
        console.log(err);
      });
    }
  }

}
