import { Component, OnInit } from '@angular/core';
import { ServiceTwo } from 'src/app/service-two.service';
import { ServiceOne } from '../service-one.service';

@Component({
  selector: 'services-intro-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  public numberValue: number = 0;
  public serviceTwoName: string = '';

  constructor(
    private serviceOne: ServiceOne,
    private serviceTwo: ServiceTwo
    ) {
    this.numberValue = this.serviceOne.numberValue;
    this.serviceTwoName = this.serviceTwo.name;
  }

  ngOnInit() {
  }
}
