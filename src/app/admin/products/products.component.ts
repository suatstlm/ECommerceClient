import { Component, OnInit } from '@angular/core';
import { NbGlobalLogicalPosition } from '@nebular/theme';
import { ToastrService, ToastrMessageType} from '../../@core/services/notification/toastr.service';

@Component({
  selector: 'ngx-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.toastr.message("Products list","Products",{
      messageType: ToastrMessageType.Show,
      position: NbGlobalLogicalPosition.BOTTOM_END
    })
  }

}
