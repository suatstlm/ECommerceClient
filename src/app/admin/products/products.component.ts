import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType } from '../../@core/services/notification/alertify.service';

@Component({
  selector: 'ngx-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.alertify.message("Products open", {
      messageType: MessageType.Success
    })
  }

}
