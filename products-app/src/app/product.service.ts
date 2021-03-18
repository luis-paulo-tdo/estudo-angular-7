import { Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private nextId: number;
  private dataFromServer: any[] = [
    { id: 1, name: 'Laptop', departmentId: 4, price: 3000, description: 'Laptop for work.' },
    { id: 2, name: 'Shirt', departmentId: 1, price: 10, description: 'Shirt for parties.' },
    { id: 3, name: 'Polo', departmentId: 1, price: 50, description: 'Polo for work.' },
    { id: 4, name: 'Mouse', departmentId: 3, price: 40, description: 'Mouse for computer/laptop.' },
    { id: 5, name: 'The Power Of Habit', departmentId: 2, price: 32, description: 'A book about habits.' },
    { id: 6, name: 'Steve Jobs', departmentId: 2, price: 35, description: 'Steve Jobs biography.' },
    { id: 7, name: 'Keyboard', departmentId: 3, price: 45, description: 'Keyboard for computer/laptop.' },
    { id: 8, name: 'Headphone', departmentId: 3, price: 60, description: 'Bluetooth headphone.' },
  ];
  private products: Product[] = [];

  constructor(private departmentService: DepartmentService) {
    for (let product of this.dataFromServer) {
      this.products.push({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        department: this.departmentService.getById(product.id)
      });
      this.nextId = product.id + 1;
    }
  }

  get(): Product[] {
    return this.products;
  }

  add(product: Product) {
    this.products.push({ ...product, id: this.nextId + 1 });
  }
}
