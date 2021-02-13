import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'communication-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title: string;
  @Output() increment = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  btnClick(value: number) {
    this.increment.emit(value);
  }
}
