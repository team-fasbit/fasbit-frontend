import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "ohlcv/BTC",
    pathMatch: "full"
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
