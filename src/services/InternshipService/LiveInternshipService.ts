import { Injectable } from '@angular/core';
import { host, folder } from 'global';
import { Response } from '@angular/http';
import { HttpClientService } from 'services/HttpClientService';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Internship } from "models/Internship";
import { IInternshipService } from 'services/InternshipService/IInternshipService';



@Injectable()
export class LiveInternshipService implements IInternshipService {

    post(object: Internship) {
        return this.http.post(this.Url, object)
    }
    put(object: Internship) {
        return this.http.put(this.Url + object)
    }
    get(id: number): Observable<Internship> {
        return Observable.from(this.http.get(this.Url + id).map((res: Response) => res.json()));
    }

    private Url = host + folder + 'internship/';

    constructor(private http: HttpClientService) {

    }

    getAll(): Observable<Internship[]> {
        return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
    }
}
