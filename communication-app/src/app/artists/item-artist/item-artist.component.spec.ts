import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemArtistComponent } from './item-artist.component';

describe('ItemArtistComponent', () => {
  let component: ItemArtistComponent;
  let fixture: ComponentFixture<ItemArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
