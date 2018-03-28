import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertytabs',
  templateUrl: './propertytabs.component.html',
  styleUrls: ['./propertytabs.component.css']
})
export class PropertytabsComponent implements OnInit {
  showFinancials: boolean;

  constructor() { }

  ngOnInit() {
  }

  viewPropertyFinancials() {
    this.showFinancials = true;
  }
}
