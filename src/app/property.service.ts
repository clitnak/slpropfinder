import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Property} from "./domain/property";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PropertyService {

  private getAllUrl: string = 'https://wmwxjpm97c.execute-api.us-west-2.amazonaws.com/prod/api/properties/all';
  private savePropertyUrl: string = 'https://wmwxjpm97c.execute-api.us-west-2.amazonaws.com/prod/api/properties/property';
  constructor(private http: Http) { }

  retrieveProperties(): Promise<Property[]> {
    return this.http
      .get(this.getAllUrl, "")
      .toPromise()
      .then((result) => <Property[]> result.json());
  }

  save(property: Property): Promise<Property> {
    property.saleStatus = property.saleStatus ? property.saleStatus : "";
    return this.http
      .put(this.savePropertyUrl, property)
      .toPromise()
      .then((result) => <Property> result.json())
  }
}
