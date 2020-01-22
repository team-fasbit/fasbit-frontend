import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ListOhlcvService } from "./list-ohlcv.service";

@Component({
  selector: "app-list-ohlcv",
  templateUrl: "./list-ohlcv.component.html",
  styles: []
})
export class ListOhlcvComponent implements OnInit {
  symbol: String;
  ohlcvs: any[];
  ohlcvTable: any;

  constructor(
    private route: ActivatedRoute,
    private listOhlcvService: ListOhlcvService
  ) {}

  ngOnInit() {
    this.symbol = this.route.snapshot.params.symbol;
    this.listOhlcvService.getOhlcv(this.symbol).subscribe(res => {
      this.ohlcvs = res;
    });
  }
}
