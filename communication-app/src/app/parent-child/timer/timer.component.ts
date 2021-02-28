import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'communication-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  private interval: any;
  private miliseconds = 0;
  private running = false;

  constructor() { }

  ngOnInit() {
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.interval = setInterval(() => {
        this.miliseconds += 50;
      }, 50);
    }
  }

  stop() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }

  clear() {
    this.miliseconds = 0;
  }

  private round(value: number): number {
    return Math.round(value);
  }
}
