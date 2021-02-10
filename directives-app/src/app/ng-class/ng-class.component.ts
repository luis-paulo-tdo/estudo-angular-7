import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  textClass = 'class-one';

  constructor() { }

  ngOnInit() {
  }

}
