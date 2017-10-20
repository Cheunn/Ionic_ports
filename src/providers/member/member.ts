import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Container } from '../../app/container'
import { Member } from '../../app/member'

/*
  Generated class for the MemberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemberProvider {

  private memberApiUrl = "url";

  constructor(public http: Http) {
    console.log('Hello MemberProvider Provider');
  }

  getOwnerContainers(id_owner: number): Promise<Container[]> {
    return this.http.get(this.memberApiUrl)
                .toPromise()
                .then(response => response.json().data as Container[])
                .catch(this.handleError);
  }

  getMembers(): Promise<Member[]> {
    return this.http.get(this.memberApiUrl)
                .toPromise()
                .then(response => response.json().data as Member[])
                .catch(this.handleError);
  }

  getMember(id: number): Promise<Member> {
    return this.getMember()
                .then(containers => containers.find(container => container.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
