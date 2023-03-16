import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-tools-panel',
  templateUrl: './tools-panel.component.html',
  host: {
    '[class.panels]': 'true'
  }
})
export class ToolsPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
