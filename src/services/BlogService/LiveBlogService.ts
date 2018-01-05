import {Injectable} from '@angular/core';
import {IBlogService} from './IBlogService';
import {Blog} from '../../models/blog';
import {Observable} from 'rxjs/Observable';
import {folder, host} from '../../../global';
import {HttpClientService} from '../HttpClientService';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

@Injectable()
export class LiveBlogService implements IBlogService {

  post(object: Blog) {
    return this.http.post(this.Url, object);
  }

  put(object: Blog) {
    return this.http.put(this.Url + object);
  }

  get(id: number): Observable<Blog> {
    return Observable.from(this.http.get(this.Url + id).map((res) => res.json()));
  }

  private Url = host + folder + 'blog/';

  constructor(private http: HttpClientService) {

  }

  getAll(): Observable<Blog[]> {
    return Observable.from(this.http.get(this.Url + 'all').map((res) => res.json()));
  }
}
