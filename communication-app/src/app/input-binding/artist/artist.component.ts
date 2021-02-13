import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../artist.model';

@Component({
  selector: 'communication-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  @Input() artist: Artist;

  constructor() { }

  ngOnInit() {
  }

}
