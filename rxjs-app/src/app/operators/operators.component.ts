import { Component, OnInit, ViewChild } from '@angular/core';
import { MatRipple } from '@angular/material';
import { from, fromEvent, interval, Observable, Subscription } from 'rxjs';
import { debounceTime, delay, filter, first, last, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'rxjs-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  @ViewChild(MatRipple) ripple: MatRipple;

  constructor() { }

  ngOnInit() {
  }

  mapOperator() {
    const observableFrom = from(['Using', 'Operator', 'map()', 'On', 'Observable']);
    const observableFromEvent = fromEvent(document, 'click');

    observableFrom
      .pipe(
        map(value => value.toUpperCase()),
        map(value => value.toLowerCase()),
        delay(2000)
      )
      .subscribe(value => console.log(value));

    observableFromEvent
      .pipe(
        map((click: MouseEvent) => ({ x: click.screenX, y: click.screenY }))
      )
      .subscribe(value => console.log(value));
  }

  filterOperator() {
    const observableFrom = from(['Using', 'Operator', 'map()', 'On', 'Observable']);
    const observableInterval = interval(1000);

    observableFrom
      .pipe(
        filter(value => value.includes('()'))
      )
      .subscribe(value => console.log(value));

    observableInterval
      .pipe(
        filter(value => value % 2 === 0),
        map(interval => console.log('Interval:', interval)),
        delay(1000)
      )
      .subscribe(value => console.log(value));
  }

  tapOperator() {
    const observableInterval = interval(1000);

    observableInterval
      .pipe(
        tap(interval => console.warn(`[Tap] Interval - ${interval}`)),

        tap(interval => console.log('[Tap] Initial:', interval)),
        filter(interval => interval % 2 === 0),

        tap(interval => console.log('[Tap] Filters:', interval)),
        map(interval => `Interval: ${interval}`),

        tap(interval => console.log('[Tap] Mapping:', interval)),
        delay(1000)
      )
      .subscribe(interval => {
        console.log('[Tap] Result:', interval);
        console.log('---');
      });
  }

  takeOperator() {
    const observable = this.randomNumbersObservable(20);
    const subscription: Subscription = this.testObservable('Take', observable, take(10));
    this.checkSubscription(subscription);
  }

  firstOperator() {
    const observable = this.randomNumbersObservable(20);
    const subscription: Subscription = this.testObservable('First', observable, first());
    this.checkSubscription(subscription);
  }

  lastOperator() {
    const observable = this.randomNumbersObservable(20);
    const subscription: Subscription = this.testObservable('Last', observable, last());
    this.checkSubscription(subscription);
  }

  debounceTimeOperator() {
    const observableFromEvent = fromEvent(document, 'click');

    observableFromEvent
      .pipe(
        tap(() => console.log('[Debounce] Click!')),
        debounceTime(1000)
      )
      .subscribe((event: MouseEvent) => {
        console.log('[Debounce] Launched Event:', event);
        this.launchRipple();
      });
  }

  private randomNumbersObservable(quantity: number): Observable<number> {
    return new Observable(observer => {
      let index;
      for (index = 0; index < quantity; ++index) {
        setTimeout(() => observer.next(Math.floor(Math.random() * 100)), index * 100);
      }
      setTimeout(() => observer.complete(), index * 100);
    });
  }

  private testObservable(name: string, observable: Observable<number>, callback: any): Subscription {
    return observable
      .pipe(
        tap(value => console.warn(`[${name}] Testing => ${value}`)),
        callback
      )
      .subscribe(
        value => console.log(`[${name}] Value: ${value}`),
        error => console.error(`[${name}] Error: ${error}`),
        () => console.log(`[${name}] Completed!`)
      );
  }

  private checkSubscription(subscription: Subscription) {
    const interval = setInterval(
      () => {
        console.log('[Interval] Checking Subscription');
        if (subscription.closed) {
          console.log('[Interval] Subscription Closed!');
          clearInterval(interval);
        }
      }, 200
    );
  }

  private launchRipple() {
    const ripple = this.ripple.launch({
      centered: true,
      persistent: true
    });
    ripple.fadeOut();
  }
}
