import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LifecycleEvent } from './lifecycle-event';

@Component({
  selector: 'lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements AfterContentInit, AfterViewInit, OnChanges, OnDestroy, OnInit {

  public events: LifecycleEvent[] = [];
  private eventNextId: number = 0;
  private colors: string[] = ['accent', 'warn', 'primary'];

  @Input() age: number;
  @Input() band: string;
  @Input() name: string;

  constructor() {
    this.newEvent('Cons');
  }

  ngOnInit() {
    this.newEvent('Init');
  }
  
  ngAfterContentInit() {
    this.newEvent('Acin');
  }

  ngAfterViewInit() {
    this.newEvent('Avin');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.newEvent('Chng');
  }

  ngOnDestroy() {
    this.newEvent('Dstr');
  }

  newEvent(name: string) {
    let id = this.eventNextId++;
    this.events.push({ id, name, color: this.colors[id % this.colors.length] });

    setTimeout(() => {
      let index = this.events.findIndex(e => e.id === id);
      if (index >= 0) {
        this.events.splice(index, 1);
      }
    }, 1000 + (this.events.length * 1000));
  }
}
