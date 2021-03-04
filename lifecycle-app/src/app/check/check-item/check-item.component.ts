import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy } from '@angular/core';
import { DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lifecycle-check-item',
  templateUrl: './check-item.component.html',
  styleUrls: ['./check-item.component.css']
})
export class CheckItemComponent implements AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck,
  OnChanges, OnDestroy, OnInit {

  constructor() {
    console.log('   [Item.Cnst]');
  }

  ngOnInit() {
    console.log('   [Item.Init]');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('   [Item.Chng]');
  }

  ngDoCheck() {
    console.log('   [Item.Chck]');
  }

  ngAfterContentChecked() {
    console.log('   [Item.Acch]');
  }

  ngAfterContentInit() {
    console.log('   [Item.Acin]');
  }

  ngAfterViewChecked() {
    console.log('   [Item.Avch]');
  }

  ngAfterViewInit() {
    console.log('   [Item.Avin]');
  }

  ngOnDestroy() {
    console.log('   [Item.Dstr]');
  }
}
