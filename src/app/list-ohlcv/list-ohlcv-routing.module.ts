import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListOhlcvComponent } from "./list-ohlcv.component";

const routes: Routes = [
  {
    path: ":symbol",
    component: ListOhlcvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOhlcvRoutingModule {}
