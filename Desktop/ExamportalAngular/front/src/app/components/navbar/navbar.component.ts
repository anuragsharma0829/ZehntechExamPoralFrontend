import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import * as $ from 'jquery';
import 'bootstrap';
import { UserserviceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  isLoggedIn=false;
  user:any;
  isOpen = false;
  iname:any;
  serveeimage:any
  Api: any;
  imageName: any;
  imageSrc: any;

  constructor(public login:LoginService, private _user:UserserviceService){ }
   
  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn=this.login.isLoggedIn();
      this.user=this.login.getUser();
      this.iname=this.user.profile;
      this.Api = 'http://localhost:8081/user/post/image/';
      this.imageName = this.iname;
      this.imageSrc = this.imageName ? this.Api + this.imageName : '/assets/default_profile.png';
      localStorage.setItem('user_profile_image', this.imageSrc);
    });

    // Retrieve user profile image URL from local storage
    const userProfileImage = localStorage.getItem('user_profile_image');
    this.imageSrc = userProfileImage ? userProfileImage : '/assets/default_profile.png';
  }
  
  public setUserP(){
    // Set image
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }


}
