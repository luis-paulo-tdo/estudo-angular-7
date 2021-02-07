import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    firstName: 'Lemmy',
    lastName: 'Kilmister',
    age: 70,
    band: 'Motörhead'
  };

  constructor() { }

  ngOnInit() {
  }

}
