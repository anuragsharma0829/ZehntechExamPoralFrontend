import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import { Validators, FormControl } from '@angular/forms';
import {  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  @ViewChild('f', { static: true })
  f!: NgForm;
  

  category={
     title:'',
     description:''
  }
title: any;
 

  constructor(private _snack:MatSnackBar,private _category:CategoryService){

  }
  
  formSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null)
    {
      return;
    }
     // all done add category
    
     this._category.addCategory(this.category).subscribe(

    (data:any)=>{
      console.log(data);
      Swal.fire('Success !!','Category is added successfully','success');
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !!','Something is went wrong please try again','error');
    }
  )
  }
}
