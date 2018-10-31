import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from './login/login.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  animal: string;
  name: string;


  constructor(public dialog: MatDialog) {}

  openLogin() {
    this.dialog.open(LoginComponent, {
      data: {
        animal: 'panda'
      }
    });
  }


}
