import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, Observable, Observer, Subject } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

@Component({
  selector: 'observables-hot-observables',
  templateUrl: './hot-observables.component.html',
  styleUrls: ['./hot-observables.component.css']
})
export class HotObservablesComponent implements OnInit {

  value: number = 0;
  numberOne: number = 0;
  numberTwo: number = 0;
  stringOne: string = '';
  stringTwo: string = '';

  observable: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.observable = new Observable(
      (observer: Observer<number>) => {
        let count = 0;
        console.log(`%c[Observer] Initializing Production`, 'color: yellow');
        setInterval(() => {
          this.value = ++count;
          console.log(`%c[Observer] Value: ${this.value}`, 'color: cyan');
          count === 100 ? observer.complete() : observer.next(count);
        }, 1000);
      }
    );
    this.usePublish();
  }

  private usePublish() {
    const published: ConnectableObservable<number> = this.observable.pipe(publish()) as ConnectableObservable<number>;
    published.connect();
    this.createSubscriptions(published);
  }

  private usePublishReference() {
    const published = this.observable.pipe(publish(), refCount());
    this.createSubscriptions(published);
  }

  private useSubject() {
    const subject = new Subject<number>();
    this.observable.subscribe(subject);
    this.createSubscriptions(subject);
  }

  private createSubscriptions(subject: Subject<any> | Observable<any>) {
    // Subscribe 1
    this.stringOne = 'Waiting for values...';
    setTimeout(() => {
      subject.subscribe(value => {
        this.numberOne = value;
        this.stringOne = 'Receiving values!'
      });
    }, 2000);

    // Subscribe 2
    this.stringTwo = 'Waiting for values...';
    setTimeout(() => {
      subject.subscribe(value => {
        this.numberTwo = value;
        this.stringTwo = 'Receiving values!'
      });
    }, 4000);
  }
}
