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
  private intervalRef: NodeJS.Timer = null;
  private colors: string[] = ['accent', 'warn', 'primary'];

  @Input() age: number;
  @Input() band: string;
  @Input() name: string;

  constructor() {
    console.log('[Chld.Cons] Name:', this.name);
    this.newEvent('Cons');
  }

  ngOnInit() {
    console.log('[Chld.Init] Name:', this.name);
    this.newEvent('Init');
    this.intervalRef = setInterval(() => console.log(`[${this.name}] Plays ${this.band}`), 2000);
  }
  
  ngAfterContentInit() {
    console.log('[Chld.Acin] Name:', this.name);
    this.newEvent('Acin');
  }

  ngAfterViewInit() {
    console.log('[Chld.Avin] Name:', this.name);
    this.newEvent('Avin');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[Chld.Chng] Name:', this.name);
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
    console.log('[Chld.Dstr] Name:', this.name);
    this.newEvent('Dstr');
    clearInterval(this.intervalRef);
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
