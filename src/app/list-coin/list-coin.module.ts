import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ListCoinRoutingModule } from "./list-coin-routing.module";
import { ListCoinComponent } from "./list-coin.component";
import { ListCoinService } from "./list-coin.service";

@NgModule({
  providers: [ListCoinService],
  imports: [CommonModule, ListCoinRoutingModule, HttpClientModule],
  declarations: [ListCoinComponent]
})
export class ListCoinModule {}
