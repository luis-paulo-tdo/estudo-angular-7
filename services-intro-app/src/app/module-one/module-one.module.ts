import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ServiceOne } from './service-one.service';

@NgModule({
  declarations: [
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  exports: [
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ServiceOne
  ]
})
export class ModuleOneModule { }
