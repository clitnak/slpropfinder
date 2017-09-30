import {Component, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {PropertyService} from '../property.service';
import {Property} from "../domain/property";
import {DataTable, Dropdown, SelectItem} from "primeng/primeng";

@Component({
  selector: 'app-propertygrid',
  templateUrl: './propertygrid.component.html',
  styleUrls: ['./propertygrid.component.css']
})
@Injectable()
export class PropertygridComponent implements OnInit {
  @ViewChild('dt') dt: DataTable;
  @ViewChild('websiteFilter') websiteFilter: Dropdown;
  @Input() properties: Property[];

  websiteStatus: SelectItem[];
  conditions: SelectItem[];

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit() {
    this.websiteStatus =[];
    this.websiteStatus.push({label:"All", value: null});
    this.websiteStatus.push({label:"Live", value: 'true'});
    this.websiteStatus.push({label:"Dead", value: 'false'});

    this.conditions =[];
    this.conditions.push({label:"(unknown)", value: null});
    this.conditions.push({label:"Bad", value: 'Bad'});
    this.conditions.push({label:"Fair", value: 'Fair'});
    this.conditions.push({label:"Good", value: 'Good'});
    this.conditions.push({label:"Great", value: 'Great'});
    this.conditions.push({label:"Perfect", value: 'Perfect'});
    this.refresh();
  }

  min(val1: number, val2: number, val3: number) {
    return Math.min(val1, val2, val3);
  }
  refresh() {
    this.propertyService.retrieveProperties().then((properties) => {
      this.properties = properties
      setTimeout(() => this.websiteFilter.selectItem({}, {label: "Live", value: 'true'}), 100);
    });
  }

  formatRow(property: Property, index: number) : String {
    let classes = [];

    let saleStatus = property.saleStatus ? property.saleStatus : "";
    if (saleStatus.toLowerCase().indexOf("cancelled") >= 0) {
      classes.push("cancelled");
    } else if (PropertygridComponent.propertyIsAGo(property)) {
      classes.push("go");
    } else if (PropertygridComponent.propertyIsANoGo(property)) {
      classes.push("nogo");
    } else if (PropertygridComponent.propertyIsLikelyAGo(property)) {
      classes.push("maybe-go");
    }
    return classes.join(" ");

  }
  updateHomeWorth(event, property :Property) {
    this.propertyService.save(property).then((p) => {
      this.refresh();
    });
  }

  filterByWebsite(event) {
      this.dt.filter(event.value, 'onWebsite', 'equals')
  }

  private static propertyIsAGo(property: Property) : boolean {
    if (property.startingBid == 0) return false;
    let highestBid = Math.min(
      property.calculatedMaximumLiquidOffer, //as much money as we have to make a fast purchase
      property.calculatedMaximumFinancableOffer, //as much money as we can get at our selected risk level
      property.calculatedMaximumWiseOffer //A wise offer, regardless of our financing
    )
    return (property.startingBid < highestBid);
  }

  private static propertyIsANoGo(property: Property) {
    if (property.startingBid == 0) return false;
    let highestBid = Math.min(
      property.calculatedMaximumLiquidOffer, //as much money as we have to make a fast purchase
      property.calculatedMaximumFinancableOffer, //as much money as we can get at our selected risk level
      property.calculatedMaximumWiseOffer //A wise offer, regardless of our financing
    )
    return (property.startingBid > highestBid);
  }

  private static propertyIsLikelyAGo(property: Property) {
    return (property.calculatedMaximumWiseOffer < property.calculatedMaximumLiquidOffer);
  }
}
