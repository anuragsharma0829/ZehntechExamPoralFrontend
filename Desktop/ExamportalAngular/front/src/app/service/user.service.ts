import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  // Add User

  public addUser(user: any) {
    return this.http.post(`${baseUrl}/user/`, user);
  }

  // Get All users 
  public getallUsers() {
    return this.http.get(`${baseUrl}/user/`)
  }

  // Delete User
  public deleteUser(id: any) {
    return this.http.delete(`${baseUrl}/user/${id}`)
  }

  // Get Profile
  public getProfile(iname: any) {
    return this.http.get(`${baseUrl}/user/post/image/${iname}`)
  }

  // Get User by Id
  public getUserbyId(id: any) {
    return this.http.get(`${baseUrl}/user/update/${id}`)
  }


  // Update image 
  public Setimage(id: any, file: File) {
    const formData = new FormData();
    formData.append('image', file); // note that 'image' matches the @RequestParam name
    return this.http.post(`${baseUrl}/user/post/image/${id}`, formData);
  }

  // Get Top scorer
  public getTopScorer() {
    return this.http.get(`${baseUrl}/user/top/`)
  }


  // Forgot Service
  public forgotPass(user: any, email: any) {
    return this.http.put(`${baseUrl}/user/forgot/${email}`, user)
  }

  // Update USer
  public updateUSer(uid:any,user2:any){
    console.log('user2 object:', user2);
    return this.http.put(`${baseUrl}/user/${uid}`,user2)
  }


  // serve image
  public  serveImage(){
    return this.http.get(`${baseUrl}/user/`)
  }

}
