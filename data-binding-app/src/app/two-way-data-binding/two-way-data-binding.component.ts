import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  firstNameInputValue = '';
  secondNameInputValue = '';

  constructor() { }

  ngOnInit() {
  }

}
