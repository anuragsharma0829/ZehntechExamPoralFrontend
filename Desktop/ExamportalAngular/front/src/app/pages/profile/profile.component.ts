import { Component } from '@angular/core';
import baseUrl from 'src/app/service/helper';
import { LoginService } from 'src/app/service/login.service';
import { UserserviceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;
  iname: any;
  serveeimage: any
  Api: any
  imageName: any;
  imageSrc: any

  public user2 = {
    profile: '',
  }
  constructor(private login: LoginService, private _user: UserserviceService) { }

  ngOnInit(): void {
    this.user = this.login.getUser();
    // this.iname = this.user.profile;
    this.user2 = this.user.profile;
    console.log("iamge heee", this.user2);
    this.Api = 'http://localhost:8081/user/post/image/';
    this.imageName = this.user2;
    this.imageSrc = this.Api + this.imageName;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    // Call the service to update the user's profile image
    this._user.Setimage(this.user._id, file).subscribe((res: any) => {
      // Update the user's profile image in the component
      this.user.profile = res.filename;
      this.imageName = this.user.profile;
      this.imageSrc = this.Api + this.imageName;
    });
  }

  getDefaultImage(name: string): string {
    const firstLetter = name.charAt(0).toUpperCase();
    const defaultImageSrc = `https://dummyimage.com/75x75/555555/ffffff&text=${firstLetter}`;
    return defaultImageSrc;
  }

}

