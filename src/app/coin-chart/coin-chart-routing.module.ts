import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CoinChartComponent } from "./coin-chart.component";

const routes: Routes = [
  {
    path: ":symbol",
    component: CoinChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoinChartRoutingModule {}
