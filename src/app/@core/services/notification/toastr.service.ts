import { Injectable } from "@angular/core";
import { NbGlobalPosition, NbToastrService } from "@nebular/theme";

@Injectable({
  providedIn: "root",
})
export class ToastrService {
  constructor(private toastr: NbToastrService) {}

  message(
    message: string,
    title: string,
    toastrOptions: Partial<ToastrOptions>
  ) {
    this.toastr[toastrOptions.messageType](message, title, {
      position: toastrOptions.position
    });
  }
}

export class ToastrOptions {
  messageType: ToastrMessageType;
  position: NbGlobalPosition;
}

export enum ToastrMessageType {
  Show = "show",
  Primary = "primary",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Danger = "danger",
}

// you heve to add to app.module.ts ToastrModule.forRoot()
