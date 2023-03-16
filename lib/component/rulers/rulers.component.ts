import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-rulers',
  templateUrl: './rulers.component.html',
  host: {
    '[class.rulers]': 'true'
  }
})
export class RulersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
