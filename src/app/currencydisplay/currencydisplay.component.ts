import {Component, Input, OnInit} from '@angular/core';
import {Property} from "../domain/property";

@Component({
  selector: 'app-currencydisplay',
  templateUrl: './currencydisplay.component.html',
  styleUrls: ['./currencydisplay.component.css']
})
export class CurrencydisplayComponent implements OnInit {
  @Input() currencyValue= 0;

  constructor() { }

  ngOnInit() {
  }

}
