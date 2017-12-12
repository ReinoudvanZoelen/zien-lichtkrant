import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-detailed-info',
  templateUrl: './map-detailed-info.component.html',
  styleUrls: ['./map-detailed-info.component.css']
})
export class MapDetailedInfoComponent implements OnInit {
  @Input() institutionId: number;

  constructor() {
  }

  ngOnInit() {
  }

}
