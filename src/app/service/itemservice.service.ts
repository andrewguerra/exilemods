import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  // itemGroupUrl = 'http://localhost:5000/';
  itemGroupUrl = environment.apiUrl + '/assets/itemgroups.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.itemGroupUrl);
  }

  itemDataUrl = environment.apiUrl + '/assets/itemdata.json';

  getItemData() {
    return this.http.get(this.itemDataUrl);
  }
}
