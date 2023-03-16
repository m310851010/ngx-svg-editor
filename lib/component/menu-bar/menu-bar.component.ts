// @ts-ignore

import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { delay, fromEvent } from 'rxjs';

import { isMac } from '@svgedit/svgcanvas/common/browser';

@Component({
  selector: 'ngx-menu-bar',
  templateUrl: './menu-bar.component.html',
  host: {
    '[class.menu_bar]': 'true'
  }
})
export class MenuBarComponent implements OnInit {
  modKey = isMac() ? '⌘' : 'Ctrl+';
  hoverName?: MenuName;
  private _active = false;
  @HostBinding('class.active')
  get active() {
    return this._active;
  }
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  ngOnInit(): void {
    fromEvent(this.doc, 'mousedown').subscribe(() => (this._active = false));
  }

  onMousedown(evt: MouseEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this._active = true;
  }
}

export type MenuName = 'logo' | 'file' | 'edit' | 'object' | 'view';
