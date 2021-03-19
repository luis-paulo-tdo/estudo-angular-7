import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'products-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  columns: string[] = ['id', 'name', 'department', 'price', 'description'];
  products: Product[];
  @ViewChild(MatTable) table: MatTable<any>; 

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.get();
    this.productService.onNewProduct.subscribe(product => {
      this.table.renderRows();
    });
  }
}
