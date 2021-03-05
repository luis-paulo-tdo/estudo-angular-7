import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentFourComponent } from './component-four/component-four.component';

@NgModule({
  declarations: [ComponentThreeComponent, ComponentFourComponent],
  exports: [ComponentThreeComponent, ComponentFourComponent],
  imports: [
    CommonModule
  ]
})
export class ModuleTwoModule { }
