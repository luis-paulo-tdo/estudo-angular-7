import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';

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
      filter(value => value % 2 === 0)
    )
    .subscribe(value => console.log(value));
  }
}
