import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  showName = false;
  showAddress = false;
  showBand = false;
  showAge = false;

  constructor() { }

  ngOnInit() {
  }

}
