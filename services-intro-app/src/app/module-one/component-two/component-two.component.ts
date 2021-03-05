import { Component, OnInit } from '@angular/core';
import { ServiceOne } from '../service-one.service';

@Component({
  selector: 'services-intro-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  public numberValue: number = 0;

  constructor(private serviceOne: ServiceOne) {
    this.numberValue = this.serviceOne.numberValue;
  }

  ngOnInit() {
  }
}
