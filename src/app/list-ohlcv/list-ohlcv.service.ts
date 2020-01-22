import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { environment } from "../../environments/environment";

@Injectable()
export class ListOhlcvService {
  api_url = environment.api_url;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  getOhlcv(symbol: String): Observable<any> {
    return this.http.post<any>(this.api_url + 'list-ohlcv', { symbol }, this.httpOptions);
  }
}
