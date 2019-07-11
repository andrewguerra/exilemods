import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemselect',
  templateUrl: './itemselect.component.html',
  styleUrls: ['./itemselect.component.scss']
})
export class ItemselectComponent implements OnInit {
  @Input() itemSelectLabel;
  @Input() itemSelectOptions;

  ngOnInit() {
  }

}
