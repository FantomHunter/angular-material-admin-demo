import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard-flex.component.html',
  styleUrls: ['./dashboard-flex.component.css']
})
export class DashboardFlexComponent implements OnInit {
  items = [1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
  }

}
