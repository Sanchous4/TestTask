import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  private url = 'http://syancheg.xyz/api/filter';

  constructor(private httpClient: HttpClient) {}

  getFeatures() {
    return this.httpClient.get(this.url);
  }
}
