import { Component, OnInit } from '@angular/core';
import { Container } from '../../app/container';
import { ContainerProvider } from '../../providers/container/container';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the ContainersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'containers',
  templateUrl: 'containers.html'
})
export class ContainersComponent {
  containers : Container[]
  text: string;

  constructor() {
    console.log('Hello ContainersComponent Component');
    this.text = 'Hello World';
  }

}
