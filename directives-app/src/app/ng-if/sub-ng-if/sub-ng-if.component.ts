import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'directives-sub-ng-if',
  templateUrl: './sub-ng-if.component.html',
  styleUrls: ['./sub-ng-if.component.css']
})
export class SubNgIfComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('SubNgIfComponent constructed!');
  }

  ngOnInit() {
    console.log('SubNgIfComponent inited!');
  }

  ngOnDestroy() {
    console.log('SubNgIfComponent destroyed!');
  }
}
