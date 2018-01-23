import {Internship} from '../../models/internship';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-marker-internship',
  templateUrl: './map-marker-internship.component.html',
  styleUrls: ['./map-marker-internship.component.css']
})
export class MapMarkerInternshipComponent implements OnInit {

  @Input() internship: Internship;

  qrurl: String;

  constructor() {
  }

  ngOnInit() {
    this.qrurl = 'http://www.fontys-project.nl:8080/zien-forum/#/detail/' + this.internship.blog.id;
  }

}
