import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'communication-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  title = 'Value Control';
  value = 0;

  constructor() { }

  ngOnInit() {
  }

  incBy(value: number) {
    this.value += value;
  }

  decBy(value: number) {
    this.value -= value;
  }
}
