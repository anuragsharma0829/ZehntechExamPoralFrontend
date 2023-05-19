import { Component, ResolvedReflectiveFactory } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f', { static: true })
  f!: NgForm;


logindata={
  username:"",
  password:"",
};
  constructor(private snack:MatSnackBar,private login:LoginService,private route:Router){

  }

  formSubmit(){
    
    if(this.logindata.username.trim()=='' || this.logindata.username=='' )
    {
    return;
    }

    if(
      this.logindata.password.trim()=='' || this.logindata.password=='' )
    {
    return;
    }
    
       // Request To server to generate Token
   this.login.generateToken(this.logindata).subscribe(
    (data:any)=>{
      console.log("success");
      console.log(data);

      // login...
     this.login.loginUser(data.token);
     this.login.getCurrentUser().subscribe(
      (user:any)=>{
        this.login.setuser(user);
        console.log(user);
        // redirect based on role
        if(this.login.grtUserRole()=="ADMIN")
        {
          // Admin dashboard
          {
           
            this.route.navigate(['admin']);
            this.login.loginStatusSubject.next(true);
          }
        }else if(this.login.grtUserRole()=='NORMAL')
        {
          this.route.navigate(['user-dashbaord/0']);
          this.login.loginStatusSubject.next(true);
         
        }else{
          this.login.logout();
        }
        
      }
     )

    },
    (error)=>{
      console.log("errror");
      console.log(error);
      this.snack.open("Invalid Datials !! Try again" ,'',{
        duration:3000
      })
      
    }
   )
  }

}
