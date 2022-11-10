import { Component, OnInit } from "@angular/core";

import { MENU_ITEMS } from "./ui-menu";

@Component({
  selector: "ngx-ui",
  styleUrls: ["./ui.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class UiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menu = MENU_ITEMS;
}
