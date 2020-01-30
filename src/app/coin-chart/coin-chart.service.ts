import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";

@Injectable()
export class CoinChartService {
  api_url = environment.api_url;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  getChartOhlcv(symbol: String): Observable<any> {
    return this.http.get<any>(
      this.api_url + "chart/" + symbol,
      this.httpOptions
    );
  }
}
