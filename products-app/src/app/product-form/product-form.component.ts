import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';

@Component({
  selector: 'products-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name: string;
  price: number;
  description: string;

  department: Department;
  departmentSelected: Department;
  departments: Department[];

  constructor() { }

  ngOnInit() {
  }  
}
