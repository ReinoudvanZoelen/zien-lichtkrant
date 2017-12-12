import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../../../node_modules/snazzy-info-window/dist/snazzy-info-window.scss']
})
export class MapComponent implements OnInit {
  lat = 51.773057;
  lng = 5.521951;

  constructor() {
  }

  ngOnInit() {
  }

}
