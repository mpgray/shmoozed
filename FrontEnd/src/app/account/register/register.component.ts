import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  user = new User();
  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  register() {
    const apiLocation = environment.baseUrl + 'user';
    this.http.post(apiLocation, this.user)
      .subscribe(() => {
        this.openSnackBar();
      });
  }

  openSnackBar() {
    const snackBarRef = this.snackBar.open('User Successfully Registered', 'Log In', { duration: 10000 });
    snackBarRef.onAction().subscribe(() => { location.reload(); });
  }
}
