import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonEnabled: boolean = true;
  buttonName: string = 'My Button';

  spinnerMode: string = 'determinate';
  i: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('Save!');
  }

  increment() {
    this.i++;
    this.buttonName = `Fui clicado ${this.i} vezes`;
  }

  disable() {
    this.buttonEnabled = false;
    this.spinnerMode = 'indeterminate';
    setTimeout(() => {
      this.buttonEnabled = true;
      this.spinnerMode = 'determinate';
    }, 3000);
  }
}
