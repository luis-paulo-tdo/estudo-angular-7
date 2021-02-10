import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  textColor = 'green';
  textFontSize: '12px';

  constructor() { }

  ngOnInit() {
  }
}
