import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  artists = [
    { name: 'Lemmy', band: 'Motörhead', lastLogin: new Date('2/13/2021') },
    { name: 'Phil', band: 'Motörhead', lastLogin: new Date('2/9/2021') },
    { name: 'Rob', band: 'Judas Priest', lastLogin: new Date('2/3/2021') },
    { name: 'Glenn', band: 'Judas Priest', lastLogin: new Date('1/30/2021') }
  ];

  constructor() { }

  ngOnInit() {
  }

}
