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
    return this.getContainers()
                .then(containers => containers.find(container => container.id === id));
  }
  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
