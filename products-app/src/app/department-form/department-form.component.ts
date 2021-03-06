import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
  }

  save() {

  }

  clear() {
    
  }
}
