import { Injectable } from '@angular/core';
import { host, folder } from 'global';
import { Response } from '@angular/http';
import { HttpClientService } from 'services/HttpClientService';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Institution } from "models/institution";
import { IInstitutionService } from "services/InstitutionService/IInstitutionService";


@Injectable()
export class LiveInstitutionService implements IInstitutionService {

    post(object: Institution) {
        return this.http.post(this.Url, object)
    }
    put(object: Institution) {
        return this.http.put(this.Url + object)
    }
    get(id: number): Observable<Institution> {
        return Observable.from(this.http.get(this.Url + id).map((res: Response) => res.json()));
    }

    private Url = host + folder + 'institution/';

    constructor(private http: HttpClientService) {

    }

    getAll(): Observable<Institution[]> {
        return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
    }
}
