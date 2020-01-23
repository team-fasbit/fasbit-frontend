import { Component, OnInit } from "@angular/core";

import { ListCoinService } from "./list-coin.service";

@Component({
  selector: "app-list-coin",
  templateUrl: "./list-coin.component.html",
  styleUrls: []
})
export class ListCoinComponent implements OnInit {
  coins: any[];
  coinTable: any;

  constructor(private listCoinService: ListCoinService) {}

  ngOnInit() {
    this.listCoinService.getCoins().subscribe(res => {
      this.coins = res;
    });
  }
}
