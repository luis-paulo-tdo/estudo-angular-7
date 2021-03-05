import { Component, OnInit } from '@angular/core';
import { ServiceTwo } from 'src/app/service-two.service';
import { ServiceOne } from '../service-one.service';

@Component({
  selector: 'services-intro-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  numberValue = 0;
  serviceTwoName = '';

  constructor(
    private serviceOne: ServiceOne,
    private serviceTwo: ServiceTwo
    ) { }

  ngOnInit() {
    this.numberValue = this.serviceOne.numberValue;
    this.serviceTwoName = this.serviceTwo.name;
  }
}
