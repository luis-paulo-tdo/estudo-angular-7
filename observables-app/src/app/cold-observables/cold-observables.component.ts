import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'observables-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.css']
})
export class ColdObservablesComponent implements OnInit {

  numberOne: number = 0;
  numberTwo: number = 0;
  stringOne: string = '';
  stringTwo: string = '';
  subscriptionOne: Subscription;
  subscriptionTwo: Subscription;

  constructor() { }

  ngOnInit() {
    this.createTimerObservable();
  }

  private createTimerObservable() {
    this.stringOne = 'Initializing...';
    this.stringTwo = 'Initializing...';

    const observable = new Observable(
      (observer: Observer<any>) => {
        let count: number = 0;
        const interval = setInterval(() => {
          count++;
          console.log(`From Observable: ${count}`);
          if (count === 10) {
            observer.complete();
          } else if (count % 2 === 0) {
            observer.next(count);
          }
        }, 1000);

        return () => {
          clearInterval(interval);
        }
      }
    );

    this.stringOne = 'Waiting...';
    this.subscriptionOne = observable.subscribe(
      value => this.numberOne = value,
      error => this.stringOne = `Error: ${error}`,
      () => this.stringOne = 'Completed'
    );

    this.stringTwo = 'Waiting...';
    setTimeout(() => {
      this.subscriptionTwo = observable.subscribe(
        value => this.numberTwo = value,
        error => this.stringTwo = `Error: ${error}`,
        () => this.stringTwo = 'Completed'
      );
    }, 3000);

    setTimeout(() => {
      this.subscriptionOne.unsubscribe();
      this.subscriptionTwo.unsubscribe();
    }, 15000);
  }
}
