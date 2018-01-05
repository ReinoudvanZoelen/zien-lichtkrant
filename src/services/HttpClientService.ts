import { Router } from "@angular/router";
import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpClientService {

    constructor(private http: Http, private router: Router) { }

    authorize(headers: Headers) {
        headers.append('Content-Type', 'application/json');
    }

    get(url) {
        const headers = new Headers();
        this.authorize(headers);

        return this.http.get(url, { headers: headers });
    }

    post(url, body){
        const headers = new Headers();
        this.authorize(headers);

        return this.http.post(url, body, {headers: headers});
    }

    put(url){
        const headers = new Headers();
        this.authorize(headers);

        return this.http.put(url, {headers: headers});
    }

    login(url){
        const headers = new Headers();
        this.authorize(headers);

        return this.http.post(url, {headers: headers});
    }
}