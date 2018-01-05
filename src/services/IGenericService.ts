import {Observable} from 'rxjs/Observable';

export interface IGenericService<T> {
  post(object: T);

  put(object: T);

  get(id: number): Observable<T>;

  getAll(): Observable<T[]>;
}
