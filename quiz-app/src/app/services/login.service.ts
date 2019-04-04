import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const ENDPOINTS = {
  LOGIN: 'login'
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userToken: string;

  constructor(private httpClient: HttpClient) { }

  login(u): Observable<Object> {
    return this.httpClient.post(environment.serverUri + ENDPOINTS.LOGIN, u).pipe(
      catchError((errorRes, o) => {
        console.log(errorRes);
        return of(errorRes);
      }),
      map((tokenRes: string) => {
        this.userToken = tokenRes;
        console.log(tokenRes);
        return tokenRes;
      })
    );
  }

  getToken(): string {
    return this.userToken;
  }

  isLogged() {
    return typeof this.userToken !== 'undefined';
  }
}
