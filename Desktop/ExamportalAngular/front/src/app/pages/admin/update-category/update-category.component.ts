import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { retry } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  constructor(private _route: ActivatedRoute, private _cat: CategoryService) {

  }
  cId = 0;
  category = {
    title: '',
    description: ''
  }

  ngOnInit(): void {

    this.cId = this._route.snapshot.params['cid'];
    console.log(this.cId);
    this._cat.getCategory(this.cId).subscribe(
      (data: any) => {
        console.log(data);
        this.category = data
      },
      (error) => {
        console.log(error);

      }
    );

  }

// update form
public updateData(){

  if(this.category.title==null || this.category.title.trim()==''){
    return;
  }
  if(this.category.description.trim()=='' || this.category.description==null){
    return;
  }

  // Validation
  this._cat.updateCategory(this.category).subscribe(
  (data)=>{
  Swal.fire("Success",'Category updated','success')
  },
  (error)=>{
    Swal.fire("Error",'Something is went wrong!! Please try again!!','error')
  }
  )
}

}
