  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ModuleOneModule } from './module-one/module-one.module';
import { ModuleTwoModule } from './module-two/module-two.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ModuleOneModule,
    ModuleTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
