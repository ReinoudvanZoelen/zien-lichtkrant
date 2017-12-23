import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';

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

  markers: MyMarker[] = [
    {
      // Amsterdam 52.376074, 4.906032
      title: 'Damsko',
      lat: 52.376074,
      lng: 4.906032,
      color: 'Red',
      draggable: true,
      isOpen: false
    },
    {
      // Rotterdam 51.917726, 4.488339
      title: 'Roffa',
      lat: 51.917726,
      lng: 4.488339,
      color: 'Blue',
      draggable: false,
      isOpen: false
    },
    {
      // Tilburg 51.560120, 5.083536
      title: 'Tilbirg',
      lat: 51.560120,
      lng: 5.083536,
      color: 'Green',
      draggable: true,
      isOpen: false
    }
  ];

  openedMarkerIndex: number;
  openedMarker: MyMarker;

  constructor() {
  }

  ngOnInit() {
    this.loopThroughPins(5000);
  }

  loopThroughPins(intervalInMillis: number) {
    console.log('Starting timer');

    Observable.interval(intervalInMillis)
      .takeWhile(() => true)
      .subscribe(i => {
        console.log('Looped ' + i + ' times.');
        this.openNextPin();
      });
  }

  openNextPin() {
    for (const index in this.markers) {
      if (typeof this.markers[index] !== 'undefined' && this.markers[index] !== null) {
        this.markers[index].isOpen = false;
        console.log(index + ' value ' + JSON.stringify(this.markers[index]));
      }
    }
  }
}

// just an interface for type safety.
interface MyMarker {
  title: string;
  lat: number;
  lng: number;
  color: string;
  draggable: boolean;
  isOpen: boolean;
}
