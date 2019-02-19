import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';
import {BuyersearchComponent} from '../buyersearch.component';


@Component({
  selector: 'app-largeimg',
  templateUrl: './largeimg.component.html',
  styleUrls: ['./largeimg.component.css']
})
export class LargeimgComponent implements OnInit {
  largeImage = '';
  constructor(private bottomSheetRef: MatBottomSheetRef<LargeimgComponent>, private buyerSearch: BuyersearchComponent) {
  }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}

