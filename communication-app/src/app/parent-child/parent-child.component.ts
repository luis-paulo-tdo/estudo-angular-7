import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'communication-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild('paragraph') private paragraph: ElementRef;
  @ViewChild('timerTwo') private timer: TimerComponent

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }

  clear() {
    this.timer.clear();
  }

  ngAfterViewInit() {
    console.log(this.paragraph);
  }
}
