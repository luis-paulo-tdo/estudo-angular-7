import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonEnabled: boolean = true;
  selectEnabled: boolean = false;

  i: number = 0;
  selectedOption: number = 1;

  buttonName: string = 'My Button';
  spinnerMode: string = 'determinate';
  
  constructor() { }

  ngOnInit() {
  }

  check(event) {
    this.selectEnabled = event.checked;
  }

  disable() {
    this.buttonEnabled = false;
    this.spinnerMode = 'indeterminate';
    setTimeout(() => {
      this.buttonEnabled = true;
      this.spinnerMode = 'determinate';
    }, 3000);
  }

  increment() {
    this.i++;
    this.buttonName = `Fui clicado ${this.i} vezes`;
  }

  save() {
    console.log('Save!');
  }

  selectionChange(event) {
    this.selectedOption = event.value;
  }
}
