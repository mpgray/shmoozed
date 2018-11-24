import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemHistory } from '../../models/item-history';
import { environment } from '../../../environments/environment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-item-history',
  templateUrl: './item-history.component.html',
  styleUrls: ['./item-history.component.css']
})
export class ItemHistoryComponent implements OnInit {
  itemHistories: ItemHistory[];
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient,
  public dialogRef: MatDialogRef<ItemHistoryComponent>,
  @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit() {
    this.getItemHistories();
  }

  getItemHistories() {
    const apiLocation = this.baseUrl + 'itemhistory/' + this.data;
    this.http.get<ItemHistory[]>(apiLocation)
    .subscribe(histories => {
      this.itemHistories = histories;
    });
  }

}
