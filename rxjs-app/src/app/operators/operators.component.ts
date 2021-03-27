import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'rxjs-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mapOperator() {
    const observableFrom = from(['Using', 'Operator', 'map()', 'On', 'Observable']);
    observableFrom
    .pipe(
      map(value => value.toUpperCase()),
      map(value => value.toLowerCase()),
      delay(2000)
    )
    .subscribe(value => console.log(value));

    const observableFromEvent = fromEvent(document, 'click');
    observableFromEvent
    .pipe(
      map((click: MouseEvent) => ({ x: click.screenX, y: click.screenY }))
    )
    .subscribe(value => console.log(value));
  }
}
