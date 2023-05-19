import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgotpassServiceService } from 'src/app/service/forgotpass-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirm-mail',
  templateUrl: './confirm-mail.component.html',
  styleUrls: ['./confirm-mail.component.css']
})
export class ConfirmMailComponent {


  logindataa = {
    email: ''
  }
 


  constructor(private forgot: ForgotpassServiceService, private snack: MatSnackBar, private router: Router) { }
  @ViewChild('f', { static: true })
  f!: NgForm;
  ngOnInit(): void {

  }

  sendEmail() {
    if (this.f.valid) {
    this.forgot.sendMail(this.logindataa).subscribe((data) => {
      console.log(this.logindataa);
      console.log("done");
      Swal.fire("Success", "Email Sent Successfully", 'success')
      // Navigate to the next page here
      this.router.navigate(['/nextmail'], { queryParams: { email: this.logindataa.email}});
    }, (error) => {
      console.log("error");
      Swal.fire("error", "User Not Found !!", 'error')
    })
  }
  }

}
