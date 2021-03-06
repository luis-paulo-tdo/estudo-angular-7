import { Injectable } from '@angular/core';
import { Department } from './models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private nextId: number = 5;
  private departments: Department[] = [
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Books'},
    { id: 3, name: 'Electronics'},
    { id: 4, name: 'Computers'}
  ];

  constructor() { }

  get(): Department[] {
    return this.departments;
  }

  getById(id: number): Department {
    return this.departments.find(department => department.id === id);
  }

  add(department: Department) {
    this.departments.push({ id: this.nextId++, ...department });
  }
}
