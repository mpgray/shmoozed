import { Component, OnInit } from '@angular/core';
import { AddBuyerItem } from 'src/app/models/add-buyer-item';
import { RESTService } from 'src/app/services/rest.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-buy-item',
  templateUrl: './add-buy-item.component.html',
  styleUrls: ['./add-buy-item.component.css']
})
export class AddBuyItemComponent implements OnInit {
  buyerItem = new AddBuyerItem();

  constructor(private rest: RESTService,
    private dialogRef: MatDialogRef<AddBuyItemComponent>) {
    this.buyerItem.userId = 2;
   }

  ngOnInit() {
  }

  addBuyerItem() {
    this.rest.addWalmartBuyerDetails(1, this.buyerItem.price, 2, this.buyerItem.walmartUrl)
    .subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
