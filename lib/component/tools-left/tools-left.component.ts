import { Component, ElementRef, OnInit } from '@angular/core';
import { SvgEditorComponent } from '../svg-editor.component';

@Component({
  selector: 'ngx-tools-left',
  templateUrl: './tools-left.component.html',
  host: {
    '[class.tools_left]': 'true'
  }
})
export class ToolsLeftComponent implements OnInit {
  constructor(private editor: SvgEditorComponent) {}

  ngOnInit(): void {
  }

  setMode(mode: string) {
    this.editor.canvas.setMode(mode);
  }
}
