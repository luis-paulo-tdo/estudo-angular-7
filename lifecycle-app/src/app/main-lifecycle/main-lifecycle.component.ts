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
  private edited: number = -1;
  private randomNumber: number;

  private artists: Artist[] = [];
  private bands: string[] = ['Motörhead', 'Judas Priest', 'Megadeth'];

  constructor() {
    this.generateRandomNumber();
  }

  ngOnInit() {
  }

  generateRandomNumber() {
    this.randomNumber = Math.round(Math.random() * 1000);
  }

  save() {
    if (this.edited === -1) {
      this.artists.push({ name: this.name, age: this.age, band: this.band });
    } else {
      this.artists[this.edited].age = this.age;
      this.artists[this.edited].name = this.name;
      this.artists[this.edited].band = this.band;
      this.edited = -1;
    }

    this.age = null;
    this.name = '';
    this.band = '';
  }

  edit(index: number) {
    this.age = this.artists[index].age;
    this.name = this.artists[index].name;
    this.band = this.artists[index].band;
    this.edited = index;
  }

  delete(index: number) {
    this.artists.splice(index, 1);
  }
}
