import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoinChartService } from "./coin-chart.service";
import * as Highcharts from "highcharts/highstock";

declare var require: any;
require("highcharts/modules/data")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);

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
        new Date(x.last_updated).getTime(),
        x.open,
        x.high,
        x.low,
        x.close,
        x.market_cap
      ]);
      Highcharts.stockChart("ohlcv-chart", {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: "Last 24 Hour Chart - OHLC"
        },
        series: [
          {
            type: "candlestick",
            name: this.symbol,
            data: this.ohlcvs,
            dataGrouping: {
              units: [["week", [1]]]
            }
          }
        ]
      }),
        console.log(this.ohlcvs);
    });
  }
}
