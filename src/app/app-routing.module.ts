import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "coins",
    pathMatch: "full"
  },
  {
    path: "coins",
    loadChildren: () =>
      import("./list-coin/list-coin.module").then(m => m.ListCoinModule)
  },
  {
    path: "ohlcv",
    loadChildren: () =>
      import("./list-ohlcv/list-ohlcv.module").then(m => m.ListOhlcvModule)
  },
  {
    path: "ohlcv-history",
    loadChildren: () =>
      import("./list-ohlcv-history/list-ohlcv-history.module").then(
        m => m.ListOhlcvHistoryModule
      )
  },
  {
    path: "chart",
    loadChildren: () =>
      import("./coin-chart/coin-chart.module").then(m => m.CoinChartModule)
  },
  {
    path: "**",
    redirectTo: "coins"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
