import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements AfterContentInit, AfterViewInit, OnChanges, OnDestroy, OnInit {

  @Input() age: number;
  @Input() band: string;
  @Input() name: string;

  constructor() {
    console.log('[Cons] Name:', this.name);
  }

  ngOnInit() {
    console.log('[Init] Name:', this.name);
  }
  
  ngAfterContentInit() {
    console.log('[Acin] Name:', this.name);
  }

  ngAfterViewInit() {
    console.log('[Avin] Name:', this.name);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[Chng] Name:', this.name);
  }

  ngOnDestroy() {
    console.log('[Dstr] Name:', this.name);
  }
}
