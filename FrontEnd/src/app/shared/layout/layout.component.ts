import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isSidebarToggle = true;
  emailMessages = 13;

  constructor() { }

  ngOnInit() {
  }

}
