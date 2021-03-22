import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { DataModel } from '../data-model';
import { RandomDataService } from '../random-data.service';

@Component({
  selector: 'observables-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  value: number = 0;
  private subject: Subject<DataModel>;
  private replaySubject: ReplaySubject<DataModel>;
  private asyncSubject: AsyncSubject<DataModel>;
  private behaviorSubject: BehaviorSubject<DataModel>;

  constructor(private randomDataService: RandomDataService) { }

  ngOnInit() {
    this.subject = new Subject<DataModel>();
    this.replaySubject = new ReplaySubject<DataModel>();
    this.asyncSubject = new AsyncSubject<DataModel>();
    this.behaviorSubject = new BehaviorSubject<DataModel>({ timestamp: 0, value: 0 });

    this.randomDataService.generator.subscribe(this.subject);
    this.randomDataService.generator.subscribe(this.replaySubject);
    this.randomDataService.generator.subscribe(this.asyncSubject);
    this.randomDataService.generator.subscribe(this.behaviorSubject);
  }

  connect() {
    this.randomDataService.generator.connect();
  }

  private useSubject() {
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
