import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'observables-hot-observables-intro',
  templateUrl: './hot-observables-intro.component.html',
  styleUrls: ['./hot-observables-intro.component.css']
})
export class HotObservablesIntroComponent implements OnInit {

  numberOne: number = 0;
  numberTwo: number = 0;
  stringOne: string = '';
  stringTwo: string = '';
  @ViewChild('button') button: ElementRef;

  constructor() { }

  ngOnInit() {
    const buttonClicked: Observable<any> = fromEvent(this.button.nativeElement, 'click');
    buttonClicked.subscribe(event => console.log(`[#1] Clicked Button`));
    buttonClicked.subscribe(event => console.log(`[#2] Clicked Button`));
  }
}
