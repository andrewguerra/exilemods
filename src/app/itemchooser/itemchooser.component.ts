import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from '../service/itemservice.service';

@Component({
  selector: 'app-itemchooser',
  templateUrl: './itemchooser.component.html',
  styleUrls: ['./itemchooser.component.scss']
})
export class ItemchooserComponent implements OnInit {

  itemGroups: string[] = [];
  itemTypes: string[] = [];
  itemDetails: any;

  constructor(private itemService: ItemserviceService){
  }

  ngOnInit() {
    this.loadItemData();
  }

  loadItemData() {
    this.itemService.getData().subscribe(data => {
      console.log(data);
      this.parseItemGroupData(data);
    });
  }

  parseItemGroupData(data) {
    data['Item Group'].forEach(itemGroup => {
      this.itemGroups.push(itemGroup['Group Name']);

      this.parseItemTypeData(itemGroup["Types"]);
    });
  }

  parseItemTypeData(itemTypes) {
    itemTypes.forEach(itemType => {
      this.itemTypes.push(itemType);
    })
  }

  onClick() {
    this.itemService.getItemData().subscribe(item => {
      console.log(item);

      this.itemDetails = JSON.stringify(item);
    });
  }

}
