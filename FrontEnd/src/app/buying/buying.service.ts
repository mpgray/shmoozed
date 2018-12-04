import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BuyerItem } from '../models/buyer-item';

@Injectable({
  providedIn: 'root'
})
export class BuyingService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getBuyerItems(buyerId: number) {
    const apiLocation = this.baseUrl + '/item/buyer/' + buyerId + '/details';
    return this.http.get<BuyerItem[]>(apiLocation);
  }

  public deleteItem(buyerItemId: number) {
    const apiLocation = environment.baseUrl + 'item/buyer/' + buyerItemId;
    return this.http.delete(apiLocation);
  }
}
