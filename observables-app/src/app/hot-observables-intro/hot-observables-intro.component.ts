import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Observer } from 'rxjs';

@Component({
  selector: 'observables-hot-observables-intro',
  templateUrl: './hot-observables-intro.component.html',
  styleUrls: ['./hot-observables-intro.component.css']
})
export class HotObservablesIntroComponent implements OnInit {

  numberOne: number = 0;
  numberTwo: number = 0;
  numberThree: number = 0;
  numberFour: number = 0;
  stringOne: string = 'Listener #1';
  stringTwo: string = 'Listener #2';
  stringThree: string = 'Listener #3';
  stringFour: string = 'Listener #4';
  @ViewChild('button') button: ElementRef;

  constructor() { }

  ngOnInit() {
    this.createHotObservable();
  }

  private buttonHotObservable() {
    const buttonClicked: Observable<any> = fromEvent(this.button.nativeElement, 'click');
    buttonClicked.subscribe(event => console.log(`[Subscribe #1] Clicked Button ${event}`));
    buttonClicked.subscribe(event => console.log(`[Subscribe #2] Clicked Button ${event}`));
  }

  private createHotObservable() {
    class Producer {
      private id;
      private value = 0;
      private listeners = [];

      addListener(listener) {
        this.listeners.push(listener);
        console.log('[Producer] You have', this.listeners.length, 'listener(s) now');
      }

      start() {
        this.id = setInterval(() => {
          this.value++;
          console.log('[Producer] Value:', this.value);
          for (let listener of this.listeners) {
            listener(this.value);
          }
        }, 1000);
      }

      stop() {
        clearInterval(this.id);
      }
    }

    const producer: Producer = new Producer();
    producer.start();

    setTimeout(() => {
      producer.addListener(value => this.numberOne = value);
    }, 4000);

    setTimeout(() => {
      producer.addListener(value => this.numberTwo = value);
    }, 8000);

    const hotObservable = new Observable(
      (observer: Observer<number>) => {
        producer.addListener(value => observer.next(value));
      }
    );

    hotObservable.subscribe(value => this.numberThree = value);
    hotObservable.subscribe(value => this.numberFour = value);
  }
}
