import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import {Internship} from '../../models/internship';
import {Institution} from '../../models/institution';
import {Location} from '../../models/location';
import {LiveInternshipService} from '../../services/InternshipService/LiveInternshipService';
import {LiveInstitutionService} from '../../services/InstitutionService/LiveInstitutionService';
import {GMapsService} from '../../services/GMapsService';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../../../node_modules/snazzy-info-window/dist/snazzy-info-window.scss']
})
export class MapComponent implements OnInit {
  // Mapinstellingen
  zoom = 6;
  pinPopupHeight = 800;
  pinPopupWidth = 1200;
  centerPositionLat = 52.364200;
  centerPositionLng = 5.206241;

  markers: MyMarker[] = [];

  constructor(private internshipService: LiveInternshipService,
              private institutionService: LiveInstitutionService,
              private mapsService: GMapsService) {
  }

  ngOnInit() {
    this.fetchMarkers(true, true);

    this.loopThroughPins(12000);
  }

  private fetchMarkers(loadInternships: boolean, loadInstitutions: boolean) {
    // Empty the array
    // Source: https://stackoverflow.com/questions/29803045/how-to-clear-an-angular-array
    this.markers.length = 0;

    if (loadInternships) {
      this.internshipService.getAll().subscribe(res => {
          for (const entry of res) {
            if (entry.blog.accepted) {
              const marker: MyMarker = <MyMarker>{
                internship: entry,
                institution: entry.institution,
                location: entry.institution.location,
                isInternship: true,
                isOpen: false
              };

              const address = entry.institution.street + ' ' + entry.institution.houseNumber + ', ' +
                entry.institution.zipCode + ' ' + entry.institution.city;

              this.mapsService.getLatLan(address).subscribe(
                result => {
                  marker.location.latitude = result.lat();
                  marker.location.longitude = result.lng();

                  this.markers.push(marker);
                }
              );
            }
          }
        }, error => console.log(error),
        () => {
          console.log('Done fetching internships, they have been added to MyMarkers');
        });
    }

    if (loadInstitutions) {
      this.institutionService.getAll().subscribe(res => {
          for (const entry of res) {
            const marker: MyMarker = <MyMarker>{
              internship: null,
              institution: entry,
              location: entry.location,
              isInternship: false,
              isOpen: false
            };

            const address = entry.street + ' ' + entry.houseNumber + ', ' +
              entry.zipCode + ' ' + entry.city;

            this.mapsService.getLatLan(address)
              .subscribe(
                result => {
                  marker.location.latitude = result.lat();
                  marker.location.longitude = result.lng();

                  this.markers.push(marker);
                });
          }
        }, error => console.log(error),
        () => {
          console.log('Done fetching institutions, they have been added to MyMarkers');
        });
    }

  }

  private loopThroughPins(intervalInMillis: number) {
    Observable.interval(intervalInMillis)
      .takeWhile(() => true)
      .subscribe(() => {
        if (this.markers.length > 0) {
          const openMarkerIndex = this.getOpenMarker();
          this.openNextMarker(openMarkerIndex, true);
        }
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

  private openNextMarker(openMarkerIndex: number, transition: boolean) {
    let nextmarkerindex = 0;

    if (openMarkerIndex === this.markers.length - 1) {
      nextmarkerindex = 0;
    } else {
      nextmarkerindex = openMarkerIndex;
      nextmarkerindex++;
    }


    if (transition) {
      setTimeout(() => {
        this.markers[openMarkerIndex].isOpen = false;
      }, 0);
      setTimeout(() => {
        this.repositionMap(nextmarkerindex);
      }, 1000);
      setTimeout(() => {
        this.markers[nextmarkerindex].isOpen = true;
      }, 2000);
    } else {
      this.markers[openMarkerIndex].isOpen = false;
      this.repositionMap(nextmarkerindex);
      this.markers[nextmarkerindex].isOpen = true;
    }

    if ((openMarkerIndex + 1) === this.markers.length) {
      setTimeout(() => {
        this.fetchMarkers(true, true);
      }, 10000);
    }


    return (this.markers[openMarkerIndex].isOpen === false
      && this.markers[nextmarkerindex].isOpen === true);
  }

  private repositionMap(markerIndex: number) {
    this.centerPositionLat = this.markers[markerIndex].location.latitude;
    this.centerPositionLng = this.markers[markerIndex].location.longitude;
  }
}

// just an interface for type safety.
interface MyMarker {
  internship: Internship;
  institution: Institution;
  location: Location;
  isInternship: boolean;
  isOpen: boolean;
}
