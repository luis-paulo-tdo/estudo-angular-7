import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'observables-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  value: number = 0;

  constructor() { }

  ngOnInit() {
    const subject: Subject<number> = new Subject<number>();
    subject.subscribe(value => {
      this.value = value;
      console.log('[Subject] Value', value);
    });
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.next(5);
    subject.complete();
  }
}
