import { Injectable } from '@angular/core';
import { ConnectableObservable, Observable, Observer } from 'rxjs';
import { publish } from 'rxjs/operators';
import { DataModel } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class RandomDataService {

  public generator: ConnectableObservable<DataModel>;

  constructor() {
    this.generator = new Observable(
      (observer: Observer<DataModel>) => {
        console.log('[Random Data] Generating Value');
        let value = 0;
        let generate = () => {
          
          value++;
          console.log('[Random Data] Value Generated:', value);

          if (value <= 10) {
            let timestamp = Math.random() * 2000 + 500;
            observer.next({ value, timestamp });
            setTimeout(() => generate(), timestamp);
          } else {
            observer.complete();
          }
        };
        generate();
      }
    ).pipe(publish()) as ConnectableObservable<DataModel>;
  }
}
