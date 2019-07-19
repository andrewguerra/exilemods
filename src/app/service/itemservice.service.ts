import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  // itemGroupUrl = 'http://localhost:5000/';
  itemGroupUrl = 'http://localhost:4200/assets/itemgroups.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.itemGroupUrl);
  }

  itemDataUrl = 'http://localhost:4200/assets/itemdata.json';

  getItemData() {
    return this.http.get(this.itemDataUrl);
  }
}
