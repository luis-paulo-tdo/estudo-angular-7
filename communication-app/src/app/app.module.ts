import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './input-binding/artist/artist.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { EventComponent } from './event/event.component';
import { InputBindingComponent } from './input-binding/input-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ChildItemComponent,
    EventComponent,
    InputBindingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
