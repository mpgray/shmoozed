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

  public getBuyerItems() {
    const apiLocation = this.baseUrl + 'item/buyer/2';
    return this.http.get<BuyerItem[]>(apiLocation);
  }
}
