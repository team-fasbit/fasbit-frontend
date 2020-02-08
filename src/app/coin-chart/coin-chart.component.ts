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
        x.close
      ]);
      Highcharts.stockChart("ohlcv-chart", {
        chart: {
          height: 800
        },
        rangeSelector: {
          allButtonsEnabled: true,
          buttons: [{
            type: 'hour',
            count: 24,
            text: '24h'
          }, {
            type: 'day',
            count: 7,
            text: '7d'
          }, {
            type: 'day',
            count: 14,
            text: '14d'
          }, {
            type: 'day',
            count: 30,
            text: '30d'
          }, {
            type: 'day',
            count: 90,
            text: '90d'
          }],
          selected: 1
        },
        navigator: {
          series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
          }
        },
        title: {
          text: "Last 24 Hour Chart - OHLC"
        },
        series: [
          {
            type: "candlestick",
            name: this.symbol.toString(),
            data: this.ohlcvs
          }
        ],
        plotOptions: {
          candlestick: {
            color: '#c02a1d',
            upColor: '#27892f'
          }
        }
      });
    });
  }
}
