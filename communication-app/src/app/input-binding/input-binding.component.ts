import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'communication-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input('first-name') firstName: string;
  @Input('last-name') lastName: string;

  constructor() { }

  ngOnInit() {
  }

}
