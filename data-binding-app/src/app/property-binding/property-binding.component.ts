import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  btn1Color = 'primary';
  btn2Disabled = false;
  btnColors = ['primary', 'accent', 'warning', ''];
  colorIndex = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.colorIndex = (this.colorIndex + 1) % this.btnColors.length;
    }, 500);
  }

}
