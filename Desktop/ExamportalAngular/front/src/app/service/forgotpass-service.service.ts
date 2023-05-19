import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ForgotpassServiceService {

  constructor(private _http:HttpClient) { }

  public sendMail(logindata:any){
    return this._http.post(`${baseUrl}/user/${logindata.email}`,"")
  }

}
