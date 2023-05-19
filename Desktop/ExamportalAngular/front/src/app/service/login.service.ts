import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject= new Subject<boolean>();

  constructor(private http:HttpClient) { }

  // Generate Token
  
  public generateToken(logindata:any)
  {
    return this.http.post(`${baseUrl}/generate-token`,logindata);
  }

  // Get current user
  public getCurrentUser(){
    return this.http.get (`${baseUrl}/current-user`);
  }

  // login User: Set token in local storage
  public loginUser(token: string)
  {
    localStorage.setItem("token",token);
  
    return true;
  }

  // is login : user is login or not
  public isLoggedIn(){
    let tokenstr=localStorage.getItem("token")
    if(tokenstr==undefined || tokenstr=='' || tokenstr== null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  // Loggout: remove token from localstorage("")
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  // get token
  public getToken(){
return localStorage.getItem('token');
  }
  //set userDetails
  public setuser(user: any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  // Get User
  public getUser(){
    let userstr=localStorage.getItem("user");
    if(userstr!=null)
    {
      return JSON.parse(userstr);
    }else{
      this.logout();
      return null;
    }
  }

  // get userRole
  public grtUserRole(){
    let user=this.getUser()
    return user.authorities[0].authority;
  }

}