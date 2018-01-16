import {Component, Input, OnInit} from '@angular/core';
import {Internship} from '../../models/internship';

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
    this.qrurl = 'https://www.fontys-project.nl:8080/zien-forum/blog/' + this.internship.blog.id;
  }

}
