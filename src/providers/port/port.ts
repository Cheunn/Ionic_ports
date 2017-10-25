import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Container } from '../../app/container'
import { Member } from '../../app/member'
import { Port } from '../../app/port'

/*
  Generated class for the PortProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PortProvider {

  private portApiUrl = 'url'

  constructor(public http: Http) {
    console.log('Hello PortProvider Provider');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPorts():Promise<Port[]>{
    return this.http.get(this.portApiUrl)
    .toPromise()
    .then(response => response.json().data as Port[])
    .catch(this.handleError);
  }

  getOwnerPorts(id_owner: number): Promise<Port[]> {
    let url = this.portApiUrl + "?id_owner=" + id_owner
    return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Port[])
                .catch(this.handleError);
  }


}
