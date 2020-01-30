import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { CoinChartRoutingModule } from "./coin-chart-routing.module";
import { CoinChartComponent } from "./coin-chart.component";
import { CoinChartService } from "./coin-chart.service";

@NgModule({
  providers: [CoinChartService],
  imports: [CommonModule, CoinChartRoutingModule, HttpClientModule],
  declarations: [CoinChartComponent]
})
export class CoinChartModule {}
