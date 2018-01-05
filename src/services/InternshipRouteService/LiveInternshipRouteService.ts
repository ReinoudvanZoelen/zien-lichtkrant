import {Injectable} from '@angular/core';
import {IInternshipRouteService} from './IInternshipRouteService';
import {folder, host} from '../../../global';
import {HttpClientService} from '../HttpClientService';
import {InternshipRoute} from '../../models/internshipRoute';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';


@Injectable()
export class LiveInternshipRouteService implements IInternshipRouteService {

  private Url = host + folder + 'internshipRoute/';

  constructor(private http: HttpClientService) {

  }

  post(object: InternshipRoute) {
    return this.http.post(this.Url, object);
  }

  put(object: InternshipRoute) {
    return this.http.put(this.Url + object);
  }

  get(id: number): Observable<InternshipRoute> {
    return Observable.from(this.http.get(this.Url + id).map((res) => res.json()));
  }

  getAll(): Observable<InternshipRoute[]> {
    return Observable.from(this.http.get(this.Url + 'all').map((res) => res.json()));
  }
}
