import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
// import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  @ViewChild('f', { static: true })
  f!: NgForm;

  constructor(private userService: UserserviceService, private snack: MatSnackBar, private routr: Router) { }

  ngOnInit() {

  }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  }


  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null || this.user.password == '' || this.user.password == null || this.user.firstName == '' || this.user.firstName == null || this.user.lastName == '' || this.user.lastName == null || this.user.email == '' || this.user.email == null || this.user.phone == '' || this.user.phone == null) {
      return;
    }

    if (this.f.valid) {

      // Add userservice constructor -> import userservice
      this.userService.addUser(this.user).subscribe(
        (data) => {
          // Success
          console.log(data);
          Swal.fire({
            title: "",
            text: "Congratulations,your account has been successfully created..",
            icon: "success"
          }).then(() => {
            this.routr.navigate(['/login']);
          });

        },
        (error) => {
          // Error
          this.snack.open("User alerady exists...", "Try again")
        }
      )
    }
    else {
      console.log("error");

    }



  }

}
