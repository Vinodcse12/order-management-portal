import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  user : any;
  authToken : any;
  url = "http://localhost:9090";
  constructor(private http: HttpClient) { 

  }

  public login(user) : Observable<any> {
    const url = this.url +""+'/login';
    return this.http.post(url, {user} );
  }

  public setUserInfo(user) : any{
    this.user = user;
  }

  public getUserInfo() : any {
    return this.user;
  }
}
