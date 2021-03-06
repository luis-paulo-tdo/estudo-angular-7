import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentFormComponent,
    ProductFormComponent,
    ProductTableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
