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
  inputValue = 'Lemmy';
  progressSpinnerMode = 'determinate';
  selectEnabled = false;
  selectOption = 1;
  
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

  changeCbx(event) {
    this.selectEnabled = event.checked;
  }

  changeSelect(event) {
    this.selectOption = event.value;
  }
}
