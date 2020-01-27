import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ListOhlcvHistoryService } from "./list-ohlcv-history.service";

@Component({
  selector: "app-list-ohlcv-history",
  templateUrl: "./list-ohlcv-history.component.html",
  styles: []
})
export class ListOhlcvHistoryComponent implements OnInit {
  symbol: String;
  ohlcvs: any[];
  ohlcvTable: any;

  constructor(
    private route: ActivatedRoute,
    private listOhlcvHistoryService: ListOhlcvHistoryService
  ) {}

  ngOnInit() {
    this.symbol = this.route.snapshot.params.symbol;
    this.listOhlcvHistoryService.getOhlcvHistory(this.symbol).subscribe(res => {
      this.ohlcvs = res;
    });
  }
}
