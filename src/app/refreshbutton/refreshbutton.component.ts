import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RefreshService } from '../refresh.service'
import {PropertyService} from "../property.service";

@Component({
  selector: 'app-refreshbutton',
  templateUrl: './refreshbutton.component.html',
  styleUrls: ['./refreshbutton.component.css']
})
export class RefreshbuttonComponent implements OnInit {

  @Output() Refresh = new EventEmitter();
  isLoading: boolean = false;
  message: string = "";


  constructor(private service: RefreshService, private propertyService: PropertyService) { }

  ngOnInit() {
  }

  onclick() {
    this.isLoading=true;
    let setNotLoading = (value?) => {
      if(value) this.message=value;
      this.isLoading = false;
    }

    this.service.refresh().subscribe(setNotLoading, setNotLoading,
      () => {
        setNotLoading();
        this.Refresh.emit();
      });


  }

}
