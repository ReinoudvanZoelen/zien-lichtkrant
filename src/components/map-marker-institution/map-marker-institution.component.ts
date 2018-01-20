import {Institution} from '../../models/institution';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-marker-institution',
  templateUrl: './map-marker-institution.component.html',
  styleUrls: ['./map-marker-institution.component.css']
})
export class MapMarkerInstitutionComponent implements OnInit {

  @Input() institution: Institution;

  constructor() {
  }

  ngOnInit() {
  }

}
