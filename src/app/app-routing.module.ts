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
    loadChildren: () =>
      import("./list-ohlcv/list-ohlcv.module").then(mod => mod.ListOhlcvModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
