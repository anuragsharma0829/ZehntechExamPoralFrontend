import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotform',
  templateUrl: './forgotform.component.html',
  styleUrls: ['./forgotform.component.css']
})
export class ForgotformComponent {


  email: any

  user = {
    password: '',
    confirm_password:''
  }


  @ViewChild('f', { static: true })
  f!: NgForm;

  constructor(private _routr: ActivatedRoute, private _user: UserserviceService,private _snack:MatSnackBar) {

  }
  ngOnInit(): void {
    this.email = this._routr.snapshot.queryParamMap.get('email');
    console.log(this.email);
    console.log(this._routr);


  }
  resetpass() {

    if(this.user.password != this.user.confirm_password){
        return;
    }

    if (this.f.valid) {

        this._user.forgotPass(this.user, this.email).subscribe((data) => {
            Swal.fire({
                title: 'Success',
                text: 'New password set successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                // Redirect to login page
                window.location.href = '/login';
            });
        }, (error) => {
            Swal.fire('error', 'Something went wrong, please try again.', 'error');
        });
    }
}

}
