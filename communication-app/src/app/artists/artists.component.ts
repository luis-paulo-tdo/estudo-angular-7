import { Component, OnInit } from '@angular/core';
import { Artist } from './artist.model';

@Component({
  selector: 'communication-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  name: string;
  age: number;
  artists: Artist[] = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.artists.push({ name: this.name, age: this.age });
    this.name = '';
    this.age = 0;
  }
}
