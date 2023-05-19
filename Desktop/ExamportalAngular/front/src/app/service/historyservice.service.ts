import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class HistoryserviceService {

  constructor(private _http:HttpClient) { }

  // setHistory
  public setHistory(history: any){
    return this._http.post(`${baseUrl}/history/`,history);
  }

  // GetHistory
  public getHistory(uid:any,qId:any){
    return this._http.get(`${baseUrl}/history/${uid}/${qId}`)
  }

// get all history
public getAllhistory(){
  return this._http.get(`${baseUrl}/history`)
}

}
