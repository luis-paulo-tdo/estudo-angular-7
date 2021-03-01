import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressBarModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './input-binding/artist/artist.component';
import { ArtistsComponent } from './artists/artists.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { EventComponent } from './event/event.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ItemArtistComponent } from './artists/item-artist/item-artist.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { TimerComponent } from './parent-child/timer/timer.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { NameChangesComponent } from './on-changes/name-changes/name-changes.component';
import { InterceptingComponent } from './intercepting/intercepting.component';
import { NameComponent } from './intercepting/name/name.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistsComponent,
    ChildItemComponent,
    EventComponent,
    InputBindingComponent,
    ItemArtistComponent,
    ParentChildComponent,
    TimerComponent,
    OnChangesComponent,
    NameChangesComponent,
    InterceptingComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
