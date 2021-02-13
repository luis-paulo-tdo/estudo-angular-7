import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './input-binding/artist/artist.component';
import { ArtistsComponent } from './artists/artists.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { EventComponent } from './event/event.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ItemArtistComponent } from './artists/item-artist/item-artist.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistsComponent,
    ChildItemComponent,
    EventComponent,
    InputBindingComponent,
    ItemArtistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
