import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { UserserviceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent {

  user:any;
  iname:any;
  serveeimage:any
  Api: any
  imageName: any;
  imageSrc:any

constructor(private login:LoginService,private _user:UserserviceService){}

//  baseUrl="/user/post/image/";


ngOnInit(): void{
  this.user=this.login.getUser();
  this.iname=this.user.profile;
  console.log(this.iname);
  this.Api = 'http://localhost:8081/user/post/image/';
  this.imageName = this.iname;
  this.imageSrc = this.Api + this.imageName;
}

onFileSelected(event: any) {
  const file: File = event.target.files[0];
  const formData: FormData = new FormData();
  formData.append('file', file, file.name);
}


}
