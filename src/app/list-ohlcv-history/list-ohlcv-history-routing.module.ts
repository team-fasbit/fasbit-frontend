import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListOhlcvHistoryComponent } from "./list-ohlcv-history.component";

const routes: Routes = [
  {
    path: ":symbol",
    component: ListOhlcvHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOhlcvHistoryRoutingModule {}
