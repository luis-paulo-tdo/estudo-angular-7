import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  albums = [
    'Motörhead', 'Overkill', 'Bomber',
    'Ace Of Spades', 'Iron Fist', 'Another Perfect Day',
    'Orgasmatron', 'Rock \'N\' Roll', '1916',
    'March Ör Die', 'Bastards', 'Sacrifice',
    'Snake Bite Love', 'We Are Motörhead', 'Hammered',
    'Inferno', 'Kiss Of Death', 'Motörizer',
    'The Wörld Is Yours', 'Aftershock', 'Bad Magic'
  ];

  members = [
    { name: 'Lemmy Kilmister', instrument: 'Bass', current: true },
    { name: 'Phil Campbell', instrument: 'Guitars', current: true },
    { name: 'Mikkey Dee', instrument: 'Drums', current: true },
    { name: 'Philthy Animal', instrument: 'Drums', current: false},
    { name: 'Fast Eddie Clarke', instrument: 'Guitars', current: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
