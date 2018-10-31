import {Component, Inject} from '@angular/core';
import {DialogData} from '../account.component';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}



}
