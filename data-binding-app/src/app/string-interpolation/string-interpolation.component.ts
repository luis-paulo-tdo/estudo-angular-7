import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    firstName: 'Luis',
    lastName: 'Paulo',
    age: 30,
    address: 'Route 22'
  };

  constructor() { }

  ngOnInit() {
  }

}
