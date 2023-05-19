import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { LoginService } from 'src/app/service/login.service';
import { UserserviceService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  uid: any
  
    public user = {
    profile:'',
    }

    public user2={
      username:'',
      email:'',
      phone:'',
      lastName:'',
      firstName:''
    }
  
    iname:any;
    serveeimage:any
    Api: any
    imageName: any;
    imageSrc:any

  constructor(private _user: UserserviceService, private _routr: ActivatedRoute,private mat:MatSnackBar) {

  }
  ngOnInit(): void {
    // get by id 
    this.uid = this._routr.snapshot.params['id']
    console.log(this.uid);

    this._user.getUserbyId(this.uid).subscribe((data: any) => {
      this.user = data;
      this.iname=this.user.profile;
      console.log(this.iname);
      
      this.user2 = data;
      console.log(this.user);
      this.Api ='http://localhost:8081/user/post/image/';
      this.imageName = this.iname;
      this.imageSrc = this.Api + this.imageName;
    })

    
   

  }
  
  public onFileSelected(event: any) {
    const file = event.target.files[0];
    this._user.Setimage(this.uid, file).subscribe((response) => {
      // handle the response as needed
      // update ho gayi but chosse karte hi ho rahi he isliyealret hata ke 
    //  Swal.fire('Success','Profile Updated Successfully','success')
    });

    
  }


  uuser():void{
  
 this._user.updateUSer(this.uid,this.user2).subscribe((data)=>{
 Swal.fire('success','User Updated Successfully','success')
 })

  }
  }
  



