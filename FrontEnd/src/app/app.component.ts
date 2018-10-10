import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  test = 'test';
  ngOnInit(): void {
    const apiLocation = environment.baseUrl + 'example/item';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.get(apiLocation, httpOptions)
    .subscribe(response => {
      this.title = JSON.stringify(response);
    });
  }


  constructor(private http: HttpClient) {}
}
