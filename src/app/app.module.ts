// Angular
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';

// Routing
import {routing} from './app.route';

// Modules
import {LichtkrantComponent} from './lichtkrant/lichtkrant.component';
import {BlogComponent} from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LichtkrantComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
