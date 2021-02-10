import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  albums = [
    'Motörhead',
    'Overkill',
    'Bomber',
    'Ace Of Spades',
    'Iron Fist',
    'Another Perfect Day'
  ];

  constructor() { }

  ngOnInit() {
  }

}
