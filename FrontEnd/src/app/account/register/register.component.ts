import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/models/user-role';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  user = new User();
  role = 0;
  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  register() {
    const apiLocation = environment.baseUrl + 'user';
    this.http.post<User>(apiLocation, this.user)
      .subscribe(user => {
        this.addUserRole(user);
      });
  }

  addUserRole(user: User) {
    const userRole = new UserRole();
    userRole.role_Id = this.role;
    userRole.user_Id = user.id;
    const apiLocation = environment.baseUrl + 'userrole';
    this.http.post(apiLocation, userRole)
    .subscribe(() => {
      this.login(user.id);
    });
  }

  login(userId: number) {
    const apiLocation = environment.baseUrl + 'userrole/getallrolesforuserid/' + userId;
    this.http.get<Role[]>(apiLocation)
    .subscribe(roles => {
      localStorage.setItem('roles', JSON.stringify(roles));
      this.router.navigate(['dashboard']);
    });
  }
}
