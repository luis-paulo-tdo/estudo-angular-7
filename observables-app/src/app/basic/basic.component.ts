import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'observables-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

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

  private createObservable() {
    const observable = new Observable(
      (observer: Observer<number>) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.next(5);
        observer.error('Errou!');
        observer.complete();
      }
    );

    observable.subscribe(
      (value: number) => console.log(`Value: ${value}`),
      error => console.error(`Error: ${error}`),
      () => console.info('Completed.')
    );
  }

  private createTimer() {
    console.log('Before Timer');
    const timer = interval(500);
    timer.subscribe((value) => console.log(value));
    console.log('After Timer');
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

    this.subscriptionOne = observable.subscribe(
      value => this.numberOne = value,
      error => this.stringOne = `Error: ${error}`,
      () => this.stringOne = 'Completed'
    );

    this.subscriptionTwo = observable.subscribe(
      value => this.numberTwo = value,
      error => this.stringTwo = `Error: ${error}`,
      () => this.stringTwo = 'Completed'
    );

    setTimeout(() => {
      this.subscriptionOne.unsubscribe();
    }, 4000);

    setTimeout(() => {
      this.subscriptionTwo.unsubscribe();
    }, 8000);
  }
}
