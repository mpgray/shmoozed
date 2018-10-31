import {Component, OnInit, ViewChild} from '@angular/core';
import {AccountComponent, DialogData} from '../../account/account.component';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../../account/login/login.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild('AccountComponent') account: AccountComponent;

  emailMessages = 13;
  alertMessages = 20;
  events: string[] = [];
  opened: boolean;

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



  ngOnInit() {
  }

}
