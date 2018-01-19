import {Institution} from '../../models/institution';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-marker-institution',
  templateUrl: './map-marker-institution.component.html',
  styleUrls: ['./map-marker-institution.component.css']
})
export class MapMarkerInstitutionComponent implements OnInit {

  @Input() institution: Institution;

  qrurl: String;

  constructor() {
  }

  ngOnInit() {
    this.qrurl = 'https://www.fontys-project.nl:8080/zien-forum/institution/' + this.institution.id;
  }

}
