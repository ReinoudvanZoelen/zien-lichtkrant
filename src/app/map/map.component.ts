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
      title: 'Amsterdam',
      lat: 52.370216,
      lng: 4.895168,
      isOpen: true
    },
    {
      title: 'Rotterdan',
      lat: 51.924420,
      lng: 4.477733,
      isOpen: false
    },
    {
      title: 'Tilburg',
      lat: 51.585253,
      lng: 5.056375,
      isOpen: false
    },
    {
      title: 'London',
      lat: 51.507351,
      lng: -0.127758,
      isOpen: false
    },
    {
      title: 'Shenzhen',
      lat: 22.543096,
      lng: 114.057865,
      isOpen: false
    },
    {
      title: 'Dubai',
      lat: 25.204849,
      lng: 55.270783,
      isOpen: false
    },
    {
      title: 'Washington DC',
      lat: 38.907192,
      lng: -77.036871,
      isOpen: false
    },
    {
      title: 'Boston',
      lat: 42.360082,
      lng: -71.058880,
      isOpen: false
    },
    {
      title: 'Vancouver',
      lat: 49.282729,
      lng: -123.120738,
      isOpen: false
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.loopThroughPins(5000);
  }

  private loopThroughPins(intervalInMillis: number) {
    Observable.interval(intervalInMillis)
      .takeWhile(() => true)
      .subscribe(i => {
        let openMarkerIndex = this.getOpenMarker();
        this.openNextMarker(openMarkerIndex);
        this.repositionMap(this.getOpenMarker());
      });
  }

  private getOpenMarker() {
    let openmarkerindex = 0;

    this.markers.forEach((MyMarker, index) => {
      if (MyMarker.isOpen) {
        openmarkerindex = index;
      }
    });

    return openmarkerindex;
  }

  private openNextMarker(openMarkerIndex: number) {
    let nextmarkerindex = 0;

    if (openMarkerIndex === this.markers.length - 1) {
      nextmarkerindex = 0;
    } else {
      nextmarkerindex = openMarkerIndex;
      nextmarkerindex++;
    }

    this.markers[openMarkerIndex].isOpen = false;
    this.markers[nextmarkerindex].isOpen = true;

    return (this.markers[openMarkerIndex].isOpen == false
      && this.markers[nextmarkerindex].isOpen == true);
  }

  private repositionMap(markerIndex: number) {
    this.centerPositionLat = this.markers[markerIndex].lat;
    this.centerPositionLng = this.markers[markerIndex].lng;
  }
}

// just an interface for type safety.
interface MyMarker {
  title: string;
  lat: number;
  lng: number;
  isOpen: boolean;
}
