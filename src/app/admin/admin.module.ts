import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { NbMenuModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { ProductsModule } from "./products/products.module";
import { OrdersModule } from "./orders/orders.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { CustomersModule } from "./customers/customers.module";

@NgModule({
  imports: [
    CommonModule, 
    AdminRoutingModule, 
    NbMenuModule, 
    ThemeModule,
    ProductsModule,
    OrdersModule,
    DashboardModule,
    CustomersModule
  ],
  declarations: [
    AdminComponent
  ],
})
export class AdminModule {}
