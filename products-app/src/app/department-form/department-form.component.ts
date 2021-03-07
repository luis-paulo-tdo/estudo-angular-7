import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'products-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  name: string;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
  }

  save() {
    this.departmentService.add({ name: this.name });
    this.clear();
  }

  clear() {
    this.name = '';
  }
}
