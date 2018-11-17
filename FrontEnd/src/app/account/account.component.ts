import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from './login/login.component';
import { UserAuthentication } from '../models/user-authentication';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  model: any = {};
  loading = false;

  animal: string;
  name: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;

  constructor(public dialog: MatDialog) {}

  openLogin() {
    this.dialog.open(LoginComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // The ID token you need to pass to your backend:
    const id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);
    const user = new UserAuthentication();
    user.token = id_token;
    localStorage.setItem('user', JSON.stringify(user));
  }

}
