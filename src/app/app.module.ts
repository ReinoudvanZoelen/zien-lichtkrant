// Angular
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';

// Maps
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';

// Routing
import {routing} from './app.route';

// Modules
import {LichtkrantComponent} from './lichtkrant/lichtkrant.component';
import {BlogComponent} from './blog/blog.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    LichtkrantComponent,
    BlogComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyC1rU1OZBb15A5Y1mn3Pdl-GqQ9YaFjY2o'}),
    AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
