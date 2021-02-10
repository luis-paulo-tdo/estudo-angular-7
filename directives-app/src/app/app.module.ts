import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatCardModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { SubNgIfComponent } from './ng-if/sub-ng-if/sub-ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    SubNgIfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
