import {AfterViewInit, Component, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {PropertyService} from '../property.service';
import {Property} from "../domain/property";
import {DataTable, Dropdown, SelectItem} from "primeng/primeng";

@Component({
  selector: 'app-propertygrid',
  templateUrl: './propertygrid.component.html',
  styleUrls: ['./propertygrid.component.css']
})
@Injectable()
export class PropertygridComponent implements OnInit, AfterViewInit {
  @ViewChild('dt') dt: DataTable;
  @ViewChild('websiteFilter') websiteFilter: Dropdown;
  @Input() properties: Property[];
  websiteStatus: SelectItem[];
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.retrieveProperties().then((properties) => {
      this.properties = properties;
    });
    this.websiteStatus =[];

    this.websiteStatus.push({label:"All", value: null});
    this.websiteStatus.push({label:"On Website", value: 'true'});
    this.websiteStatus.push({label:"Off Website", value: 'false'});
  }

  ngAfterViewInit() {
    //this.dt.filter(true, 'onWebsite', 'equals')
    //if (this.dt.filteredValue) {
    this.websiteFilter.selectItem(null, {label: "On Website", value: 'true'});
    //}
  }

  formatRow(property: Property, index: number) : String {
    let saleStatus = property.saleStatus ? property.saleStatus : "";
    if (saleStatus.toLowerCase().indexOf("cancelled") >=0 )
      return "cancelled";
  }

}
