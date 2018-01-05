import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Internship} from '../../models/internship';
import {Institution} from '../../models/institution';

import {LiveInternshipService} from '../../services/InternshipService/LiveInternshipService';
import {LiveInstitutionService} from '../../services/InstitutionService/LiveInstitutionService';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../../../node_modules/snazzy-info-window/dist/snazzy-info-window.scss']
})
export class MapComponent implements OnInit {
  // Mapinstellingen
  zoom = 7;
  pinPopupHeight = 600;
  pinPopupWidth = 1400;
  centerPositionLat = 52.364200;
  centerPositionLng = 5.206241;

  // region
  // markers: MyMarker[] = [
  //   {
  //     title: 'Amsterdam',
  //     lat: 52.370216,
  //     lng: 4.895168,
  //     isOpen: true
  //   },
  //   {
  //     title: 'Rotterdan',
  //     lat: 51.924420,
  //     lng: 4.477733,
  //     isOpen: false
  //   },
  //   {
  //     title: 'Tilburg',
  //     lat: 51.585253,
  //     lng: 5.056375,
  //     isOpen: false
  //   },
  //   {
  //     title: 'London',
  //     lat: 51.507351,
  //     lng: -0.127758,
  //     isOpen: false
  //   },
  //   {
  //     title: 'Shenzhen',
  //     lat: 22.543096,
  //     lng: 114.057865,
  //     isOpen: false
  //   },
  //   {
  //     title: 'Dubai',
  //     lat: 25.204849,
  //     lng: 55.270783,
  //     isOpen: false
  //   },
  //   {
  //     title: 'Washington DC',
  //     lat: 38.907192,
  //     lng: -77.036871,
  //     isOpen: false
  //   },
  //   {
  //     title: 'Boston',
  //     lat: 42.360082,
  //     lng: -71.058880,
  //     isOpen: false
  //   },
  //   {
  //     title: 'Vancouver',
  //     lat: 49.282729,
  //     lng: -123.120738,
  //     isOpen: false
  //   }
  // ];

  // endregion

  markers: MyMarker[] = [];

  internships: Internship[] = [];
  institutions: Institution[] = [];

  constructor(private internshipService: LiveInternshipService,
              private institutionService: LiveInstitutionService) {
  }

  ngOnInit() {
    this.internshipService.getAll().subscribe(res => {
      this.internships = res;
      console.log(this.internships);
      console.log('Found ' + this.internships.length + ' internships.');
      for (const entry of this.internships) {
        const marker: MyMarker = {
          content: entry,
          isInternship: true,
          isOpen: false
        };
        this.markers.push(marker);
      }
    });
    this.institutionService.getAll().subscribe(res => {
      this.institutions = res;
      console.log(this.institutions);
      console.log('Found ' + this.institutions.length + ' institutions.');
      for (const entry of this.institutions) {
        const internship: Internship = new Internship(null, null, null, null, null, null,
          null, null, null, null, null, null, null,
          entry, null, null);
        const marker: MyMarker = {
          content: internship,
          isInternship: false,
          isOpen: false
        };
        this.markers.push(marker);
      }
    });
    this.loopThroughPins(1000);
  }

  private loopThroughPins(intervalInMillis: number) {
    Observable.interval(intervalInMillis)
      .takeWhile(() => true)
      .subscribe(i => {
        const openMarkerIndex = this.getOpenMarker();
        this.openNextMarker(openMarkerIndex);
        this.repositionMap(this.getOpenMarker());
      });
  }

  private getOpenMarker() {
    let openmarkerindex = 0;

    this.markers.forEach((item, index) => {
      if (item.isOpen) {
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

    return (this.markers[openMarkerIndex].isOpen === false
      && this.markers[nextmarkerindex].isOpen === true);
  }

  private repositionMap(markerIndex: number) {
    this.centerPositionLat = this.markers[markerIndex].content.institution.location.latitude;
    this.centerPositionLng = this.markers[markerIndex].content.institution.location.longitude;
  }
}

// just an interface for type safety.
interface MyMarker {
  content: Internship;
  isInternship: boolean;
  isOpen: boolean;
}
