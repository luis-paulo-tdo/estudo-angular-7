import { AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lifecycle-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnChanges, OnInit, AfterContentInit {

  @Input() name: string;

  constructor() {
    console.log('[Item.Cons] Name:', this.name);
  }

  ngOnInit() {
    console.log('[Item.Init] Name:', this.name);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[Item.Chng] Name:', this.name);
  }

  ngAfterContentInit() {
    console.log('[Item.Acin] Name:', this.name);
  }
}
