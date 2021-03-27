import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, Observer, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'rxjs-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
  }

  createObservable() {
    const observable = Observable.create((observer: Observer<string>) => {
      observer.next('Loading');
      observer.next('Observer');
      observer.next('Using');
      observer.next('create()');
      observer.next('Operator');
      observer.complete();
    });
    const subscription = observable.subscribe(value => console.log(value));
    this.subscription.add(subscription);
  }

  fromObservable() {
    const observable = from(['Loading', 'Observer', 'Using', 'from()', 'Operator']);
    const subscription = observable.subscribe(value => console.log(value));
    this.subscription.add(subscription);
  }

  ofObservable() {
    const observable = of(['Loading', 'Observer', 'Using', 'of()', 'Operator']);
    const subscription = observable.subscribe(value => console.log(value));
    this.subscription.add(subscription);
  }

  intervalObservable() {
    const elements = ['Loading', 'Observer', 'Using', 'interval()', 'Operator'];
    const observable = interval(1000);
    const subscription = observable.subscribe(value => {
      if (value < elements.length) {
        console.log(elements[value]);
      } else {
        console.log(value - elements.length);
      }
    });
    this.subscription.add(subscription);
  }

  timerObservable() {
    const elements = ['Loading', 'Observer', 'Using', 'timer()', 'Operator'];
    const observable = timer(3000, 1000);
    const subscription = observable.subscribe(value => {
      if (value < elements.length) {
        console.log(elements[value]);
      } else {
        console.log(value - elements.length);
      }
    });
    this.subscription.add(subscription);
  }

  fromEventObservable() {
    const observable = fromEvent(document, 'click');
    const subscription = observable.subscribe(value => console.log(value));
    this.subscription.add(subscription);
  }

  unsubscribeObservables() {
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
  }
}
