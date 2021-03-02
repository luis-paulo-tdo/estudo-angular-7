import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lifecycle-main',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  private bands: string[] = ['Motörhead', 'Judas Priest', 'Megadeth'];

  constructor() { }

  ngOnInit() {
  }

}
