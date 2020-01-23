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
    loadChildren: "./list-coin/list-coin.module#ListCoinModule"
  },
  {
    path: "ohlcv",
    loadChildren: "./list-ohlcv/list-ohlcv.module#ListOhlcvModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
