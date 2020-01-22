import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { ListOhlcvRoutingModule } from './list-ohlcv-routing.module';
import { ListOhlcvComponent } from './list-ohlcv.component';
import { ListOhlcvService } from './list-ohlcv.service';

@NgModule({
  providers: [
    ListOhlcvService
  ],
  imports: [
    CommonModule,
    ListOhlcvRoutingModule,
    HttpClientModule
  ],
  declarations: [ListOhlcvComponent]
})
export class ListOhlcvModule { }
