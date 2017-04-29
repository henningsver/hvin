import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Wine } from './wine';

@Injectable()
export class WineService {
  private winesUrl = 'api/viner';  // URL to web api
  constructor(private http: Http) { }
  getWines(): Promise<Wine[]> {
    return this.http.get(this.winesUrl)
             .toPromise()
             .then(response => response.json() as Wine[])
             .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
