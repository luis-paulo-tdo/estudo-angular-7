import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DataModel } from 'src/app/data-model';

@Component({
  selector: 'observables-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.css']
})
export class SubjectChildComponent implements OnInit {

  @Input() name: string;
  @Input() subject: Subject<DataModel>;

  private connected: boolean = false;
  private subscription: Subscription;
  private logs: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  connect() {
    this.logs.push('Connection estabilished!');
    this.connected = true;
    this.subscription = this.subject.subscribe(
      data => this.log(data),
      error => this.logs.push(`Error: ${error}`),
      () => this.logs.push('Task finished!')
    );
  }

  disconnect() {
    this.logs.push('Subject disconnected.');
    this.connected = false;
    this.subscription.unsubscribe();
  }

  private log(data: DataModel) {
    this.logs.push(`Data: ${data.value} | Time: ${(data.timestamp / 1000).toFixed(1)}s`);
  }
}
