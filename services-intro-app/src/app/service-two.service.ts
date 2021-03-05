import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTwo {

  name = 'ServiceTwo';

  constructor() {
    console.log(`[${this.name}] Constructor`);
  }
}
