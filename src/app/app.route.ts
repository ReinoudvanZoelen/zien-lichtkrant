import {RouterModule, Routes} from '@angular/router';
import {LichtkrantComponent} from './lichtkrant/lichtkrant.component';
import {BlogComponent} from './blog/blog.component';


const APP_ROUTES: Routes = [
  {path: '', component: LichtkrantComponent},
  {path: 'blog', component: BlogComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
