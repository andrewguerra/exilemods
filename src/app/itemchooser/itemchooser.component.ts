import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemchooser',
  templateUrl: './itemchooser.component.html',
  styleUrls: ['./itemchooser.component.scss']
})
export class ItemchooserComponent implements OnInit {
  itemTypes = ['Body', 'Ring', 'Helm', 'Sword'];
  itemBases = ['Any', 'Ruby', 'Topaz'];

  ngOnInit() {
  }

}
