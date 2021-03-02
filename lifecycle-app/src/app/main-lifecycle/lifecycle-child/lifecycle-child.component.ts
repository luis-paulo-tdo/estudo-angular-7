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
    console.log('[Cons] Name:', this.name);
    this.newEvent('Cons');
  }

  ngOnInit() {
    console.log('[Init] Name:', this.name);
    this.newEvent('Init');
  }
  
  ngAfterContentInit() {
    console.log('[Acin] Name:', this.name);
    this.newEvent('Acin');
  }

  ngAfterViewInit() {
    console.log('[Avin] Name:', this.name);
    this.newEvent('Avin');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[Chng] Name:', this.name);
    this.newEvent('Chng');
    for (let property in changes) {
      if (!changes[property].firstChange) {
        this.newEvent(`Changing ${property}: ${changes[property].previousValue} -> ${changes[property].currentValue}`);
      } else {
        this.newEvent(`New ${property}: ${changes[property].currentValue}`);
      }
    }
  }

  ngOnDestroy() {
    console.log('[Dstr] Name:', this.name);
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
