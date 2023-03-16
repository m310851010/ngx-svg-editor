import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-tools-left',
  templateUrl: './tools-left.component.html',
  host: {
    '[class.tools_left]': 'true'
  }
})
export class ToolsLeftComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
