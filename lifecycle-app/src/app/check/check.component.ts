import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lifecycle-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges,
  OnDestroy, OnInit {

  private age: number = 0;
  private name: string = '';

  @Input() test: string = '';

  constructor() {
    console.log('[Chck.Cnst]');
  }

  ngOnInit() {
    console.log('[Chck.Init]');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[Chck.Chng]');
  }

  ngDoCheck() {
    console.log('[Chck.Chck]');
  }

  ngAfterContentChecked() {
    console.log('[Chck.Acch]');
  }

  ngAfterContentInit() {
    console.log('[Chck.Acin]');
  }

  ngAfterViewChecked() {
    console.log('[Chck.Avch]');
  }

  ngAfterViewInit() {
    console.log('[Chck.Avin]');
  }

  ngOnDestroy() {
    console.log('[Chck.Dstr]');
  }
}
