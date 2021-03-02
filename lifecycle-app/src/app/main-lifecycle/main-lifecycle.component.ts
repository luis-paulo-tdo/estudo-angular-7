import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';

@Component({
  selector: 'lifecycle-main',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  private age: number;
  private band: string;
  private name: string;
  private edit: Artist = null;

  private artists: Artist[] = [];
  private bands: string[] = ['Motörhead', 'Judas Priest', 'Megadeth'];

  constructor() { }

  ngOnInit() {
  }

  save() {
    if (this.edit == null) {
      this.artists.push({ name: this.name, age: this.age, band: this.band });
    }
  }
}
