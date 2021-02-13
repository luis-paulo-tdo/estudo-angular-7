import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artist } from '../artist.model';

@Component({
  selector: 'communication-item-artist',
  templateUrl: './item-artist.component.html',
  styleUrls: ['./item-artist.component.css']
})
export class ItemArtistComponent implements OnInit {

  name = '';
  age = 0;
  onEdit = false;

  @Input() artist: Artist;
  @Output() removeEvent = new EventEmitter<Artist>();
  @Output() updateEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.onEdit = true;
    this.name = this.artist.name;
    this.age = this.artist.age;
  }

  remove() {
    this.removeEvent.emit();
  }

  save() {
    this.onEdit = false;
    this.updateEvent.emit({ name: this.name, age: this.age });
  }
}
