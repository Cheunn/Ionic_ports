import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Container } from '../../app/container'

/*
  Generated class for the ContainerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContainerProvider {

  private containerApiUrl = "url";

  constructor(public http: Http) {
    console.log('Hello ContainerProvider Provider');
  
  }

  getContainers(): Promise<Container[]> {
    return this.http.get(this.containerApiUrl)
               .toPromise()
               .then(response => response.json().data as Container[])
               .catch(this.handleError);
  }

  getContainer(id: number): Promise<Container> {
    let url = this.containerApiUrl + "?id=" + id
    return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Container)
                .catch(this.handleError);
  }

  getOwnerContainers(id_owner: number): Promise<Container[]> {
    let url = this.containerApiUrl + "?id_owner=" + id_owner
    return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Container[])
                .catch(this.handleError);
  }

  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
