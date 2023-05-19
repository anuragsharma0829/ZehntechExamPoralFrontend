import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private http: HttpClient) { }

  getItems(page: any, size: any): Observable<any> {
    return this.http.get(`${baseUrl}/question/quest/?pageNumber=${page}&pageSize=${size}`)
      .pipe(map((res: any) => res));
  }

}
