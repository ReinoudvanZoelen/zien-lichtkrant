import {User} from '../../models/user';
import {Observable} from 'rxjs/Rx';
import {host, folder} from 'global';
import { HttpClientService } from "services/HttpClientService";
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { IUserService } from 'services/UserService/IUserService';
@Injectable()
export class LiveUserService implements IUserService {

  private Url = host + folder + 'user/';

  constructor(private http: HttpClientService) {
  }
    
    login(username: string, password: string): Observable<User> {
      return Observable.from(this.http.login(this.Url + username + password).map((res: Response) => res.json()));
    }

    post(object: User) {
        return this.http.post(this.Url, object)
    }
    put(object: User) {
        return this.http.put(this.Url + object)
    }
    get(id: number): Observable<User> {
        return Observable.from(this.http.get(this.Url + id).map((res: Response) => res.json()));
    }

    getAll(): Observable<User[]> {
        return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
    }


}
