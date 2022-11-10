import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { CardsModule } from './carts/carts.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';


@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    NbMenuModule, 
    ThemeModule,
    CardsModule,
    HomeModule,
    ProductsModule
  ],
  declarations: [
    UiComponent
  ]
})
export class UiModule { }
