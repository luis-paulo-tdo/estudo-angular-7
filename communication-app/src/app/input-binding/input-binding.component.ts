import { Component, Input, OnInit } from '@angular/core';
import { Artist } from './artist.model';

@Component({
  selector: 'communication-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input('first-name') firstName: string;
  @Input('last-name') lastName: string;
  @Input() age: number;

  @Input() artists: Artist[];

  constructor() {
    this.artists = [
      { id: 1, name: 'Lemmy', age: 70 },
      { id: 2, name: 'Rob', age: 69 },
      { id: 3, name: 'Dave', age: 59 },
      { id: 4, name: 'Conrad', age: 58 }
    ];
  }

  ngOnInit() {
  }

}
