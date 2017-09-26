import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class RefreshService {
  private refreshUrl: string = 'https://wmwxjpm97c.execute-api.us-west-2.amazonaws.com/prod/backendservices/refresh/all';
  constructor(private http: Http) {
  }

  refresh(): Observable<Object>{
    //Use Observable.forkjoin to create some parallel promises for each trustee

    return this.http
      .post(this.refreshUrl, "");


  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
