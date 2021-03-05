import { Injectable } from '@angular/core';
import { ModuleOneModule } from '../module-one/module-one.module';
@Injectable({
  providedIn: ModuleOneModule
})
export class ServiceOne {

  public numberValue: number;

  constructor() {
    this.numberValue = Math.round(Math.random() * 1000);
    console.log(`[ServiceOne] Constructor [${this.numberValue}]`);
  }
}
