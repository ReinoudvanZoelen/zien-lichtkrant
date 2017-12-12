import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../../../node_modules/snazzy-info-window/dist/snazzy-info-window.scss']
})
export class MapComponent implements OnInit {
  // Mapsettings
  zoom = 8;
  pinPopupHeight = 600;
  pinPopupWidth = 1400;

  // Coordinates van Almere: 52.364200, 5.206241
  centerPositionLat = 52.364200;
  centerPositionLng = 5.206241;

  markers: Marker[] = [
    {
      // Amsterdam 52.376074, 4.906032
      lat: 52.376074,
      lng: 4.906032,
      color: 'Red',
      draggable: true
    },
    {
      // Rotterdam 51.917726, 4.488339
      lat: 51.917726,
      lng: 4.488339,
      color: 'Blue',
      draggable: false
    },
    {
      // Tilburg 51.560120, 5.083536
      lat: 51.560120,
      lng: 5.083536,
      color: 'Green',
      draggable: true
    }
  ];

  constructor() {

  }

  ngOnInit() {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  color: string;
  draggable: boolean;
}
