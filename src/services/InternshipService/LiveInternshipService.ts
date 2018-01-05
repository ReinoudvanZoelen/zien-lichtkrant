import {Injectable} from '@angular/core';
import {IInternshipService} from './IInternshipService';
import {Internship} from '../../models/internship';
import {Observable} from 'rxjs/Observable';
import {folder, host} from '../../../global';
import {HttpClientService} from '../HttpClientService';
import 'rxjs/add/observable/from';

@Injectable()
export class LiveInternshipService implements IInternshipService {

  post(object: Internship) {
    return this.http.post(this.Url, object);
  }

  put(object: Internship) {
    return this.http.put(this.Url + object);
  }

  get(id: number): Observable<Internship> {
    return Observable.from(this.http.get(this.Url + id).map((res) => res.json()));
  }

  private Url = host + folder + 'internship/';

  constructor(private http: HttpClientService) {

  }

  getAll(): Observable<Internship[]> {
    return Observable.from(this.http.get(this.Url + 'all').map((res) => res.json()));
  }
}
