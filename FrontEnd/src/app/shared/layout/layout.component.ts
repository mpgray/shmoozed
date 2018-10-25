import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  emailMessages = 13;
  alertMessages = 20;
  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

}
