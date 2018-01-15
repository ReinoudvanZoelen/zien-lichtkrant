// Angular
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';

// Maps
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {MapComponent} from './map/map.component';
import {MapMarkerInstitutionComponent} from './map-marker-institution/map-marker-institution.component';
import {MapMarkerInternshipComponent} from './map-marker-internship/map-marker-internship.component';

// Routing
import {routing} from './app.route';

// Modules
import {BlogComponent} from './blog/blog.component';
import {LichtkrantComponent} from './lichtkrant/lichtkrant.component';

// QR
import {QRCodeModule} from 'angular2-qrcode';

// Dataservice
import {HttpClientService} from '../services/HttpClientService';
import {LiveInstitutionService} from '../services/InstitutionService/LiveInstitutionService';
import {LiveInternshipRouteService} from '../services/InternshipRouteService/LiveInternshipRouteService';
import {LiveInternshipService} from '../services/InternshipService/LiveInternshipService';
import {LiveUserService} from '../services/UserService/LiveUserService';
import {LiveBlogService} from '../services/BlogService/LiveBlogService';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LichtkrantComponent,
    BlogComponent,
    MapComponent,
    MapMarkerInstitutionComponent,
    MapMarkerInternshipComponent
  ],
  imports: [
    QRCodeModule,
    BrowserModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyC1rU1OZBb15A5Y1mn3Pdl-GqQ9YaFjY2o'}),
    AgmSnazzyInfoWindowModule
  ],
  providers: [HttpClientService,
    LiveBlogService,
    LiveUserService,
    LiveInternshipService,
    LiveInternshipRouteService,
    LiveInstitutionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
