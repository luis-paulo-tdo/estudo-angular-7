import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';

@Component({
  selector: 'observables-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
