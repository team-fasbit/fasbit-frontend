import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoinChartService } from "./coin-chart.service";

@Component({
  selector: "app-list-ohlcv",
  templateUrl: "./coin-chart.component.html",
  styles: []
})
export class CoinChartComponent implements OnInit {
  symbol: String;
  ohlcvs: any[];
  ohlcvTable: any;

  constructor(
    private route: ActivatedRoute,
    private coinChartService: CoinChartService
  ) {}

  ngOnInit() {
    this.symbol = this.route.snapshot.params.symbol;
    this.coinChartService.getChartOhlcv(this.symbol).subscribe(res => {
      this.ohlcvs = res.map(x => [
        new Date(x.entry_datetime).getTime(),
        x.open,
        x.high,
        x.low,
        x.close,
        x.market_cap
      ]);
      console.log(this.ohlcvs);
    });
  }
}
