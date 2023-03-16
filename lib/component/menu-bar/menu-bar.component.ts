import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-menu-bar',
  templateUrl: './menu-bar.component.html',
  host: {
    '[class.menu_bar]': 'true'
  }
})
export class MenuBarComponent implements OnInit {
  menus: MenuItem[] = [];
  constructor(private elementRef: ElementRef<HTMLDivElement>) {}

  ngOnInit(): void {}

  onMousedown() {}
}

export interface MenuItem {
  title: string;
}
