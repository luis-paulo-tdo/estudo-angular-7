import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  btnCountName = 'Count Button:';
  btnCountTitle = this.btnCountName;
  btnCountValue = 0;
  btnsEnable = true;
  progressSpinnerMode = 'determinate';
  
  constructor() { }

  ngOnInit() {
  }

  clickCountBtn() {
    this.btnCountValue++;
    this.btnCountTitle = `${this.btnCountName}: ${this.btnCountValue}`; 
  }

  clickDisableBtn() {
    this.btnsEnable = false;
    this.progressSpinnerMode = 'indeterminate';
    setTimeout(() => {
      this.btnsEnable = true;
      this.progressSpinnerMode = 'determinate';
    }, 3000);
  }
}
