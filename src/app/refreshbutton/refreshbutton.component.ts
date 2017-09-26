import { Component, OnInit } from '@angular/core';
import { RefreshService } from '../refresh.service'

@Component({
  selector: 'app-refreshbutton',
  templateUrl: './refreshbutton.component.html',
  styleUrls: ['./refreshbutton.component.css']
})
export class RefreshbuttonComponent implements OnInit {

  isLoading: boolean = false;
  message: string = "";

  constructor(private service: RefreshService) { }

  ngOnInit() {
  }

  onclick() {
    this.isLoading=true;
    let setNotLoading = (value?) => {
      if(value) this.message=value;
      this.isLoading = false; }

    this.service.refresh().subscribe(setNotLoading, setNotLoading, setNotLoading);


  }

}
