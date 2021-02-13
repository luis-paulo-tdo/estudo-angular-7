import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {

  enable = false;

  constructor() { }

  ngOnInit() {
  }

}
