import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegServiceService {

  user : any;
  authToken : any;
  url = "http://localhost:9090";
  constructor(private http : HttpClient) { }

  public registerUser(user) : Observable<any> {
    const url = this.url +""+'/signup';
    return this.http.post(url, {user} );
  }
}
