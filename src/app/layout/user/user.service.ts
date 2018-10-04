import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    public url = 'http://localhost:8080';
    public relative = '/user/';
    public user;

    constructor(private http: HttpClient) { }

    getRoute(rota) {
        return this.url + this.relative + rota;
    }

    public getUsers(): Observable<any> {
        return this.http.get(this.getRoute('list'));
    }

    public save(user): Observable<any> {
        return this.http.post(this.getRoute('save'), user);
    }

    public login(user): Observable<any> {
        return this.http.post(this.url + '/login', user);
    }

    public remove(id): Observable<any> {
        return this.http.post(this.getRoute('remove'), id);
    }

    public setUser(user){
        this.user = user;
    }

    public getUser(){
        return this.user;
    }
}
