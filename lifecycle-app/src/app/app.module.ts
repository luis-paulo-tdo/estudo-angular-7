import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MainLifecycleComponent } from './main-lifecycle/main-lifecycle.component';
import { LifecycleChildComponent } from './main-lifecycle/lifecycle-child/lifecycle-child.component';
import { ChildItemComponent } from './main-lifecycle/lifecycle-child/child-item/child-item.component';
import { CheckComponent } from './check/check.component';
import { CheckItemComponent } from './check/check-item/check-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLifecycleComponent,
    LifecycleChildComponent,
    ChildItemComponent,
    CheckComponent,
    CheckItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
