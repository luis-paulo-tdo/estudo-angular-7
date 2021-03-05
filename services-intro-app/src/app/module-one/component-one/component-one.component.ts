import { Component, OnInit } from '@angular/core';
import { ServiceOne } from '../service-one.service';

@Component({
  selector: 'services-intro-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  numberValue = 0;

  constructor(private serviceOne: ServiceOne) { }

  ngOnInit() {
    this.numberValue = this.serviceOne.numberValue;
  }
}
