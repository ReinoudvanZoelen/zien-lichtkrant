import {IGenericService} from '../IGenericService';
import {User} from '../../models/user';
import {Observable} from 'rxjs/Observable';

export interface IUserService extends IGenericService<User> {
  login(username: string, password: string): Observable<User>;
}
