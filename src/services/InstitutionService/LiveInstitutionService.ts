import {Injectable} from '@angular/core';
import {Institution} from '../../models/institution';
import {Observable} from 'rxjs/Observable';
import {HttpClientService} from '../HttpClientService';
import {folder, host} from '../../../global';
import 'rxjs/add/observable/from';
import {IGenericService} from '../IGenericService';

@Injectable()
export class LiveInstitutionService implements IGenericService<Institution> {

  private Url = host + folder + 'institution/';

  constructor(private http: HttpClientService) {

  }

  post(object: Institution) {
    return this.http.post(this.Url, object);
  }

  put(object: Institution) {
    return this.http.put(this.Url + object);
  }

  get(id: number): Observable<Institution> {
    return Observable.from(this.http.get(this.Url + id).map((res) => res.json()));
  }

  getAll(): Observable<Institution[]> {
    return Observable.from(this.http.get(this.Url + 'all').map((res) => res.json()));
  }
}
