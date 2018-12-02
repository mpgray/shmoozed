import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SellerInsightDatapoint } from 'src/app/models/seller-insight-datapoint';

@Injectable({
  providedIn: 'root'
})
export class SellerInsightsService {

  constructor(private http: HttpClient) { }

  getSellerInsightData(itemId: number) {
    const apiLocation = environment.baseUrl + 'sellerinsight/' + itemId;
    return this.http.get<SellerInsightDatapoint[]>(apiLocation);
  }
}
