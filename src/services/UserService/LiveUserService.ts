import {Injectable} from '@angular/core';
import {IUserService} from './IUserService';
import {folder, host} from '../../../global';
import {HttpClientService} from '../HttpClientService';
import {Observable} from 'rxjs/Observable';
import {User} from '../../models/user';
import 'rxjs/add/observable/from';

@Injectable()
export class LiveUserService implements IUserService {

  private Url = host + folder + 'user/';

  constructor(private http: HttpClientService) {
  }

  login(username: string, password: string): Observable<User> {
    return Observable.from(this.http.login(this.Url + username + password).map((res) => res.json()));
  }

  post(object: User) {
    return this.http.post(this.Url, object);
  }

  put(object: User) {
    return this.http.put(this.Url + object);
  }

  get(id: number): Observable<User> {
    return Observable.from(this.http.get(this.Url + id).map((res) => res.json()));
  }

  getAll(): Observable<User[]> {
    return Observable.from(this.http.get(this.Url + 'all').map((res) => res.json()));
  }


}
