import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }

  // Load all the Category
  public category(){
    return this._http.get(`${baseUrl}/category/`);
  }

  // Add category
  public addCategory(category: any){
    return this._http.post(`${baseUrl}/category/`,category);
  }

  // Delete Category
 public deleteCategory(cid:any){
  return this._http.delete(`${baseUrl}/category/${cid}`);
}

// Update CAtegory
public updateCategory(category:any){
  return this._http.put(`${baseUrl}/category/`,category)
}


// Get total category
public totalCategory(){
  return this._http.get(`${baseUrl}/category/ctotal`);
}

//  Get Single CAtegory
public getCategory(cid:any){
  return this._http.get(`${baseUrl}/category/${cid}`);
}
}
