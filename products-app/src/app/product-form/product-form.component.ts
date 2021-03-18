import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../models/department';
import { ProductService } from '../product.service';

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
  departments: Department[];

  constructor(
    private departmentService: DepartmentService,
    private productService: ProductService) { }

  ngOnInit() {
    this.departments = this.departmentService.get();
  }

  save() {
    this.productService.add({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    });
    this.clear();
  }

  clear() {
    this.name = '';
    this.price = 0;
    this.description = '';
    this.department = null;
  }
}
