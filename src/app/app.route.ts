import {RouterModule, Routes} from '@angular/router';
import {LichtkrantComponent} from './lichtkrant/lichtkrant.component';
import {BlogComponent} from './blog/blog.component';
import {MapComponent} from './map/map.component';

const APP_ROUTES: Routes = [
  {path: '', component: LichtkrantComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'map', component: MapComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
