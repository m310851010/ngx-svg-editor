import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-tools-bottom',
  templateUrl: './tools-bottom.component.html',
  host: {
    '[class.tools_bottom]': 'true'
  }
})
export class ToolsBottomComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
