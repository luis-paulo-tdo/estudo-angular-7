import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name = '';
  band = '';
  instrument = '';
  age = 0;

  bands = [
    { name: 'Judas Priest', country: 'ENG' },
    { name: 'Grave Digger', country: 'GER' },
    { name: 'Megadeth', country: 'USA' },
    { name: 'Motörhead', country: 'ENG' },
    { name: 'Sepultura', country: 'BRA' },
    { name: 'Venom', country: 'GER' }
  ];

  artists = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.artists.push({
      name: this.name,
      band: this.band,
      instrument: this.instrument,
      age: this.age
    });
    console.log(this.artists);
  }

  cancel() {
    this.name = '';
    this.band = '';
    this.instrument = '';
    this.age = 0;
  }
}
