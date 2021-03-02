import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit {

  @Input() age: number;
  @Input() band: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
