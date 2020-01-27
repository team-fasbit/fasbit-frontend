import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ListOhlcvHistoryRoutingModule } from "./list-ohlcv-history-routing.module";
import { ListOhlcvHistoryComponent } from "./list-ohlcv-history.component";
import { ListOhlcvHistoryService } from "./list-ohlcv-history.service";

@NgModule({
  providers: [ListOhlcvHistoryService],
  imports: [CommonModule, ListOhlcvHistoryRoutingModule, HttpClientModule],
  declarations: [ListOhlcvHistoryComponent]
})
export class ListOhlcvHistoryModule {}
