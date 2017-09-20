import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class RefreshService {
  private hallidayScraperUrl: string = 'https://wmwxjpm97c.execute-api.us-west-2.amazonaws.com/prod/backendservices/hallidayscraper/all';
  private addressCompletionUrl: string = 'https://wmwxjpm97c.execute-api.us-west-2.amazonaws.com/prod/backendservices/addresscompletionservice/all';
  constructor(private http: Http) {
  }

  refresh(): Observable<Object>{
    //Use Observable.forkjoin to create some parallel promises for each trustee

    let promise$ = this.http
      .post(this.hallidayScraperUrl,"")
      .mergeMap( result =>
        this.http
          .post(this.addressCompletionUrl,"")
      );
    promise$.subscribe();
    return promise$;

    //newPropertiesAdded
    //oldPropertiesRemoved
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
