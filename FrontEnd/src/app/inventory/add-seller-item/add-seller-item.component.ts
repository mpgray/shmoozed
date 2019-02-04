import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-seller-item',
  templateUrl: './add-seller-item.component.html',
  styleUrls: ['./add-seller-item.component.css']
})
export class AddSellerItemComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddSellerItemComponent>) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close(false);
  }

  addSellerItem() {
    this.dialogRef.close(false);
  }


}
