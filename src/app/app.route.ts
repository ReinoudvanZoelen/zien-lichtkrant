import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from '../components/map/map.component';

const APP_ROUTES: Routes = [
  {path: '', component: MapComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
